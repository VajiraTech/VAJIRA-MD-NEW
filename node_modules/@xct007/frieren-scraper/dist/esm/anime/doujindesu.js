import { Axios, Cheerio } from "../Utils.js";
import { DoujindesuBaseUrl } from "../Constant.js";
async function latest() {
    try {
        const { data } = await Axios.get(DoujindesuBaseUrl).catch((e) => e?.response);
        const $ = Cheerio(data);
        const _temp = [];
        $(".feed#archives > .entries > .entry").each((i, e) => {
            const title = $(e).find("a").attr("title");
            const url = DoujindesuBaseUrl + $(e).find("a").attr("href");
            const thumbnail = $(e).find("img").attr("src");
            const chapter = $(e).find(".artists > a > span").text();
            _temp.push({
                title,
                chapter,
                thumbnail,
                url,
            });
        });
        if (Array.isArray(_temp) && _temp.length) {
            return _temp;
        }
        else {
            throw new Error("_temp is not an Array");
        }
    }
    catch (e) {
        return { error: true, message: e?.TypeError || String(e) };
    }
}
async function search(query) {
    try {
        const { data } = await Axios.get(DoujindesuBaseUrl, {
            params: {
                s: query,
            },
        }).catch((e) => e?.response);
        const $ = Cheerio(data);
        const _temp = [];
        $(".entries > .entry").each((i, e) => {
            const title = $(e).find("a").attr("title");
            const thumbnail = $(e).find("img").attr("src");
            const type = $(e).find(".type").text().trim();
            const score = $(e).find(".score").text().trim();
            const status = $(e).find(".status").text().trim();
            const url = DoujindesuBaseUrl + $(e).find("a").attr("href");
            _temp.push({ title, thumbnail, type, score, status, url });
        });
        if (Array.isArray(_temp) && _temp.length) {
            return _temp;
        }
        else {
            throw new Error("_temp is not an Array");
        }
    }
    catch (e) {
        return { error: true, message: e?.TypeError || String(e) };
    }
}
async function detail(url) {
    if (!url.includes(DoujindesuBaseUrl)) {
        return {
            error: true,
            message: "Invalid url!",
        };
    }
    try {
        const { data } = await Axios.get(url).catch((e) => e?.response);
        const $ = Cheerio(data);
        const title = $(".thumbnail > a > img").attr("title").trim();
        const titles = $("h1 > span > i").text().trim();
        const thumbnail = $(".thumbnail > a > img").attr("src");
        const _metaData = [];
        $(".metadata > table > tbody > tr").each((i, e) => {
            const rowD = $(e).find("td");
            const rowA = [];
            rowD.each((_i, _e) => {
                rowA.push($(_e).text());
            });
            _metaData.push(rowA);
        });
        const metadata = _metaData.reduce((obj, [key, value]) => {
            obj[key.toLowerCase().replace(/\s/g, "_")] = value.trim();
            return obj;
        }, {});
        const _tags = [];
        $(".tags > a").each((i, e) => {
            _tags.push($(e).text().trim());
        });
        const tags = _tags.join(", ");
        const links = [];
        $(".linkdl > a").each((i, e) => {
            links.push({ title: $(e).attr("title"), url: $(e).attr("href") });
        });
        return {
            title,
            titles,
            tags,
            thumbnail,
            metadata,
            links,
        };
    }
    catch (e) {
        return { error: true, message: e?.TypeError || String(e) };
    }
}
export { latest, search, detail };

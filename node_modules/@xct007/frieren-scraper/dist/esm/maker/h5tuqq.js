import { Axios } from "../Utils.js";
import { APIsItsRose } from "../Constant.js";
export async function h5tuqq(url) {
    let isImageUrl = false;
    const { headers } = await Axios.head(url).catch((e) => e?.response);
    if (headers &&
        headers["content-type"] &&
        /image/i.test(headers["content-type"])) {
        isImageUrl = true;
    }
    if (!isImageUrl) {
        return {
            error: true,
            message: "url not contains image",
        };
    }
    try {
        const { data } = await Axios.request({
            baseURL: APIsItsRose,
            url: "/image/h5tuqq",
            method: "GET",
            params: {
                url,
            },
        }).catch((e) => e?.response);
        if (!data.status || !data.result) {
            throw new Error(data.message || ":(");
        }
        return data.result;
    }
    catch (e) {
        return {
            error: true,
            message: String(e),
        };
    }
}

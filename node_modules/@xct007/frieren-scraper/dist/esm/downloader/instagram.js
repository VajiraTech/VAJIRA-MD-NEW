import { Axios, Cheerio } from "../Utils.js";
import { InstagramDownloadBaseUrlV1 } from "../Constant.js";
class Instagrams {
    constructor() { }
    static async v1(url) {
        try {
            const { data, headers } = await Axios.request({
                url: InstagramDownloadBaseUrlV1,
                method: "POST",
                headers: {
                    ["Content-Type"]: "application/x-www-form-urlencoded",
                    ["Upgrade-Insecure-Requests"]: "1",
                    ["Referer"]: InstagramDownloadBaseUrlV1,
                    ["Referrer-Policy"]: "strict-origin-when-cross-origin",
                },
                data: new URLSearchParams({ url, submit: "" }),
            }).catch((e) => e?.response);
            const $ = Cheerio(data);
            const _temp = [];
            $("#downloadhere > a[download='']").each((i, e) => {
                _temp.push({ url: $(e).attr("href") });
            });
            if (Array.isArray(_temp) && _temp.length) {
                return _temp;
            }
            else {
                throw new Error($(".alert-danger").text() || "v1: Failed to retrieve data.");
            }
        }
        catch (e) {
            return {
                error: true,
                message: String(e?.Error || e),
            };
        }
    }
}
export const instagram = {
    v1: Instagrams.v1,
};

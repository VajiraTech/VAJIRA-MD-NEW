"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instagram = void 0;
const Utils_1 = require("../Utils");
const Constant_1 = require("../Constant");
class Instagrams {
    constructor() { }
    static async v1(url) {
        try {
            const { data, headers } = await Utils_1.Axios.request({
                url: Constant_1.InstagramDownloadBaseUrlV1,
                method: "POST",
                headers: {
                    ["Content-Type"]: "application/x-www-form-urlencoded",
                    ["Upgrade-Insecure-Requests"]: "1",
                    ["Referer"]: Constant_1.InstagramDownloadBaseUrlV1,
                    ["Referrer-Policy"]: "strict-origin-when-cross-origin",
                },
                data: new URLSearchParams({ url, submit: "" }),
            }).catch((e) => e?.response);
            const $ = (0, Utils_1.Cheerio)(data);
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
exports.instagram = {
    v1: Instagrams.v1,
};

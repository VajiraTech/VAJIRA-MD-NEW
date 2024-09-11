"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.h5tuqq = void 0;
const Utils_1 = require("../Utils");
const Constant_1 = require("../Constant");
async function h5tuqq(url) {
    let isImageUrl = false;
    const { headers } = await Utils_1.Axios.head(url).catch((e) => e?.response);
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
        const { data } = await Utils_1.Axios.request({
            baseURL: Constant_1.APIsItsRose,
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
exports.h5tuqq = h5tuqq;

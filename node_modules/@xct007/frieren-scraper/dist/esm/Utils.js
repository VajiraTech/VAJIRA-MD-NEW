import axios from "axios";
import cheerio from "cheerio";
function CreateInstance(headers, config) {
    return axios.create({
        headers: {
            "User-Agent": "Frieren-Scraper (0.0.1x)",
            ...headers,
        },
        ...config,
    });
}
export const Axios = CreateInstance();
export function Cheerio(data) {
    return cheerio.load(data);
}

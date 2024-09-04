import { errorHandling } from "../Interface.js";
import { OtakudesuLatest, OtakudesuSearch, OtakudesuDetail } from "../Types.js";
declare function latest(): Promise<OtakudesuLatest[] | errorHandling>;
declare function search(query: string): Promise<OtakudesuSearch[] | errorHandling>;
declare function detail(url: string): Promise<OtakudesuDetail | errorHandling>;
export { latest, search, detail };

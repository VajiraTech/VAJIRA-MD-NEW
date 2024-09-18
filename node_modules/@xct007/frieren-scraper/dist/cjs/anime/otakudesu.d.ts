import { errorHandling } from "../Interface";
import { OtakudesuLatest, OtakudesuSearch, OtakudesuDetail } from "../Types";
declare function latest(): Promise<OtakudesuLatest[] | errorHandling>;
declare function search(query: string): Promise<OtakudesuSearch[] | errorHandling>;
declare function detail(url: string): Promise<OtakudesuDetail | errorHandling>;
export { latest, search, detail };

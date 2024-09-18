import { errorHandling } from "../Interface.js";
import { FacebookDownloadResult } from "../Types.js";
declare function v1(url: string): Promise<FacebookDownloadResult | errorHandling>;
export { v1 };

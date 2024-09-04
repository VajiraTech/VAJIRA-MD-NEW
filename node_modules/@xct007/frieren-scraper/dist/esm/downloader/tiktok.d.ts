import { errorHandling } from "../Interface.js";
import { TiktokDownloadResult } from "../Types.js";
declare function v1(url: string): Promise<TiktokDownloadResult | errorHandling>;
export { v1 };

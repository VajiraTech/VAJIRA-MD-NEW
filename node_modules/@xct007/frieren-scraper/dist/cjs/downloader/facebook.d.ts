import { errorHandling } from "../Interface";
import { FacebookDownloadResult } from "../Types";
declare function v1(url: string): Promise<FacebookDownloadResult | errorHandling>;
export { v1 };

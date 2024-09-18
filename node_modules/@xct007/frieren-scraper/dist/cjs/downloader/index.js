"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pinterest = exports.facebook = exports.zippyshare = exports.tiktok = exports.instagram = exports.storyWa = exports.youtube = void 0;
const youtube = __importStar(require("./youtube"));
exports.youtube = youtube;
const storyWa = __importStar(require("./statusWaIndonesia"));
exports.storyWa = storyWa;
const tiktok = __importStar(require("./tiktok"));
exports.tiktok = tiktok;
const instagram_1 = require("./instagram");
Object.defineProperty(exports, "instagram", { enumerable: true, get: function () { return instagram_1.instagram; } });
const zippyshare = __importStar(require("./zippyshare"));
exports.zippyshare = zippyshare;
const facebook = __importStar(require("./facebook"));
exports.facebook = facebook;
const pinterest_1 = require("./pinterest");
Object.defineProperty(exports, "pinterest", { enumerable: true, get: function () { return pinterest_1.pinterest; } });

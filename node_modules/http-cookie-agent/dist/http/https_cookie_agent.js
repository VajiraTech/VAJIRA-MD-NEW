"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpsCookieAgent = void 0;
var _nodeHttps = _interopRequireDefault(require("node:https"));
var _create_cookie_agent = require("./create_cookie_agent");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const HttpsCookieAgent = exports.HttpsCookieAgent = (0, _create_cookie_agent.createCookieAgent)(_nodeHttps.default.Agent);
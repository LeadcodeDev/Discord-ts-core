"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = exports.Events = exports.Event = void 0;
var Events_1 = require("./Events");
Object.defineProperty(exports, "Event", { enumerable: true, get: function () { return Events_1.Event; } });
Object.defineProperty(exports, "Events", { enumerable: true, get: function () { return Events_1.Events; } });
var Commands_1 = __importDefault(require("./Commands"));
exports.Command = Commands_1.default;
//# sourceMappingURL=index.js.map
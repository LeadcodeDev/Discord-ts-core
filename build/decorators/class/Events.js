"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = exports.Event = void 0;
var Events_1 = __importDefault(require("../../Enums/Events"));
exports.Events = Events_1.default;
function Event(_a) {
    var type = _a.type;
    return function (constructor) {
        constructor.prototype.name = type;
    };
}
exports.Event = Event;
//# sourceMappingURL=Events.js.map
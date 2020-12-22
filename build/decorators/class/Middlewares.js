"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hooks = exports.Middleware = void 0;
var Hooks_1 = __importDefault(require("../../Enums/Hooks"));
exports.Hooks = Hooks_1.default;
function Middleware(_a) {
    var lifecycle = _a.lifecycle;
    return function (constructor) {
        constructor.prototype.lifecycle = lifecycle;
        constructor.prototype.execute = function (params) { return constructor.prototype.emit(name, params); };
    };
}
exports.Middleware = Middleware;
//# sourceMappingURL=Middlewares.js.map
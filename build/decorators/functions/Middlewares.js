"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hooks = exports.Middleware = void 0;
var Hooks_1 = __importDefault(require("../../Enums/Hooks"));
exports.Hooks = Hooks_1.default;
function Middleware(ctx) {
    return function (target, propertyKey, descriptor) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return Object.defineProperty(target, propertyKey, { value: { object: __assign(__assign({}, ctx), { type: 'middleware', run: target[propertyKey] }) } });
    };
}
exports.Middleware = Middleware;
//# sourceMappingURL=Middlewares.js.map
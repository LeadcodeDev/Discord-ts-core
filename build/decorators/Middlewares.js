"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Middleware(_a) {
    var lifecycle = _a.lifecycle;
    return function (constructor) {
        constructor.prototype.lifecycle = lifecycle;
        constructor.prototype.execute = function (params) { return constructor.prototype.emit(name, params); };
    };
}
exports.default = Middleware;
//# sourceMappingURL=Middlewares.js.map
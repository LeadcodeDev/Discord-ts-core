"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Event(_a) {
    var type = _a.type;
    return function (constructor) {
        constructor.prototype.name = type;
    };
}
exports.default = Event;
//# sourceMappingURL=Events.js.map
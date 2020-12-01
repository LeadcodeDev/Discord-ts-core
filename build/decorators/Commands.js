"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Event(_a) {
    var name = _a.name, description = _a.description, tag = _a.tag, alias = _a.alias, roles = _a.roles;
    return function (constructor) {
        constructor.prototype.name = name;
        constructor.prototype.description = description;
        constructor.prototype.tag = tag;
        constructor.prototype.alias = alias || [];
        constructor.prototype.roles = roles || [];
    };
}
exports.default = Event;
//# sourceMappingURL=Commands.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = exports.Command = exports.Event = void 0;
var Commands_1 = __importDefault(require("Core/decorators/Commands"));
exports.Command = Commands_1.default;
var Events_1 = __importDefault(require("Core/decorators/Events"));
exports.Event = Events_1.default;
var Middlewares_1 = __importDefault(require("Core/decorators/Middlewares"));
exports.Middleware = Middlewares_1.default;
//# sourceMappingURL=index.js.map
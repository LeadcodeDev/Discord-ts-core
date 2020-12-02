"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var Env = /** @class */ (function () {
    function Env() {
    }
    /**
     *
     * @param key .env variable
     */
    Env.prototype.get = function (key) {
        return process.env[key] || '';
    };
    return Env;
}());
exports.default = new Env();
//# sourceMappingURL=Env.js.map
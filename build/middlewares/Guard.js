"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Bot_1 = __importDefault(require("Core/Bot"));
var Logger_1 = require("Core/utils/Logger");
var Lifecycle_1 = __importDefault(require("Core/middlewares/Lifecycle"));
var hooks_1 = __importDefault(require("Core/enums/hooks"));
var Env_1 = __importDefault(require("Core/utils/Env"));
var Guard = /** @class */ (function () {
    function Guard() {
    }
    Guard.prototype.protect = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var content, member, author, sender, args, commandName;
            var _this = this;
            return __generator(this, function (_a) {
                content = message.content, member = message.member, author = message.author;
                sender = member;
                args = content.split(' ');
                commandName = args[0].replace(Env_1.default.get('CLIENT_PREFIX'), '');
                Bot_1.default.commands
                    .filter(function (command) { var _a; return command.tag === commandName || ((_a = command.alias) === null || _a === void 0 ? void 0 : _a.includes(commandName)); })
                    .forEach(function (command) { return __awaiter(_this, void 0, void 0, function () {
                    var roles, name;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                roles = command.roles, name = command.name;
                                return [4 /*yield*/, message.delete()];
                            case 1:
                                _a.sent();
                                if (!((roles === null || roles === void 0 ? void 0 : roles.length) != 0)) return [3 /*break*/, 8];
                                if (!this.hasRoles(roles, sender)) return [3 /*break*/, 4];
                                return [4 /*yield*/, command.run(message, args.slice(1))];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, Logger_1.Logger.send(Logger_1.State.INFO, author.tag + " execute command (" + name + ")")];
                            case 3:
                                _a.sent();
                                return [3 /*break*/, 7];
                            case 4: return [4 /*yield*/, sender.lastMessage.reply("Vous n'avez pas l'autorisation d'excuter cette commande.")];
                            case 5:
                                _a.sent();
                                return [4 /*yield*/, Logger_1.Logger.send(Logger_1.State.ERROR, author.tag + " not allowed to execute command (" + command.name + ")")];
                            case 6:
                                _a.sent();
                                _a.label = 7;
                            case 7: return [3 /*break*/, 11];
                            case 8: return [4 /*yield*/, command.run(message, args.slice(1))];
                            case 9:
                                _a.sent();
                                return [4 /*yield*/, Logger_1.Logger.send(Logger_1.State.INFO, author.tag + " execute command (" + name + ")")];
                            case 10:
                                _a.sent();
                                _a.label = 11;
                            case 11:
                                Lifecycle_1.default.emit(hooks_1.default.COMMAND_RECEIVED, {
                                    commandName: name,
                                    commandRoles: roles,
                                    sender: author,
                                    allowed: this.hasRoles(roles, sender),
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
                Lifecycle_1.default.emit(hooks_1.default.MESSAGE_RECEIVED, { message: message });
                return [2 /*return*/];
            });
        });
    };
    Guard.prototype.hasRoles = function (roles, sender) {
        var bool = false;
        if (sender.roles.cache.size > 1) {
            roles.map(function (role) { return sender.roles.cache.has(role) && (bool = true); });
        }
        return bool;
    };
    return Guard;
}());
exports.default = new Guard();
//# sourceMappingURL=Guard.js.map
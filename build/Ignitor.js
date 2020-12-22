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
var Lifecycle_1 = __importDefault(require("./Middlewares/Lifecycle"));
var Hooks_1 = __importDefault(require("./Enums/Hooks"));
var Ignitor = /** @class */ (function () {
    function Ignitor(bot) {
        this.bot = bot;
        this.run();
    }
    Ignitor.prototype.run = function () {
        var _this = this;
        var _a = this.bot, client = _a.client, events = _a.events, middlewares = _a.middlewares, modules = _a.modules, commands = _a.commands;
        Lifecycle_1.default.emit(Hooks_1.default.BEFORE_START);
        events.forEach(function (_a) {
            var name = _a.name, run = _a.run;
            return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, client.on(name, run)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            }); });
        });
        middlewares.forEach(function (middleware) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Lifecycle_1.default.on(middleware.lifecycle, function (params) { return middleware.run(params); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); });
        modules.forEach(function (module) {
            Object.values(Object.getPrototypeOf(new module())).forEach(function (func) { return __awaiter(_this, void 0, void 0, function () {
                var module;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            module = Object.getOwnPropertyDescriptors(func);
                            if (((_a = module === null || module === void 0 ? void 0 : module.object) === null || _a === void 0 ? void 0 : _a.value.type) == 'command') {
                                commands.push({
                                    name: func.object.name,
                                    description: func.object.description,
                                    tag: func.object.tag,
                                    alias: func.object.alias || [],
                                    roles: func.object.roles || [],
                                    run: func.object.run,
                                });
                            }
                            if (!(((_b = module === null || module === void 0 ? void 0 : module.object) === null || _b === void 0 ? void 0 : _b.value.type) == 'middleware')) return [3 /*break*/, 2];
                            return [4 /*yield*/, Lifecycle_1.default.on(func.object.lifecycle, function (params) { return func.object.run(params); })];
                        case 1:
                            _c.sent();
                            _c.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); });
        });
        Lifecycle_1.default.emit(Hooks_1.default.AFTER_START);
    };
    return Ignitor;
}());
exports.default = Ignitor;
//# sourceMappingURL=Ignitor.js.map
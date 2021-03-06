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
exports.State = exports.Logger = void 0;
var chalk_1 = __importDefault(require("chalk"));
var Logger_1 = __importDefault(require("../Enums/Logger"));
exports.State = Logger_1.default;
var Env_1 = __importDefault(require("../Utils/Env"));
var moment_1 = __importDefault(require("moment"));
var Logger = /** @class */ (function () {
    function Logger() {
        moment_1.default.locale(Env_1.default.get('DEFAULT_TIMEZONE'));
    }
    Logger.prototype.send = function (type, message, prod) {
        var _a, _b;
        if (prod === void 0) { prod = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                if (Env_1.default.get('LOGGER')) {
                    if (((_a = process.env.NODE_ENV) === null || _a === void 0 ? void 0 : _a.trim()) == 'production' && prod) {
                        this.sendMessage(type, message);
                    }
                    else if (((_b = process.env.NODE_ENV) === null || _b === void 0 ? void 0 : _b.trim()) == 'development') {
                        this.sendMessage(type, message);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    Logger.prototype.sendMessage = function (type, message) {
        console.log(chalk_1.default.rgb(190, 190, 190)(this.date()) + " " + this.chooseColors(type) + " : " + message);
    };
    Logger.prototype.date = function () {
        return "[" + moment_1.default().format('DD/MM/YYYY hh:mm:ss') + "]";
    };
    Logger.prototype.chooseColors = function (type) {
        var sentence = '';
        switch (type) {
            case Logger_1.default.WARN:
                sentence = "" + chalk_1.default.bold.yellow(type);
                break;
            case Logger_1.default.INFO:
                sentence = "" + chalk_1.default.bold.cyan(type);
                break;
            case Logger_1.default.FATAL:
                sentence = "" + chalk_1.default.bold.rgb(170, 0, 0).bold(type);
                break;
            case Logger_1.default.ERROR:
                sentence = "" + chalk_1.default.bold.rgb(255, 85, 85)(type);
                break;
            case Logger_1.default.SUCCES:
                sentence = "" + chalk_1.default.bold.greenBright(type);
                break;
        }
        return sentence;
    };
    return Logger;
}());
var logger = new Logger();
exports.Logger = logger;
//# sourceMappingURL=Logger.js.map
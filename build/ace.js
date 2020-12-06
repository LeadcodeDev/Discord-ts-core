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
var fs_1 = __importDefault(require("fs"));
var _a = process.argv, commandName = _a[2], props = _a[3];
var args = props.split(',');
if (commandName == 'make:command') {
    if (args[0] != 'undefined') {
        var templateDir = process.cwd() + '/node_modules/@discord-ts-app/core/src/template/command';
        var indexDir = process.cwd() + '/src/Commands/index.ts';
        var commandDir = process.cwd() + '/src/Commands';
        var imp = Buffer.from("import " + (args[0].charAt(0).toUpperCase() + args[0].slice(1)) + " from 'App/Commands/" + (args[0].charAt(0).toUpperCase() + args[0].slice(1)) + "'\n");
        makeFile(indexDir, imp, templateDir, commandDir);
    }
}
if (commandName == 'make:event') {
    if (args[0] != 'undefined') {
        var templateDir = process.cwd() + '/node_modules/@discord-ts-app/core/src/template/event';
        var indexDir = process.cwd() + '/src/Events/index.ts';
        var eventDir = process.cwd() + '/src/Events';
        var imp = Buffer.from("import " + (args[0].charAt(0).toUpperCase() + args[0].slice(1)) + " from 'App/Events" + (args[0].charAt(0).toUpperCase() + args[0].slice(1)) + "'\n");
        makeFile(indexDir, imp, templateDir, eventDir, args[0]);
    }
}
if (commandName == 'make:middleware') {
    if (args[0] != 'undefined') {
        var templateDir = process.cwd() + '/node_modules/@discord-ts-app/core/src/template/middleware';
        var indexDir = process.cwd() + '/src/Middlewares/index.ts';
        var eventDir = process.cwd() + '/src/Middlewares';
        var imp = Buffer.from("import " + (args[0].charAt(0).toUpperCase() + args[0].slice(1)) + " from 'App/Middlewares/" + (args[0].charAt(0).toUpperCase() + args[0].slice(1)) + "'\n");
        makeFile(indexDir, imp, templateDir, eventDir, args[0]);
    }
}
function makeFile(indexDir, imp, templateDir, folderDir, eventName) {
    var _this = this;
    if (eventName === void 0) { eventName = ''; }
    fs_1.default.readFile(templateDir, 'utf8', function (err, data) {
        var fileNameUpperCase = args[0].charAt(0).toUpperCase() + args[0].slice(1);
        var newFile = data
            .replace(/~Example/g, fileNameUpperCase)
            .replace(/~example/g, args[0].toLowerCase())
            .replace(/~eventName/g, eventName.charAt(0).toLowerCase() + eventName.slice(1));
        fs_1.default.access(folderDir + "/" + fileNameUpperCase + ".ts", fs_1.default.constants.F_OK, function (err) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if ((err === null || err === void 0 ? void 0 : err.code) == 'ENOENT') {
                    fs_1.default.writeFile(folderDir + "/" + fileNameUpperCase + ".ts", newFile, function (error) {
                        if (!err)
                            console.log("File " + fileNameUpperCase + " was create");
                        fs_1.default.readFile(indexDir, function (_, initialData) {
                            var oldData = initialData.toString().replace(/ }/g, ", " + fileNameUpperCase + " }");
                            var oldDataBuffer = Buffer.from(oldData);
                            fs_1.default.open(indexDir, 'w+', function (_, fd) {
                                fs_1.default.write(fd, imp, 0, imp.length, 0, function () {
                                    fs_1.default.write(fd, oldDataBuffer, 0, oldDataBuffer.length, imp.length, function () {
                                        fs_1.default.close(fd, function () { });
                                    });
                                });
                            });
                        });
                    });
                }
                else {
                    return [2 /*return*/, console.log("File already exist in \"" + folderDir.replace(/\\/g, '/') + "\"")];
                }
                return [2 /*return*/];
            });
        }); });
    });
}
//# sourceMappingURL=ace.js.map
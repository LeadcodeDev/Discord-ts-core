"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCommands = exports.useClient = void 0;
var Bot_1 = __importDefault(require("../Bot"));
/**
 *	Get Bot unstance
 * @example
 * import { useClient } from 'Core/Hooks'
 * const client = useClient()
 * @returns Client
 */
function useClient() {
    return Bot_1.default.client;
}
exports.useClient = useClient;
/**
 *	Get Bot unstance
 * @example
 * import { useClient } from 'Core/Hooks'
 * const client = useClient()
 * @returns Client
 */
function useCommands() {
    return Bot_1.default.commands;
}
exports.useCommands = useCommands;
//# sourceMappingURL=UseContext.js.map
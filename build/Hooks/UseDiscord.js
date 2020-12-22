"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMessages = exports.useChannel = exports.useChannels = void 0;
var Bot_1 = __importDefault(require("../Bot"));
var Logger_1 = require("../Utils/Logger");
var discord_js_1 = require("discord.js");
/**
 *	Recovery of all channels
 * @example
 * import { useChannels } from 'Core/hooks'
 * const MyChannels = useChannels(true)
 *
 * console.log(MyChannels)
 * // Return my channels from discord guild
 *
 * @param truncate Default to false
 * @returns { Channels | undefined }
 */
function useChannels(_a) {
    var truncate = _a.truncate;
    var channels = [];
    Bot_1.default.client.channels.cache.forEach(function (channel) {
        truncate ? (channels = __spreadArrays(channels, [{ id: channel.id, type: channel.type }])) : (channels = __spreadArrays(channels, [channel]));
    });
    return channels;
}
exports.useChannels = useChannels;
/**
 *	Recovery of all channels
 * @example
 * import { useChannel } from 'Core/Hooks'
 * const MyChannel = useChannel('583050048766476355')
 *
 * console.log(MyChannel)
 * // Return my channel from discord guild with id
 *
 * @returns Channel
 */
function useChannel(id) {
    if (!id)
        throw Logger_1.Logger.send(Logger_1.State.ERROR, "Please select channel ID");
    return Bot_1.default.client.channels.cache.find(function (channel) { return channel.id === id; });
}
exports.useChannel = useChannel;
/**
 *	Recovery of all messages
 * @example
 * import { useMessages } from 'Core/Hooks'
 * const MyMessages = useMessages()
 *
 * console.log(MyMessages)
 * // Return messages from discord guild
 *
 * @returns Channel
 */
function useMessages() {
    var messagesList = [];
    Bot_1.default.client.channels.cache.forEach(function (channel) {
        if (channel instanceof discord_js_1.TextChannel) {
            channel.messages.cache.forEach(function (message) {
                messagesList = __spreadArrays(messagesList, [message]);
            });
        }
    });
    return messagesList;
}
exports.useMessages = useMessages;
//# sourceMappingURL=UseDiscord.js.map
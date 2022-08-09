"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.claudinarySecret = exports.claudinaryKey = exports.claudinar_Name = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.claudinar_Name = process.env['claudinar_Name'];
exports.claudinaryKey = process.env['cloudinaryKey'];
exports.claudinarySecret = process.env['cloudinarySecret'];

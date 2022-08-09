"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router_1 = __importDefault(require("./routers/router"));
const morgan_1 = __importDefault(require("morgan"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const appServer = (0, express_1.default)();
dotenv.config();
const timeEXp = 1000 * 60 * 60 * 24;
appServer.use((0, express_session_1.default)({
    secret: "rfghf66a76ythggi87au7td",
    saveUninitialized: true,
    cookie: { maxAge: timeEXp },
    resave: false,
}));
appServer === null || appServer === void 0 ? void 0 : appServer.use((0, cors_1.default)());
appServer === null || appServer === void 0 ? void 0 : appServer.use((0, cookie_parser_1.default)());
appServer === null || appServer === void 0 ? void 0 : appServer.set("views", path_1.default.join(__dirname, "views"));
appServer === null || appServer === void 0 ? void 0 : appServer.set("view engine", "ejs");
appServer === null || appServer === void 0 ? void 0 : appServer.use((0, morgan_1.default)("dev"));
appServer === null || appServer === void 0 ? void 0 : appServer.use(express_1.default.json());
appServer === null || appServer === void 0 ? void 0 : appServer.use(express_1.default.urlencoded({ extended: true }));
appServer === null || appServer === void 0 ? void 0 : appServer.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
appServer.use(router_1.default);
appServer.listen(process.env.PORT, () => {
    console.log(`✔ Server is running on port ${process.env.PORT} `);
});

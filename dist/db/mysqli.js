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
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mysql_1 = require("mysql");
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const conenct = yield (0, mysql_1.createPool)({
            host: "localhost",
            user: "root",
            password: "",
            database: "conciertos",
            charset: "utf8",
            port: 3306
        });
        return conenct;
    });
}
exports.connect = connect;

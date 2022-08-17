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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataControllers = void 0;
const mysqli_1 = require("../db/mysqli");
const bcrypt_1 = __importDefault(require("bcrypt"));
const cloudinary_1 = require("../utils/cloudinary");
const cloudinary_2 = require("../utils/cloudinary");
const fs_extra_1 = __importDefault(require("fs-extra"));
class DataControllers {
    postData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const conenct = yield (0, mysqli_1.connect)();
                conenct.query("SELECT * FROM usuario", (error, rows) => {
                    for (let i = 0; i < rows.length; i++) {
                        if (rows[i].correo == email) {
                            return res.send("EXISTEMAIL");
                        }
                    }
                    const rangeRounds = 10;
                    const encriptar = bcrypt_1.default.genSaltSync(rangeRounds);
                    const hasEncriptamiento = bcrypt_1.default.hashSync(password, encriptar);
                    conenct.query("INSERT INTO usuario(correo,password) VALUES(?, ?)", [email, hasEncriptamiento], (error, rows) => __awaiter(this, void 0, void 0, function* () {
                        if (rows) {
                            return res.send("SAVEDATA");
                        }
                        else {
                            return res.send("ERRDATA");
                        }
                    }));
                });
            }
            catch (error) {
                return res.sendStatus(301).json({ message: error });
            }
        });
    }
    loginAuthentication(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const conn = yield (0, mysqli_1.connect)();
                conn.query("SELECT password, id FROM usuario WHERE correo = ?", [email], (error, rows) => __awaiter(this, void 0, void 0, function* () {
                    if (error) {
                        console.log("el usuario no existe", error);
                        return res.send("ERRORDATALOGIN");
                    }
                    if (rows.length > 0) {
                        const passwAuthent = yield rows[0].password;
                        const passw = yield bcrypt_1.default.compare(password, passwAuthent);
                        if (passw) {
                            let sessions = req.session;
                            sessions.idUser = rows[0].id;
                            return res.send("LOGIN");
                        }
                    }
                    return res.send("ERRORDATALOGIN");
                }));
            }
            catch (error) {
                console.log("error dane", error);
            }
        });
    }
    updateData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let session = req.session;
                if (session === null || session === void 0 ? void 0 : session.idUser) {
                    console.log("hola mundo");
                    let idUser = session.idUser;
                    const conn = yield (0, mysqli_1.connect)();
                    const { nombre, apellido, telefono, correo, edad } = req.body;
                    conn.query("SELECT * FROM usuario WHERE id = ?", [idUser], (error, rows) => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        if (rows) {
                            const idImage = rows[0].image_id;
                            (0, cloudinary_2.deleteImage)(idImage);
                            const resultImage = yield (0, cloudinary_1.uploadImage)((_a = req.file) === null || _a === void 0 ? void 0 : _a.path);
                            const public_id = resultImage.public_id;
                            const url = resultImage.url;
                            conn.query(`UPDATE usuario SET name = ?, apellido = ?, telefono = ?,
                correo = ?, edad = ?, image_id = ?, url_image = ? WHERE id = ?`, [
                                nombre,
                                apellido,
                                telefono,
                                correo,
                                edad,
                                public_id,
                                url,
                                req.session.idUser,
                            ], (error, rows) => __awaiter(this, void 0, void 0, function* () {
                                var _b;
                                if (rows) {
                                    yield fs_extra_1.default.unlink((_b = req.file) === null || _b === void 0 ? void 0 : _b.path);
                                    return res.redirect("/perfil");
                                }
                                else {
                                    return res.send("ERRORUpdate");
                                }
                            }));
                        }
                        if (error) {
                            console.log("errorLLLLLLLLL", error);
                        }
                    }));
                }
            }
            catch (error) {
                return res.sendStatus(301).json({ message: error });
            }
        });
    }
    logoutCount(req, res) {
        req.session.destroy(() => {
            return res.redirect("/");
        });
    }
    newPasswordData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { password, email } = req.body;
                /*const rangeRounds = 10;
                const encriptar =await bcrypt.genSalt(rangeRounds);
                const hasEncriptamiento = await bcrypt.hash(password, encriptar);
                */
                console.log(req.body, req.params);
                res.send("Hola");
            }
            catch (error) {
                return res.sendStatus(301).json({ message: error });
            }
        });
    }
}
exports.dataControllers = new DataControllers();

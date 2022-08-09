"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const viewsControllers_1 = require("../controllers/viewsControllers");
const DataControllers_1 = require("../controllers/DataControllers");
const multer_1 = __importDefault(require("../libs/multer"));
const router = (0, express_1.Router)();
router.get("/", viewsControllers_1.indexviews.userVista);
router.get("/login", viewsControllers_1.indexviews.UseLogin);
router.get("/perfil", viewsControllers_1.indexviews.userPerfil);
router.post("/loginAuthent", DataControllers_1.dataControllers.postData);
router.post("/loginAuthentication", DataControllers_1.dataControllers.loginAuthentication);
router.post("/update/:id", multer_1.default.single("image"), DataControllers_1.dataControllers.updateData);
exports.default = router;

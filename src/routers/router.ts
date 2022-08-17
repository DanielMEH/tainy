import { Router } from 'express';
import { indexviews } from '../controllers/viewsControllers';
import {dataControllers} from '../controllers/DataControllers'; 
import multer from "../libs/multer";
const router: Router = Router();

router.get("/", indexviews.userVista)
router.get("/login", indexviews.UseLogin)
router.get("/perfil", indexviews.userPerfil)
router.get("/logout", dataControllers.logoutCount)
router.get("/recovery/password/user",  indexviews.recoveryPasswordUser)
router.get("/authentication/user/data", indexviews.authenticationRecovery)
router.get("/dasboard", indexviews.viewsDasboard)
router.get("/perfill", indexviews.perfilUsuario)
router.get("/perfilUsuarioData", indexviews.perfilUsuarioData)
router.get("/publicaciones", indexviews.publicacionesUsuario)
router.get("/destacadas", indexviews.publicacionesUsuarioDestacadas)
router.post("/recovery/usuario/:email", indexviews.recoveryUser)
router.post("/loginAuthent", dataControllers.postData)
router.post("/loginAuthentication", dataControllers.loginAuthentication)
router.post("/update", multer.single("image"), dataControllers.updateData)
router.post("/new/password/data", dataControllers.newPasswordData)
export default router;
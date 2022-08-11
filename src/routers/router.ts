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
router.post("/recovery/usuario/:email", indexviews.recoveryUser)
router.post("/loginAuthent", dataControllers.postData)
router.post("/loginAuthentication", dataControllers.loginAuthentication)
router.post("/update/:id", multer.single("image"), dataControllers.updateData)
router.post("/new/password/data", dataControllers.newPasswordData)
export default router;
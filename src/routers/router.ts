import { Router } from 'express';
import { indexviews } from '../controllers/viewsControllers';
import {dataControllers} from '../controllers/DataControllers'; 
import multer from "../libs/multer";
const router: Router = Router();

router.get("/", indexviews.userVista)
router.get("/login", indexviews.UseLogin)
router.get("/perfil", indexviews.userPerfil )
router.post("/loginAuthent", dataControllers.postData)
router.post("/loginAuthentication", dataControllers.loginAuthentication)
router.post("/update/:id", multer.single("image"), dataControllers.updateData)
export default router;
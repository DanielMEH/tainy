import { Router } from 'express';
import { indexviews } from '../controllers/viewsControllers';
import {dataControllers} from '../controllers/DataControllers'; 

const router: Router = Router();

router.get("/", indexviews.userVista)
router.get("/login", indexviews.UseLogin)
router.post("login", dataControllers.postData)
export default router;
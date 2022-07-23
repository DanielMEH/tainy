import { Router } from 'express';
import {  indexviews} from '../controllers/viewsControllers';

const router: Router = Router();

router.get("/", indexviews.userVista)

export default router;
import { Router } from "express";
import { login, singin } from "../controllers/auth.controller";


const router: Router = Router();

router.post("/singin", singin);
router.post("/login", login);



export default router;

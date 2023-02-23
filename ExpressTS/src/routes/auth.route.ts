import { Router } from "express";
import { login, singin } from "../controllers/auth.controller";
import comprobarJwt from "../middlewares/jwt";

const router: Router = Router();

router.post("/singin", singin);
router.post("/login", login);

//router.use(comprobarJwt)

export default router;

import coches from './routes/coches.route'
import auth from './routes/auth.route'
import  {Router}  from 'express';

const router: Router = Router();

router.use(auth);
router.use(coches);

router.use((req, res, next) => {

    res.send("Esta página no existe")
       .status(401);
    next();
})

export default router;
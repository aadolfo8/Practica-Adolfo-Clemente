import { Router } from "express";
import { 
    obtenerTodos,
    actualizar,
    crearCoche,
    eliminarPorId,
    eliminarTodos,
    obtenerPorId } from "../controllers/coches.controller";


const router: Router = Router();



router.get('/obtener/todos', obtenerTodos);
router.get('/obtener/:id', obtenerPorId);
router.put('/actualizar/:id',actualizar);
router.post('/insertar',crearCoche);
router.delete('/eliminar/todo',eliminarTodos);
router.delete('/eliminar/:id',eliminarPorId);



export default router;
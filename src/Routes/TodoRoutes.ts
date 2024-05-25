import { Router } from "express";
import TodoController from '../Controllers/TodoController';
import authenticateMiddleware from "../Middleware/AuthMiddleware";
const router = Router();

router.get('/',authenticateMiddleware,TodoController.getTodos);
router.post('/',authenticateMiddleware,TodoController.createTodo);
router.delete('/',TodoController.deleteTodo);
router.patch('/',TodoController.updateTodo);
export default router;
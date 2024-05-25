import { Request, Response } from 'express';
import TodoService from '../Services/TodoService';
import { TodoInterface } from '../Config/interface';

/**
 * Controller class for handling Todo-related operations.
 * @class
 */
class TodoController {
    /**
     * Handles creating a new todo.
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @returns {Promise<Response>} The response object with the new todo or an error message.
     */
    static async createTodo(req: any, res: Response): Promise<Response> {
        const todoInfo:TodoInterface= { ...req.body, userId: req.user.id };
        try {
            const newTodo = await TodoService.createTodo(todoInfo);
            return res.status(200).json(newTodo);
        } catch (error: any) {
            console.error(error);
            return res.status(500).json({ message: 'Something went wrong!', error: error.message });
        }
    }

    /**
     * Handles retrieving todos.
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @returns {Promise<Response>} The response object with the todos or an error message.
     */
    static async getTodos(req: any, res: Response): Promise<Response> {
        try {
            const todos = await TodoService.getTodos({ userId: req.user.id });
            return res.status(201).json(todos);
        } catch (error: any) {
            console.error(error);
            return res.status(500).json({ message: 'Something went wrong!', error: error.message });
        }
    }

    /**
     * Handles deleting a todo.
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @returns {Promise<Response>} The response object with a success or error message.
     */
    static async deleteTodo(req: Request, res: Response): Promise<Response> {
        const todoId = req.query.id;
        try {
            await TodoService.deleteTodo({ id: todoId });
            return res.status(201).json({ message: 'Todo deleted' });
        } catch (error: any) {
            console.error(error);
            return res.status(500).json({ message: 'Something went wrong!', error: error.message });
        }
    }
    static async updateTodo(req: any, res: Response): Promise<Response> {
        const todoInfo:TodoInterface= { ...req.body, id: req.query.id };
        try {
            const updatedTodo = await TodoService.updateTodo(todoInfo);
            return res.status(200).json(updatedTodo);
        } catch (error: any) {
            console.error(error);
            return res.status(500).json({ message: 'Something went wrong!', error: error.message });
        }
    }
}

export default TodoController;

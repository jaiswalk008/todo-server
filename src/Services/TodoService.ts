import { TodoInterface } from "../Config/interface";
import Todo from "../Models/Todo";

/**
 * Service class for handling Todo-related operations.
 * @class
 */
class TodoService {
    /**
     * Creates a new todo with the provided todo data.
     * @param {TodoInterface} todoData - Data for the new todo.
     * @returns {Promise<InstanceType<typeof Todo>>} A promise that resolves to the created todo.
     * @throws {Error} Throws an error if there's an issue with the database operation.
     */
    static async createTodo(todoData: any): Promise<InstanceType<typeof Todo>> {
        try {
            return Todo.create(todoData);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    /**
     * Retrieves todos based on the provided condition.
     * @param {object} condition - Conditions to filter the todos.
     * @returns {Promise<InstanceType<typeof Todo>[]>} A promise that resolves to the found todos.
     * @throws {Error} Throws an error if there's an issue with the database operation.
     */
    static async getTodos(condition: any = {}): Promise<InstanceType<typeof Todo>[]> {
        try {
            return Todo.findAll({ where: condition, attributes: { exclude: ['userId'] } });
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    /**
     * Deletes a todo based on the provided condition.
     * @param {object} condition - Conditions to filter the todo for deletion.
     * @returns {Promise<number>} A promise that resolves to the number of deleted rows.
     * @throws {Error} Throws an error if there's an issue with the database operation.
     */
    static async deleteTodo(condition: any): Promise<number> {
        try {
            return Todo.destroy({ where: condition });
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    static async updateTodo(todoInfo: TodoInterface): Promise<any> {
        try {
            return Todo.update(todoInfo, { where: { id: todoInfo.id } });
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}

export default TodoService;

import { UserInterface } from "../Config/interface";
import User from "../Models/User"

/**
 * Service class for handling User-related operations.
 * @class
 */
class UserService {
    /**
     * Retrieves a user based on the provided condition.
     * @param {object} condition - Conditions to filter the user.
     * @returns {Promise<InstanceType<typeof User> | null>} A promise that resolves to the found user or null if not found.
     * @throws {Error} Throws an error if there's an issue with the database operation.
     */
    static async getUser(condition: any = {}): Promise<InstanceType<typeof User> | null> {
        console.log(condition);
        try {
            return User.findOne({ where: condition });
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    /**
     * Creates a new user with the provided user data.
     * @param {UserInterface} userData - Data for the new user.
     * @returns {Promise<InstanceType<typeof User>>} A promise that resolves to the created user.
     * @throws {Error} Throws an error if there's an issue with the database operation.
     */
    static async createUser(userData: UserInterface): Promise<InstanceType<typeof User>> {
        console.log(userData);
        try {
            return User.create({ ...userData });
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}

export default UserService;

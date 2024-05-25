import User from "./User";
import Todo from "./Todo";

User.hasMany(Todo);
Todo.belongsTo(User);

export { User, Todo };

import Sequelize from "sequelize";
import sequelize from "../Config/database";
const Todo = sequelize.define('todo',{
    title:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    date:{
        type:Sequelize.STRING,
        
    },
    description:{
        type:Sequelize.STRING
    },
    completed:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
    }
})
export default Todo;
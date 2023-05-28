const Categories = require("./categories.model");
const Subcategories = require("./subcategories.model");
const Todo = require("./todo.model");
const Users = require("./users.model");


const initModels = () => {

//^ Relación uno a muchos entre Users y Todo.

//Un usuario tiene muchas tareas.
Users.hasMany(Todo, {foreignKey: "userId"});

//Una tarea pertenece a un usuario.
Todo.belongsTo(Users, {foreignKey: "userId"});

//^Relación muchos a muchos entre Todo y Subcategories.

//Una tarea pertenece a muchas subcategorías.
Todo.belongsToMany(Subcategories, {through:"todo_subcategories"});

//Una subcategoría pertenece a muchas tareas,
Subcategories.belongsToMany(Todo, {through:"todo_subcategories"});

//^Relación uno a muchos entre Categories y Subcategories.

//Una subcategoría pertenece a una categoría.
Subcategories.belongsTo(Categories, {foreignKey: "categoryId" });

//Una categoría tiene muchas subcategorías.
Categories.hasMany(Subcategories, {foreignKey: "categoryId" });
};

module.exports = initModels;



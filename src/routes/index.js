const categoriesRoutes = require("./categories.routes");
const subcategoriesRoutes = require("./subcategories.routes");
const todoRoutes = require("./todo.routes");
const usersRoutes = require("./users.routes");


const apiRoutes = (app) => {
  app.use(categoriesRoutes);
  app.use(subcategoriesRoutes);
  app.use(todoRoutes);
  app.use(usersRoutes);
};

module.exports = apiRoutes;
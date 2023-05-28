const db = require("../utils/database");

const TodoSubcategories = db.define("todo_subcategories", {}, {timestamps: false});

module.exports = TodoSubcategories;
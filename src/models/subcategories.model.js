const db = require("../utils/database");
const {DataTypes} = require("sequelize");

const Subcategories = db.define("subcategories",{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  subcategory: {
    type: DataTypes.TEXT(30),
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "category_id",
  }
},
{
  timestamps: true,
});

module.exports = Subcategories;
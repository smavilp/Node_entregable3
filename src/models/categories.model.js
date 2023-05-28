const db = require("../utils/database");
const {DataTypes} = require("sequelize");

const Categories = db.define("categories",{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  }
},
{
  timestamps: true,
});

module.exports = Categories;
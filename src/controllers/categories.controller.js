const Categories = require("../models/categories.model");

const getAllCategories = async (req, res) => {
  try{
    const result = await Categories.findAll({
      attributes:{
        exclude:["createdAt", "updatedAt"]
      }
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  };
};

const getCategoryById = async (req, res) => {
  try{
    const {id} = req.params;
    const result = await Categories.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error)
  };
};

const createCategory = async (req, res) => {
  try{
    const newCategory = req.body;
    await Categories.create(newCategory);
    res.status(201).send();
  } catch (error) {
    res.status(400).send(error);
  };
};

const updateCategory = async (req, res) => {
  try{
    const {id} = req.params;
    const {category, description} = req.body;
    await Categories.update(
      {category, description},
      {where: {id}}
    );
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  };
};

const deleteCategory = async (req, res) => {
  try{
    const {id} = req.params;
    await Categories.destroy({
      where: {id},
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  };
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
}

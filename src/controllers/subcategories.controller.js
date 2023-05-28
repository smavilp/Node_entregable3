const Subcategories = require("../models/subcategories.model");
const Categories = require("../models/categories.model")

const getAllSubcategories = async (req, res) => {
  try{
    const result = await Subcategories.findAll({
      attributes:{exclude:["createdAt", "updatedAt","categoryId"]},
      include: {
        model:Categories,
        attributes:{
          exclude:["createdAt", "updatedAt","categoryId"]
        }
      }
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error);
  };
};

const getSubcategoryById = async (req, res) => {
  try{
    const {id} = req.params;
    const result = await Subcategories.findByPk(id,{
      attributes:{exclude:["categoryId"]},
      include: Categories,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error)
  };
};

const createSubcategory = async (req, res) => {
  try{
    const newSubcategory = req.body;
    await Subcategories.create(newSubcategory);
    res.status(201).send();
  } catch (error) {
    res.status(400).send(error);
  };
};

const updateSubcategory = async (req, res) => {
  try{
    const {id} = req.params;
    const {subcategory, description, categoryId} = req.body;
    await Subcategories.update(
      {subcategory, description, categoryId},
      {where: {id}}
    );
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  };
};

const deleteSubcategory = async (req, res) => {
  try{
    const {id} = req.params;
    await Subcategories.destroy({
      where: {id},
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  };
};

module.exports = {
  getAllSubcategories,
  getSubcategoryById,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory,
}
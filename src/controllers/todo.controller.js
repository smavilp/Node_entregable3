const Todo = require("../models/todo.model");
const Subcategories = require("../models/subcategories.model")
const TodoSubcategories = require("../models/todo_subcategories.model")
const { QueryTypes } = require('sequelize');
const Categories = require("../models/categories.model");

const getAllUserTasks = async (req, res) => {
  try{
    const {userId} = req.params;
    const result = await Todo.findAll({
      where:{userId},
      attributes:{ exclude:["createdAt", "updatedAt"]},
      include: {model: Subcategories,
        attributes:{
          exclude:["createdAt", "updatedAt", "categoryId"],
        },
        include:{
          model:Categories,
          attributes:{
            exclude:["createdAt", "updatedAt"],
          },
        }
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error);
  };
};

const createTask = async (req, res) => {
  try{
    const {title, description, isCompleted, subcategories} = req.body;
    const {userId} = req.params;
    await Todo.create({title, description, isCompleted, userId});
    let lastTask = await Todo.sequelize.query('SELECT id FROM todos WHERE ("createdAt"=(SELECT MAX("createdAt") FROM todos));', { type: QueryTypes.SELECT });
    let taskId = lastTask[0].id;
    const dataSubcategories = [];
    subcategories.map((subcategory) => dataSubcategories.push({ todoId: taskId, subcategoryId: subcategory, createdAt: '2019-12-23 14:39:53', updatedAt: '2019-12-23 14:39:53' }));
    await TodoSubcategories.bulkCreate(dataSubcategories);
    res.status(201).send();
  } catch (error) {
    res.status(400).send(error);
  };
};

const updateTask = async (req, res) => {
  try{
    const {id} = req.params;
    const {title, description, isCompleted} = req.body;
    await Todo.update(
      {where: {id}},
      {title, description, isCompleted}
      );
      res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  };
};

const changeTaskStatus = async (req, res) => {
  try{
    const {id} = req.params;
    const task = await Todo.findByPk(id);
    let isTaskCompleted = task.dataValues.isCompleted
    console.log(isTaskCompleted, id, {id})
    if(!isTaskCompleted){
      await Todo.update({isCompleted: true}, {where: {id}});
      return res.status(204).send();
    }
    if(isTaskCompleted){
      await Todo.update({isCompleted: false},{where: {id}});
      return res.status(204).send(); 
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

const taskCompleted = async (req, res) => {
  try{
    const {id} = req.params;
    await Todo.update(
      {where: {id} },
      {isCompleted: true}
    );
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  };
};

const taskNotCompleted = async (req, res) => {
  try{
    const {id} = req.params;
    await Todo.update(
      {where: {id} },
      {isCompleted: false}
    );
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  };
};

const deleteTask = async (req, res) => {
  try{
    const {id} = req.params;
    await Todo.destroy({
      where: {id}
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  };
};

module.exports ={
  getAllUserTasks,
  createTask,
  updateTask,
  taskCompleted,
  taskNotCompleted,
  deleteTask,
  changeTaskStatus
}
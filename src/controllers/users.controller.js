const Users = require("../models/users.model");

const getAllUsers = async (req, res) =>{
  try{
    let result = await Users.findAll();
    res.status(200).json(result); 
  } catch (error) {
    res.status(400).send(error);
  };
};

const getUserById = async (req, res) => {
  try{
    const {id} = req.params;
    const result = await Users.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error);
  };
};

const createUser = async (req, res) => {
  try{
    const newUser = req.body;
    await Users.create(newUser);
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  };
};

const updateUser = async (req, res) => {
  try{
    const {id} = req.params;
    const {username, email, password} = req.body;
    await Users.update(
      {username, email, password},
      {where:{id}}
    );
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  };
};

const deleteUser = async (req, res) => {
  try{
    const {id} = req.params;
    await Users.destroy({
      where: {id},
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  };
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
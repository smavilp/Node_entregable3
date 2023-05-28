const {Router} = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

const router = Router();

router.get("/api/v1/users", getAllUsers);

router.get("/api/v1/users/:id", getUserById);

router.post("/api/v1/users", createUser);

router.put("/api/v1/users/:id", updateUser);

router.delete("/api/v1/users/:id", deleteUser);

module.exports = router;
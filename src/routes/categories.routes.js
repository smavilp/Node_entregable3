const {Router} = require ("express");
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories.controller");

const router = Router();

router.get("/api/v1/categories", getAllCategories);

router.get("/api/v1/categories/:id", getCategoryById);    

router.post("/api/v1/categories", createCategory);

router.put("/api/v1/categories/:id", updateCategory);

router.delete("/api/v1/categories/:id", deleteCategory);

module.exports = router;
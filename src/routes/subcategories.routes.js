const {Router} = require("express");
const  {
  getAllSubcategories,
  getSubcategoryById,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory,
} = require("../controllers/subcategories.controller")

const router = Router();

router.get("/api/v1/subcategories", getAllSubcategories);

router.get("/api/v1/subcategories/:id", getSubcategoryById);    

router.post("/api/v1/subcategories", createSubcategory);

router.put("/api/v1/subcategories/:id", updateSubcategory);

router.delete("/api/v1/subcategories/:id", deleteSubcategory);

module.exports = router;
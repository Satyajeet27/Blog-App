const {Router}= require("express")
const { addArticleController, inventoryController, getArticleController } = require("../controller/inventory")
const authMiddleware = require("../middleware/authMiddleware")
const router= Router()

router.post("/add-article",authMiddleware, addArticleController)
router.get("/get-articles", getArticleController)
router.get("/test",authMiddleware,inventoryController)

module.exports= router
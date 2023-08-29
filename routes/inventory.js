const {Router}= require("express")
const { addArticleController, inventoryController, getArticleController, getCurrentUserArticlesController, getSingleArticleController } = require("../controller/inventory")
const authMiddleware = require("../middleware/authMiddleware")
const router= Router()

router.post("/add-article",authMiddleware, addArticleController)
router.get("/get-articles", getArticleController)
router.get("/current-user-articles",authMiddleware, getCurrentUserArticlesController)
router.post("/get-single-article", getSingleArticleController)
router.get("/test",authMiddleware,inventoryController)

module.exports= router
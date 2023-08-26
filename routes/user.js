const {Router}= require("express")
const { registerController, loginController,  getCurrentUserController } = require("../controller/user")
const authMiddleware = require("../middleware/authMiddleware")

const router= Router()

router.post("/register",registerController)
router.post("/login", loginController)
router.get("/get-current-user",authMiddleware ,getCurrentUserController)

module.exports= router
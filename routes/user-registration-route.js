import { Router } from "express"
import { createUser } from "../controllers/user-registration-controller.js"

const router = Router()

router.post('/', createUser)

export default router
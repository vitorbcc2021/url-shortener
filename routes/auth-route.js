import { Router } from "express"
import { createUser, login, loginAsRecruiter } from "../controllers/auth-controller.js"

const router = Router()

router.post('/register', createUser)
router.post('/login', login)
router.get('/recruiter', loginAsRecruiter)

export default router
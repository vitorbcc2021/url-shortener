import { AuthDto } from "../dto/auth-dto.js";
import { UserModel } from "../models/user-model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function login(req, res) {
    try {
        const dto = await AuthDto.create(req.body)

        const user = await UserModel.findOne({ username: dto.username })

        if (!user) return res.status(404).json({ error: 'User not found!' })

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)

        if (isPasswordCorrect) {
            const payload = { username: user.username, role: user.role }
            const SECRET = process.env.SECRET
            const token = jwt.sign(payload, SECRET, { expiresIn: '2h' })

            return res.status(200).json({ token: token })
        }
        else {
            return res.status(401).json({ error: "Wrong credentials!" })
        }
    }
    catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

export async function loginAsRecruiter(res) {
    try {
        const user = await UserModel.findOne({ username: 'Recruiter-Profile' })

        if (!user) {
            return res.status(404).json({ error: 'User not found!' })
        } else {
            const payload = { username: user.username, role: user.role }
            const SECRET = process.env.SECRET
            const token = jwt.sign(payload, SECRET, { expiresIn: '30m' })

            return res.status(200).json({ token: token })
        }
    }
    catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

export async function createUser(req, res) {
    try {
        const dto = await AuthDto.create(req.body)

        const user = await UserModel.create(dto)

        const payload = { username: user.username, role: user.role }

        const SECRET = process.env.SECRET

        const token = jwt.sign(payload, SECRET, { expiresIn: '2h' })

        return res.status(201).json({ token: token })
    }
    catch (error) {
        return res.status(400).json({ error: error.message })
    }
} 
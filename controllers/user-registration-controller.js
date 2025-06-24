import { UserRegistrationDto } from "../dto/user-registration-dto.js";
import { UserModel } from "../models/user-model.js";

export async function createUser(req, res) {
    try {
        const dto = await UserRegistrationDto.create(req.body)

        await UserModel.create(dto)

        return res.status(201).json({ username: dto.username, password: dto.password })
    }
    catch(error) {
        return res.status(400).json({error: error.message})
    }
} 
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    }
)

const modelName = 'user'

export const UserModel = mongoose.model(modelName, userSchema);

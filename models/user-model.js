import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: {type: String, enum: ['client', 'admin'], default: 'client' }
    }
)

const modelName = 'user'

export const UserModel = mongoose.model(modelName, userSchema);

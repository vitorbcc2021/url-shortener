import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema(
    {
        originalUrl: { type: String, required: true },
        shortUrl: { type: String, required: true, unique: true },
        owner: { type: String, required: true }
    }
)

const modelName = 'url'

export const UrlModel = mongoose.model(modelName, urlSchema);

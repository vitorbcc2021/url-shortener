import mongoose from "mongoose"

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Successfully connected on MongoDB.')
    } catch (error) {
        console.log('Failed to connect on MongoDB:\n\t' + error)
    }
}
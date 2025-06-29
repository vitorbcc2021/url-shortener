import dotenv from 'dotenv'
import express, { json } from 'express'
import cors from 'cors'
import { default as mongoose } from 'mongoose'
import urlRouter from './routes/url-route.js'
import authRouter from './routes/auth-route.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(json())

app.use('/', urlRouter)
app.use('/auth', authRouter)

await mongoose.connect(process.env.MONGO_URI)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}\n`)
})
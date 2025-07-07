import dotenv from 'dotenv'
import express, { json } from 'express'
import cors from 'cors'
import urlRouter from './routes/url-route.js'
import authRouter from './routes/auth-route.js'
import setupSwagger from './docs/swagger-setup.js'
import { connectDB } from './connect-db.js'


dotenv.config()

const app = express()
app.use(cors())
app.use(json())


setupSwagger(app)


app.use('/', urlRouter)
app.use('/auth', authRouter)


connectDB()


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on ${process.env.SERVER}...\n`)
})
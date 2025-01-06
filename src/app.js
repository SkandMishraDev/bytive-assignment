import cors from "cors"
import cookieParser from "cookie-parser"
import express from "express"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

app.get('/healthcheck',(req,res) => {
    res.json("Working")
})

import Taskrouter from './routes/route.js'

app.use('/api/v1', Taskrouter)

export { app }
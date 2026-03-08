import express, { json } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
//cors are use to determine which frontend domain can acess the api's
const app= express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true

}))

app.use(express.json({limit : "15kb"}))
app.use(express.urlencoded({extended : true, limit : "16kb"}))
app.use(cookieParser())
export {app}
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))
//best practices to limit incoming json data, files etc

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true,limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//cookieparser ->server se user ki browser ki cookie acces aur set kar paaun(crud operation perform kar paaun)
// public assets sab static mai rahega images favicon etc
 export { app }
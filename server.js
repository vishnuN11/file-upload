const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const userRouter=require('./routes/user-router')
const app=express()
const db=require("./config/db")
dotenv.config({path:"./config/.env"})
db()
app.use(express.static("public"))
app.use(cors())
app.use(express.json())


app.use("/api/user",userRouter)



app.listen(process.env.PORT,console.log("server is start"))
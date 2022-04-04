const express=require("express")
const router=require("./router/rotues")
const bodyParser=require("body-parser")
const cookieParser = require("cookie-parser")

const app=express()
app.use(bodyParser.json())
app.use(cookieParser())


// app.use(router)
app.use ("/",router)

app.listen(4000,()=>console.log("listning to the portal 4000"))
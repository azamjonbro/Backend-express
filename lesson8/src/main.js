require("dotenv").config()
const express = require("express")
const app = express()
const {connectDB} = require("./config/connectdb")
const createSupperAdminController = require("./config/createSupperAdmin")

app.use(express.json())
connectDB()
createSupperAdminController.createSuperAdminController()

app.listen(5455, ()=>{
    console.log("server connection");
})
const express = require('express');
const connectDB = require('./config/dbconnection').connectDB;
const app = express();
require("dotenv").config();
const userRouter = require("./router/user.router");
app.use(express.json());

app.use("/users",userRouter);

app.listen(process.env.PORT||5467,()=>{
    connectDB();
    console.log("Server is running... port:",process.env.PORT||5467);
})
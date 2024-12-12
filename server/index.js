require("dotenv").config();
const express = require("express");
const app = require("../server/app");
const PORT = process.env.PORT;
const connectDB = require("../server/Utils/db");
const userRouter = require("../server/Routes/userRouter");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/v1/",userRouter);


connectDB();

app.listen(`${PORT}`,()=>{
    console.log(`Server is working at : http://localhost:${PORT}`);
})



const mongoose = require("mongoose");
const MONGOOSEURI = process.env.MONGOOSEURL;

const connectDB = ()=>{
    try {
        mongoose.connect(`${MONGOOSEURI}`).then(()=>{
            console.log("Database connected succesfully")
        }).catch(()=>{
            console.log("Database connection failed")
        })
    } catch (error) {
        console.log(error)
    }
};

module.exports = connectDB;
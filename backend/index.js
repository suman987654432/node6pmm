const express= require("express");
const app= express();
const cors= require("cors");
const bodyparser = require('body-parser')
const mongoose= require("mongoose");
const StuRoute= require("./routes/studentRoute");

mongoose.connect("mongodb://127.0.0.1:27017/ashfak").then(()=>{
    console.log("DB Connected!!!");
})


app.use(cors());

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/students", StuRoute);



app.listen(8000, ()=>{
    console.log("Server run on 8000 port!");
})
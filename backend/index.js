const express= require("express");
const app= express();
const cors= require("cors");
const bodyparser = require('body-parser')
const mongoose= require("mongoose");
const bookRoute= require("./routes/bookRoute");


mongoose.connect("mongodb://127.0.0.1:27017/bookmanagement6pm").then(()=>{
    console.log("DB Connected!!!");
})


app.use(cors());

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/books", bookRoute);




app.listen(8000, ()=>{
    console.log("Server run on 8000 port!");
})
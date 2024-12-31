const StuModel= require("../models/studentModel");
const dataSave=async(req, res)=>{
    const {rollno, name, city, fees} = req.body;
   console.log(req.body);
    await StuModel.create({
        rollno:rollno,
        name:name, 
        city:city,
        fees:fees
    })
  
   res.send("OK");
}

const dataDisplay=async(req, res)=>{
    const MyData=await StuModel.find();
    res.send(MyData);
}
module.exports={
    dataSave,
    dataDisplay
}


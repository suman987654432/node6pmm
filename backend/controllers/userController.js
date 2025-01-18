const StuModel= require("../models/userModel");

const dataSave=async(req, res)=>{
  const  {imgname, rollno, name, city, fees } =req.body;

     const Data= await StuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees,
        imgname:imgname
     })

    res.send("OK");
}

const dataDisplay=async(req, res)=>{
     const Data= await StuModel.find();
     res.send(Data);
}

module.exports={
    dataSave,
    dataDisplay
}
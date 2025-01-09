const UserModel= require("../models/userModel");
const bcrypt= require("bcrypt");

const userRegistration=async(req, res)=>{

    const {name, city, email, password}= req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const Data= await UserModel.create({
         name:name,
         city:city,
         email:email,
         password:passwordHash
    })
    res.send("OK");
}


module.exports={
    userRegistration
}
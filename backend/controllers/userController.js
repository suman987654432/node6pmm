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


const userLogin=async(req, res)=>{
    const {email, password}= req.body;
    try {
         const User= await UserModel.findOne({email:email});
         if(!User)
         {
            res.status(400).send({msg:'invalid email'});
         }

         const chkpass= await bcrypt.compare(password, User.password);
         if (chkpass)
         {
            res.status(200).send(User);
         }
         else 
         {
            res.status(400).send({msg:"invalid password"});
         }

    } catch (error) {
         res.send("error in code")
    }


}





module.exports={
    userRegistration,
    userLogin
}
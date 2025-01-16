const UserModel= require("../models/userModel");
const ProfileModel= require("../models/profileModel");



const userSave=async(req, res)=>{
    const {username, email, firstname, lastname}= req.body;
    const User= await UserModel.create({
         username:username,
         email:email
    })

    const Profile= await ProfileModel.create({
        firstname:firstname,
        lastname:lastname,
        userid: User._id
    })
    
    res.status(200).send("user created!!!");
}

const userDisplay=async(req, res)=>{
   
    const Data= await ProfileModel.find().populate("userid");
    res.send(Data);

}


module.exports={
    userSave,
    userDisplay
}
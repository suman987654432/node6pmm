
const express= require("express");
const route= express.Router();
const userController= require("../controllers/userController");

route.post("/usersave",  userController.userSave);
route.get("/userdisplay",  userController.userDisplay);

module.exports=route;
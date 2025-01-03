const express= require("express");
const route= express.Router();
const bookController= require("../controllers/bookController");

route.post("/datasave", bookController.bookSave);
route.get("/datadisplay", bookController.bookDisplay);


module.exports = route;

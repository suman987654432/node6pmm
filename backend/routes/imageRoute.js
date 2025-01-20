const express = require("express");
const multer = require("multer");
const path = require("path");
const { imageController } = require("../controllers/Imagecontroller");

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage
});

// Route to handle image upload
router.post("/datasave", upload.single("file"), imageController);

module.exports = router;

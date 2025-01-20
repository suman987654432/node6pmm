const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const imageRoute = require("./routes/imageRoute");


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

// Use routes
app.use("/userimage", imageRoute);

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});

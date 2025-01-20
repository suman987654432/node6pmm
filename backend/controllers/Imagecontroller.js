const imageController = (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send("No file uploaded");
        }


        res.status(201).send("File uploaded successfully!");
    } catch (error) {
        console.error("Error uploading image:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { imageController };

const express = require("express");

const app = express(); // Create web server

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Photography Portfolio is running.");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
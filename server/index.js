require("dotenv").config();

const express = require("express");
const cors = require("cors"); // Import the cors middleware
const app = express();

const db = require("./db/db");

app.use(express.json());

// Use cors middleware
app.use(cors());

// Endpoint to get user data
app.get("/user", async (req, res) => {
    try {
        // Example query to retrieve user data
        const result = await db.query('SELECT * FROM users');

        // Assuming result.rows contains the user data
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/table", async (req, res) => {
    try {
        // Example query to retrieve user data
        const result = await db.query('SELECT table_name FROM information_schema.tables WHERE table_schema = \'public\'');

        // Assuming result.rows contains the user data
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).send("Internal Server Error");
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

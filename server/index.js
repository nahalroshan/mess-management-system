require("dotenv").config();

const express = require("express");
const cors = require("cors"); // Import the cors middleware
const app = express();

const db = require("./db/db");

app.use(express.json());

// Use cors middleware
app.use(cors());
app.get("/menuchange/:date/:dish/:time", async (req, res) => {
    const date = req.params.date;
    const dish = req.params.dish;
    const time = req.params.time;

    try {
        // Example query to update the menu
        const query = `UPDATE menu SET ${time} = '${dish}' WHERE date = ${date}`;
        console.log(query);
        const result = await db.query(query);

        // Assuming result.rows contains the updated menu data
        res.json({ result: "success" });
    } catch (error) {
        console.error("Error updating menu:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

app.get("/menu", async (req, res) => {
    try {
        // Example query to retrieve user data
        const result = await db.query(`SELECT * FROM menu`);

        // Assuming result.rows contains the user data
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).send("Internal Server Error");
    }
});
app.get("/feedbacks", async (req, res) => {
    const stars = req.params.stars;
    const feedbackText = req.params.feedbacktext;
    const id = req.params.id;
    const name = req.params.name;

    try {
        // Example query to handle feedback data
        const result = await db.query('SELECT * FROM feedback');

        // Assuming result.rows contains the inserted feedback data
        res.json(result.rows);
    } catch (error) {
        console.error("Error handling feedback:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});
app.get("/feedback/:stars/:feedbacktext/:id/:name", async (req, res) => {
    const stars = req.params.stars;
    const feedbackText = req.params.feedbacktext;
    const id = req.params.id;
    const name = req.params.name;

    try {
        // Example query to handle feedback data
        const result = await db.query('INSERT INTO feedback (rating, feedback,id,name) VALUES ($1, $2, $3, $4) RETURNING *', [stars, feedbackText, id, name]);

        // Assuming result.rows contains the inserted feedback data
        res.json(result.rows);
    } catch (error) {
        console.error("Error handling feedback:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
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
app.get("/user_add/:uid/:name", async (req, res) => {
    try {
        // Extract parameters from the request
        const uid = req.params.uid;
        const name = req.params.name;

        // Example query to check if a user with the given UID already exists
        const checkQuery = 'SELECT id FROM public.users WHERE uid = $1';
        const checkResult = await db.query(checkQuery, [uid]);

        if (checkResult.rows.length === 0) {
            // User with the given UID does not exist, proceed with insertion
            const insertQuery = 'INSERT INTO public.users(id, name, uid) VALUES (DEFAULT, $1, $2) RETURNING *';
            const insertResult = await db.query(insertQuery, [name, uid]);

            // Assuming insertResult.rows contains the inserted user data
            res.json(insertResult.rows);
        } else {
            // User with the given UID already exists
            res.status(409).json({ message: `User with UID ${uid} already exists` });
        }
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.get("/get_user_id_by_uid/:uid", async (req, res) => {
    try {
        // Extract parameter from the request
        const uid = req.params.uid;

        // Example query to retrieve user ID by UID
        const result = await db.query('SELECT id FROM public.users WHERE uid = $1', [uid]);

        // Assuming result.rows contains the user ID
        if (result.rows.length > 0) {
            res.json({ id: result.rows[0].id });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error fetching user ID:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint to get user data
app.get("/:ask", async (req, res) => {
    var data_ask = req.params.ask;
    try {
        // Example query to retrieve user data
        const result = await db.query(`SELECT * FROM ${data_ask}`);

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

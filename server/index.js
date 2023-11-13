require("dotenv").config();


const express = require ("express");

const app = express();

const db = require("./db");

//app.get("/getStudents")
app.use(express.json());

app.get("/getMenu",(req,res)=>{
    res.send("Hello");
})


const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`Server listening to the port ${port}`);
});

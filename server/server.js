require("dotenv").config();


const express = require ("express");

const app = express();

//app.get("/getStudents")



const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`Server listening to the port ${port}`);
});

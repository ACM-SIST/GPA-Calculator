const express = require("express");
const app = express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("GPA CALCULATOR BACK END")
})

app.listen(5000,()=>{
    console.log("Success");
})
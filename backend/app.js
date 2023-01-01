const express = require("express");
const app = express();
const cors = require('cors')
const connectDB = require('./db/Connect.js')
const semisterModel = require("./Model/Model.js")
const port = process.env.port || 5000

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{

    res.send("GPA CALCULATOR BACK END")
})

app.get("/semister1",(req,res)=>{
    semisterModel.findOne({semister:1},function(err,data){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.send(data);
        }
    });
})

async function start(){
    try {
        await connectDB()
        app.listen(port,()=>{
            console.log("Successfully listening ....");
        })
    } catch (error) {
        console.log(error);
    }
}

start();
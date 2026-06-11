const port=4000;
const express=require("express");
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(cors());
// Ek basic route check karne ke liye

app.get("/",(req,res)=>{
    res.send("EXPRESS App is running");;
});

app.listen(port,(error)=>{
    if(!error){
        console.log("Server is running on port "+port);
    }
    else{
        console.log("Error: "+error);
    }
});
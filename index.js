const port=4000;
const express=require("express");
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(cors());

const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://happyharsh-07:<232107?Harsh>@cluster0.ew5vhen.mongodb.net/e-commerce");

    //Schema for creating products
    const Product=mongoose.model("Product",{
        id:{type:Number,required:true},
        name:{type:String,required:true},
        image:{type:String,required:true},
        category:{type:String,required:true},
        new_price:{type:Number,required:true},
        old_price:{type:Number,required:true},
        date:{type:Date,default:Date.now},
        available:{type:Boolean,default:true},
    });


//Ek basic route check karne ke liye
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
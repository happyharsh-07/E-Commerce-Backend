const port=4000;
const express=require("express");
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(cors());
const multer=require("multer");
const path=require("path");

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



    const storage=multer.diskStorage({
        destination:'./upload/images',
        filename:(req,file,cb)=>{
            return cb(null,`${file.fieldname}_${Date.now()} ${path.extname(file.originalname)}`);
        }
    });

    const upload=multer({storage:storage});
    app.use('/images',express.static('upload/images'));

    app.post("/upload",upload.single('product'),(req,res)=>{
        res.json({
            success:1,
            image_url:`http://localhost:${port}/images/${req.file.filename}`
        });
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
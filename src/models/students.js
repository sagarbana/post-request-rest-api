const mongoose=require("mongoose");
const validator=require("validator");

// this is schema 
const studentSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email already present "],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalide email Bhava ")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        unique: true
    },
    address:{
        type:String,
        required:true
    }
})


//we will create a new collection 
const Student=new mongoose.model('Student',studentSchema);
module.exports=Student;
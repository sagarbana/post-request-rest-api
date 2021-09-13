const express =require("express");
require("./db/conn"); 
const Student=require("./models/students");
const app=express();
const port=process.env.PORT || 3000;

//to identify incomming data is JSON data, we need to write express.json()
app.use(express.json()); // if this line skipped ,"undefined" error will occured

//app.get("/",(req,res)=>{
//    res.send("Hello from app.get ");
//})

app.post('/students',(req,res)=>{
   console.log(req.body);
   //const user= new Student(req.body); //here we take ""user"" variable for storing in mongo
   const createDoc= async () =>{   
        try{
            const user= new Student(req.body);
            const result = await user.save();
            console.log(result);
        }catch(err){
            console.log(err);
        }
        
   }
    createDoc();
    res.send("hello from the app.post side"); 
    

})

app.listen(port,()=>{
    console.log(`Listening on the port : ${port}`);
})



/*
ORIGINAL

app.post('/students',(req,res)=>{
   console.log(req.body);
   const user= new Student(req.body); //here we take ""user"" variable for storing in mongo
   
    user.save().then( () => {
       res.status(201).send(user);
   }).catch((e) => {
    res.status(400).send(e);
   })

    res.send("hello from the app.post side"); 
})
*/
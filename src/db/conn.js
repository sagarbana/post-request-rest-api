const mongoose=require("mongoose");

//mongoose.set('useNewUrlParser', true);   // ignor //reffer
//mongoose.set('useUnifiedTopology', true); // ignor //reffer

mongoose.connect("mongodb://127.0.0.1:27017/studentsapi",{
    //useCreateIndex:true,   // not supported now 
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection done from conn.js side ");
}).catch((e)=>{
    console.log(e);
})


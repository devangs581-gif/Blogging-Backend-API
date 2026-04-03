const express=require('express');
const app=express();

require('dotenv').config();

const port=process.env.PORT || 3000;

const dbConnect=require('./Config/database');
dbConnect();

const blog=require('./Routes/blog');

//Middle-Ware
app.use(express.json());


app.use("/api/v1",blog);////////




app.listen(port,()=>{
   console.log("App is running successfully");
});


//Default-Page
app.get('/',(req,res)=>{
    res.send("This is Home Page");
})
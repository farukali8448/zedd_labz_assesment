const express=require("express")
const App=express()
const mongoose=require('mongoose')



const dbURL="mongodb://localhost:27017"
mongoose.connect(dbURL).then(()=>{
    console.log("connected to database.......")
})


//database schema (structure)

const testSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number
    },
    designation:{
        type:String
    }
})

//create a model for schema

const Task=mongoose.model('Task',testSchema)

//adding data to database

const data=new Task({
    name:"faruk",
    age:22,
    designation:"mern developer"

})

//save the data 
data.save().then((doc)=>{
    console.log(doc)

}).catch((error)=>{
    console.log("error while adding data",error)

})
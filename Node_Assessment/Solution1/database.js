const mongoose=require('mongoose')

exports.connectMongoose=()=>{
    mongoose.connect('mongodb://localhost:27017/passport')
    .then(()=>console.log(`Connect to mongoDB:localhost`))
    .catch((err)=>console.log(err))
}

// const mongoose=require('mongoose')
// const url="mongodb://localhost:27017/passport"
// mongoose.connect(url).then(()=>{
//     console.log("connet to database")
// })

const userSchema=new mongoose.Schema({

    name:String,
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:String
})

exports.User=mongoose.model("User",userSchema)
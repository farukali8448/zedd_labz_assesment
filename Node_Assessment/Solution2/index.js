const express=require("express")
const jwt=require("jsonwebtoken")
const app=express();
const secretKey="secretKey"

app.get(("/"),(req,resp)=>{
    resp.json({
        message:" a simple api"
    })

})

app.post("/login",(req,resp)=>{
  const user={
    id:1,
    username:"faruk",
    email:"abc@my.com"
  }
  jwt.sign({user},secretKey,{expiresIn:'300s'},(err,token)=>{
      resp.json({
        token
      }) 
  })
  //This code signs a JSON Web Token (JWT) with a user object, using a secret key, 
  //setting its expiration to 300 seconds, and sends the token as a JSON response.
})

app.post("/profile",verifyToken,(res,resp)=>{
    jwt.verify(req.token,secretKey,(err,authData)=>{
        if(err){
            resp.send({result:"invalid token"})
        }else{
            resp.json({
                message:"profile accessed",
                authData
            })
        }
    })
    //This code verifies a JSON Web Token (JWT) received in the req.token parameter, using a secret key. 
    //If the token is valid, it sends a JSON response with a message and the authenticated user's data. 
    //If the token is invalid, it sends a response indicating an invalid token.

})

function verifyToken(req,resp,next){
    //This code extracts the JWT from the "Authorization" header in an HTTP request. If the header exists,
    // it splits the header value to retrieve the token. It assigns the token to req.token and proceeds to the 
    //next middleware. If the header is undefined, it sends a response indicating that the token is not valid.
  const bearerHeader=req.headers['authorization']
  if(typeof bearerHeader!=='undefined'){
    const bearer=bearerHeader.split(" ");
    const token=bearer[1];
    req.token=token;
    next();

  }else{
    resp.send({
        result:'Token is not valid'
    })
  }
}

app.listen(8000,()=>{
    console.log("App is running on  port: 8000 ")

})
const express = require("express")
const cors = require("cors")

//app config
const app = express()
const port = process.env.PORT || 4000;

app.use(cors())

const username= "karthik123@gmail.com"
const password= "12345"

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/login",function(req,res)
{
    if(req.body.username === username && req.body.password === password)
    {
        res.send(true)
    }
    else
    {
        res.send(false)
    }
})


app.listen(port,function(){
    console.log("Server Started.....")
})
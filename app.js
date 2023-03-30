const Express=require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")
const Cors=require("cors")
const eModel=require("./Models/examModel")

Mongoose.connect("mongodb+srv://college:college12345@cluster0.nk3uqez.mongodb.net/examdb?retryWrites=true&w=majority",{useNewurlParser:true})


var app=Express()
app.use(Cors())
app.use(Bodyparser.json())
app.use(Bodyparser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
res.send("athul")
})


app.post("/add",async(req,res)=>{
    let data=new eModel(req.body)
    console.log(data)
    await data.save()
res.send(data)
})


app.get("/viewall",async(req,res)=>{
    let data=await eModel.find()
    res.send(data)
})

app.listen(3000)
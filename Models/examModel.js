const Mongoose=require("mongoose")

let eSchema=Mongoose.Schema(
    {
name:String,
regesterNo:String,
phoneNo:String,
DOB:String,
emailid:String,
username:String,
password:String
    }
)
module.exports=Mongoose.model("exams",eSchema)
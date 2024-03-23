const mongoose = require('mongoose') 

const userSchema = mongoose.Schema({
    name:{
      type:String,
      required:[true,"Please add a Name"]
    },
    email:{
      type:String,
      required:[true,"Please add a Email"],
      unique:true,
      trim:true,
      match:[
        /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
        "Please Enter a Valid Email"
      ]
    },
    password:{
      type:String,
      required:[true,"Please add a Password"], 
      minLength:[6,"Password must be up to 6 characters"], 
      //maxLength:[23,"Password must not be more than 23 characters"]
    },
    photo:{
      type:String, 
      required:[true,"Please add a Photo"], 
      default:"https://i.ibb.co/4pDNDK1/avatar.png"
    },
    phone:{
      type:String, 
      default:"+91"
    },
    Bio:{
      type:String,
      maxLength:[250,"Password must not be more than 250 characters"], 
      default:"bio"
    }
}, {
  timestamps:true
})

const User = mongoose.model("User",userSchema) 
module.exports = User
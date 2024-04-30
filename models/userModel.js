import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique: true
    },
    image : {
        type : String,
        required : false,
    },
    password : {
        type : String,
        required : true
    },
    is_varified : {
        type : Number,
        default : 1
    }
},{ timestamps:true })

const userModel = mongoose.model('user',userSchema,'user')

export default userModel
import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
import { JsonWebToken} from "jsonwebtoken";

const userSchema = new mongoose.Schema(
    {
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase : true,
        index : true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase : true,
        trim: true
    },
    fullname:{
        type: String,
        required: true,
        index : true,
        trim: true
    },
    avatar:{
        type: String,  //cloudnary url
        required: true,

    },
    coverimage:{
        type: String,  //cloudnary url


    },

    watchhistory:{
        type:[
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password:{
            type:String,
            required : [true, "Password is required"]

        },
        refreshToken:{
            type:String,
        }
    }
},{timestamps:true})

userSchema.pre("save",async function(next){
    if (!this.ismodified("password")) return next()

    this.password=bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.ispasswordCorrect= async function 
(password) {
    return await bcrypt.compare(password,this.password)
    
}

userSchema.methods.generateAcessToken= function (){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            fullname:this.fullname,
    },
    process.env.ACESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACESS_TOKEN_EXPIRY
    }
)
}

userSchema.methods.generateRefreshToken= function (){
    return jwt.sign(
        {
            _id: this._id,

    },
    process.env.Refresh_TOKEN_SECRET,
    {
        expiresIn:process.env.Refresh_TOKEN_EXPIRY
    }
)
}



export const User = mongoose.model("User". userSchema)

import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema = new Schema (
    {
        username: {
            type:"string",
            require: true,
            unique: true,
            lowercase: true,
            

        },

        email : {
            type:"string",
            unique: true,
            require: true,
            lowercase: true


        },

    }
)
//we are designing the hooks here in orde to mainupulate the password ,
//that whether it should be decrypted or not or when it should be encrypted
userSchema.pre("save",  async function (next) {
    if( ! this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPassword = async function (password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id : this._id,
            email: this.email,
            username:this.username,
            fullName : this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User" , userSchema);
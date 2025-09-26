import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
            index: true // searching is optimized
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true, 
            trim: true
        },
        fullname:{
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, // cloudineary url
            required: true,
        },
        coverImage: {
            type: String,
        },
        watchHistory: {
            type: Schema.Types.ObjectId,
            ref: "Video"
        },
        password: {
            type: String,
            required: [true, 'password is required']
        },
        refreshToken: {
            type: String
        }
        

    },{timestamps: true}
)

userSchema.pre("save", async function(next){
    if((!this.isModified)("password")) return next();
    this.password = bcrypt.hash(this.password, 10)
    next()
})
// designing custom methods
userSchema.methods.isPasswordCorrect = async function  (password) {
   return await bcrypt.compare(password, this.password)
}
// access refresh dono jwt tokens hai usage alag hai
userSchema.methods.generateAccessToken= function(){
   return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            // expiry object ke andar jaata hai
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}


userSchema.methods.generateRefreshToken= function(){
    return jwt.sign(
        {
            _id: this._id
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            // expiry object ke andar jaata hai
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User = mongoose.model("User",userSchema)








//jwt ek bearer token hai- jo usko bear karta hai usko data mil jaega
// like a key jiske paas hai usko data mil jaega

//pre-hook data just save hone se just pehle ye hook ko run kar sakte ho
// hook ke call back mai () => {} nahi use karna kyunki
// arrow function ke paas this func nhi hota usse reference pata nahi hota
// yaha hum data save hone ke just pehle password hash kara rahe hein
// jo ye pre hook (middleware) hai iska kaam hai
// but har baar save karne par password change nhi karna
// jab passoword field mai changes ho tab change karna (if condition will help)
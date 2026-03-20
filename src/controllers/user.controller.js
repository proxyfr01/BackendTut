import { asyncHandler } from "../utils/asyncHandler.js";
import { Apierrors } from "../utils/APIerrors.js";
import { uploadonCloudinary } from "../utils/cloudinary.js"
import { User } from "../models/user.model.js";
const registerUser = asyncHandler(async (req, res) => {
    //let us have a look at the steps whuch we are going to take as whole 
    //Get user detail from frontnend
    //validation - not empty
    //check for images , check for avatar
    //we will upload that to cloudinary 
    //create user object - create entry in db
    //remove password and refresh  token field from rsponsde
    //check for user cretion
    //return response
    // return res.status(200).json({
    //     message: "This is satyam you mf , im coming for you all"    });

    const {fullName, email, username, password} = req.body
    console.log("emails : ", email);

    if (
        [fullName, email, username, password].some((field) => 
            field?.trim() === "")
        
     ) {
        throw new Apierrors(400, "All fields are required")
        
    }


const existedUser= User.findOne({
    $or: [{username} , {email}]
})

if(existedUser) {
    throw new Apierrors(409, "user with username or email already existed");
}

const avatarLocalPath = req.files?.avatar[0]?.path;
const coverImageLocalpath= req.files?.coverImage[0]?.path;

if(!avatarLocalPath){
    throw new Apierrors (400, "Avatar file is required")
}

const avatar = await uploadonCloudinary(avatarLocalPath)
const coverImage = await uploadonCloudinary
(coverImageLocalpath)

if(!avatar){
     throw new Apierrors (400, "Avatar file is required")

}
const  user = await User.create({
    fullName,
    avatar : avatar.url,
    coverImage: coverImage?.url ||"",
    email,
    password
})

return res.status(201).json(
    new ApiResponse(200, createdUser , "User registered successfully")
)



})

export { registerUser };
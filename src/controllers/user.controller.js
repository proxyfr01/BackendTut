import { asyncHandler } from "../utils/asyncHandler.js";

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
    console.log("emails : ", emails)
});

export { registerUser };
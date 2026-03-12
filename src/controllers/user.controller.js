import { asynHandler.js } from ".. /"

const registerUser = asynHandler( async (req , res) => {
    return res.status(200).json({
        message : "ok"
    })
})

 export {registerUser}
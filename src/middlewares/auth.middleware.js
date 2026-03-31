// import { asyncHandler } from "../utils/asynchandler";

import { application } from "express";
import multer from "multer";

// export const verifyJWT = asyncHandler(async(req, res, next) => {
//     req.cookies?.accessToken || req.header
//     ("Authorization")?
// })

const loggingMiddleware=  function ( req, res, next) {
    console.log("this is logging middlewre");
    next();
}


const authMiddleware = function ( req, res ,next){
    console.log( " this is the second middle ware i orderto authrntuivcte");
    next();
}
//next basically here shows or indicates that there should be aniothet 
//middleware coming in the wayu
const validationmIDDLEWARE = function (req, res, next){
    console.log(" this should be the last  middle ware in the way")
}

application.use(loggingMiddleware);
application.use(authMiddleware)
application.use(validationmIDDLEWARE);

application.get("/", (req, res) => {
    console.log(req.body);

    res.send("this is th backend routet calling");

})

application.listen(port, () => {
    console.log("the website is gettig displayed at the port 3000")
})

//if we want to make a user speecific routr as in only allwoing access to th 
//specified acess users only;
//the below is the syntax for that :

Router.get("/students", authMiddleware,multer ,(req, res) => {

})


//


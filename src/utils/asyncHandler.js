// import mongoose from "mongoose";

// //a kind of wrapper or template we are making in order to use
// // this same more and more and not again writin the same 

// /*
// const asynchHandler = (fn) =>  async ( req, res, next) => {
//     try {
//         await(req, res, next)
        
//     } catch (error) {

//         res.send(error.code || 500).json ({
//             success: false,
//             message:error.message
//         })
        
//     }
// }
// */

// //using promises:
// const asyncHandler = (requestHandler) => {
//   return (req, res, next) => {
//     Promise
//       .resolve(requestHandler(req, res, next))
//       .catch((error) => next(error));
//   };
// };

// export { asyncHandler };
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }




// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
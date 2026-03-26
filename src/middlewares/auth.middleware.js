import { asyncHandler } from "../utils/asynchandler";

export const verifyJWT = asyncHandler(async(req, res, next) => {
    req.cookies?.accessToken || req.header
    ("Authorization")?
})
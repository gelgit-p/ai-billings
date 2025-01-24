import { tokenprofileService } from "../services/dexService";
import asyncHandler from "express-async-handler";

export const tokenProfileController = asyncHandler(async (req, res, next) => {
    const rToken = await tokenprofileService()
    res.status(200).json({
        message: "Token Profile",
        tokenProfile: rToken
      });
})
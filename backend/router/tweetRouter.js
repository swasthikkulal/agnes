import express from "express"
import { createTweet, getAllTweet } from "../controller/tweetController.js";
import { authMiddleware } from "../middleware/auth.js";
import { upload } from "../config/multer.js";

const router = express.Router()
router.post("/create-tweet", authMiddleware, upload.single("image"), createTweet)
router.get("/get-tweets", getAllTweet )


export default router;
import tweetModel from "../model/tweetModel.js"

// createTweet  - > Image, tweet = req.body
//  create tweet inside tweetModel
//  save tweet
//  res


// getAllUsers,
// getTweetByID
// deleteTweet,
// updateTweet

export const createTweet = async (req, res) => {
    try {
        const { tweet } = req.body;
        const imagePath = req.file.filename;
        const id = req.user.id;
        const create = await tweetModel.create({
            userId: id,
            image: imagePath,
            tweet
        })
        await create.save()
        res.json({ success: true, message: "tweet created", data: create })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export const getAllTweet = async (req, res) => {
    try {
        const Tweets = await tweetModel.find().populate("userId", "name email")
        if (!Tweets) {
            return res.json({ success: false, message: "no tweet found" })
        }
        return res.json({ success: true, message: "tweets found", data: Tweets })
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}

export const getmyTweet = async (req, res) => {
    try {
        const id = req.user.id
        console.log(id)
        const findTweet = await tweetModel.find({ userId: id }).populate("userId", "name email")
        console.log(findTweet)
        if (!findTweet) {
            return res.json({ success: false, message: "Tweet not found", data: [] })
        }
        return res.json({ success: true, message: "Tweet found", data: findTweet })
    } catch (error) {
        return res.json({ success: false, message: error.message, data: [] })
    }

}

export const deleteTweet = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const deletedTweet = await tweetModel.findOneAndDelete({ _id: id, userId });
        if (!deletedTweet) {
            return res.json({ success: false, message: "Tweet not found or unauthorized" });
        }
        return res.json({ success: true, message: "Tweet deleted successfully" });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}
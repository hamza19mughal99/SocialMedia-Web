import PostMsg from "../modal/postMsg.js";

export const getPostApi = async (req, res) => {
    try {
        const postMessages = await PostMsg.find();
        res.status(200).json(postMessages);
    }
    catch (e) {
        res.status(404).json({message: e.message});
    }
}

export const createPostApi = async (req, res) => {
    const post = new PostMsg(req.body)
    try{
        await post.save()
        res.status(201).json(post);
    }
    catch (e) {
        res.status(409).json({message: e.message});
    }
}
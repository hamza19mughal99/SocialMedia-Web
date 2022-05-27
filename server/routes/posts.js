import express from "express";
import {getPostApi, createPostApi} from "../controller/post.js";

const router = express.Router();

router.get('/', getPostApi)
router.post('/', createPostApi)
export default router;
const express = require("express");
const router = express.Router();

const commentController = require("../controller/comment");

router.post("/add-new-comment", commentController.addComment);

router.delete("/delete-comment/:postId/:commentId", commentController.deleteComment);

module.exports = router;

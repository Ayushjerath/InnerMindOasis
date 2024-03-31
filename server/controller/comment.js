const { mongoose } = require("mongoose");
const { Comment } = require("../models/Comment");

const addComment = async (req, res) => {
  const _comment = req.body;
  const content = _comment.content;
  const postId = _comment.postId;
  const objectId = new mongoose.Types.ObjectId(postId);
  const userId = _comment.userId;
  const date = new Date(Date.now());

  const comment = new Comment({
    content: content,
    date: date,
    author_id: userId,
  });
  await Post.updateOne(
    { _id: objectId },
    {
      $push: { comments: comment },
    }
  );
  const updatedPost = await Post.find({ _id: postId });
  res.json(updatedPost);
}

const deleteComment = async (req, res) => {
  const { postId, commentId } = req.params; // Assuming postId and commentId are parameters in the URL
  const objectId = new mongoose.Types.ObjectId(postId);

  try {
    // Remove the comment from the post
    await Post.updateOne(
      { _id: objectId },
      { $pull: { comments: { _id: commentId } } }
    );

    // Send response
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    // Handle error
    console.error('Error deleting comment:', error);
    res.status(500).json({ error: 'Failed to delete comment' });
  }
}

module.exports = {
  addComment,
  deleteComment,
}
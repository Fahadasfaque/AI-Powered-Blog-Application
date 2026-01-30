import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blog",
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("comment", commentSchema);

export default Comment;

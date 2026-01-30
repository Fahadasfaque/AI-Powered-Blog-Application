import fs from "fs";
import imageKit from "../configs/imageKit.js";
import Blog from "../models/blog.js";
import Comment from "../models/commnet.js";
import main from "../configs/Gemini.js";

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;
    //check if all fields are present
    if (!title) {
      return res.json({
        success: false,
        Message: "title required",
      });
    }
    if (!description) {
      return res.json({
        success: false,
        Message: "description required",
      });
    }
    if (!category) {
      return res.json({
        success: false,
        Message: "category required",
      });
    }
    if (!imageFile) {
      return res.json({
        success: false,
        Message: "imageFile required fields",
      });
    }
    // if (!title || !description || !category || !imageFile) {
    //   return res.json({
    //     success: false,
    //     Message: "Missing required fields",
    //   });
    // }

    const fileBuffer = fs.readFileSync(imageFile.path);

    //upload Image to ImageKit

    const response = await imageKit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    //optimization through imagekit URL transformation
    const optimizedImageUrl = imageKit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" }, //auto compression
        { format: "webp" }, //convert to modern format
        { width: "1280" }, //width resizing
      ],
    });

    const image = optimizedImageUrl;
    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });

    res.json({ sucess: true, message: "Blog added sucessfully" });
  } catch (error) {
    res.json({ sucess: false, message: error.message, msg: "Blog not added" });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
      msg: "error in getallblogs",
    });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.json({
        sucess: false,
        message: error.message,
        msg: "Blog not found",
      });
    }
    res.json({ sucess: true, blog });
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
      msg: "error in getallblogs",
    });
  }
};

export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.body;
    await Blog.findByIdAndDelete(id);

    //delete all comment associated with the blog
    await Comment.deleteMany({ blog: id });

    res.json({ success: true, message: "Blog delete sucessfully" });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
      msg: "error in deleteBlogById",
    });
  }
};

export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id);
    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.json({ success: true, message: "Blog status updated" });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
      msg: "error in togglePublish",
    });
  }
};

export const addComment = async (req, res) => {
  try {
    const { blog, name, content } = req.body;
    await Comment.create({ blog, name, content });
    res.json({ sucess: true, massage: "Comment added for review" });
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
      msg: "error in addComment",
    });
  }
};

export const getBlogComments = async (req, res) => {
  try {
    const { blogId } = req.body;
    const comments = await Comment.find({
      blog: blogId,
      isApproved: true,
    }).sort({
      createAt: -1,
    });
    res.json({ sucess: true, comments });
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
      msg: "error in getBlogComments",
    });
  }
};

export const generateContent = async (req, res) => {
  try {
    const { promte } = req.body;
    const content = await main(
      promte + "Generate a blog content for this topic in simple text format"
    );
    res.json({
      success: true,
      content,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

import { strict } from "assert";
import mongoose from "mongoose";

interface IBlog extends Document {
  title: string;
  description: string;
  category: string;
  author: string;
  image: string;
  author_img: string;
  date: Date;
}

const blogSchema = new mongoose.Schema<IBlog>({
  // const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  author_img: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
    // required: true,
  },
});
const blogModel =
  mongoose.models.Blog || mongoose.model<IBlog>("blog", blogSchema);
// const blogModel = mongoose.model("blog", blogSchema);
export default blogModel;

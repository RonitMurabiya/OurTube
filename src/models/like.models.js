import mongoose, { Schema } from "mongoose";
import { Video } from "./video.models";

const likeSchema = new mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  video: {
    type: Schema.Types.ObjectId,
    ref: Video,
  },
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment",
  },
  likeBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Like = mongoose.model("Like", likeSchema);

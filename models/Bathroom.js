// Adding a bathroom 
import mongoose from "mongoose";
import {commentSchema} from "./Comment.js"

const bathroomSchema = new mongoose.Schema(
  {
    locationName: {
      type: String,
    },
    address: {
      type: String,
      required: true,
      unique: true, // unique will make an index too
    },
    type: {
        type: [String], 
        enum: ["men", "women", "unisex", "family bathroom", "handicap accessible", "has changing station"], 
        required: true, 
    },
    timeOpen: {
        type: String, // time range
        default: ""
    },
    comments: [commentSchema], // inserts comment array
    
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Bathroom", bathroomSchema);
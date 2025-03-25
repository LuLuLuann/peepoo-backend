import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true, // creates an index
    },
    email: {
      type: String,
      required: true,
      unique: true, // creates an index
    },
    password: {
      type: String,
      required: true,
    },
    homeLocation: {
      type: String,
      default: ""
    },
    favoriteBathrooms: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bathroom" // keeps track of bathroom ids so we can populate it without replicating the data
      }],     ///// it will show an array of strings based on which ones they favorite in the app
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("User", userSchema);
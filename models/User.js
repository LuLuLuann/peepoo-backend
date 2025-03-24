import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    homeLocation: {
        type: String,
      },
      favoriteBathrooms: {
        type: [],     ///// not sure if this is correct or needed in the schema -- it will show an array of strings based on which ones they favorite in the app
      },
  },
  {
    timestamps: true,
  },
);

// if the field is marked as "unique: true" 
// we don't need to create and index:
//  https://mongoosejs.com/docs/guide.html#indexes
// userSchema.index({username: 1});
// userSchema.index({email: 1});



export default mongoose.model("User", userSchema);
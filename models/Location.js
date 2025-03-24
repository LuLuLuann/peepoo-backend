/////////////// what should this schema be for if I will get info from google maps api or from bathroom api??? is this for favorite locations only???

import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
  {
    user_id: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "User",
           required: true,
       },

    //    comments??? [array of strings]
    // 
    // locationName: {
    //   type: String,
    // },
    // address: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // heartHealth: {
    //     type: String, 
    //     enum: ["Good", "Bad"],
    //     required: true,
    },
//   },
  {
    timestamps: true,
  },
);

// if the field is marked as "unique: true" 
// we don't need to create and index:
//  https://mongoosejs.com/docs/guide.html#indexes
// userSchema.index({username: 1});
// userSchema.index({email: 1});



export default mongoose.model("Location", locationSchema);
import mongoose from "mongoose";

const bathroomSchema = new mongoose.Schema(
  {
    locationName: {
      type: String,
    },
    address: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
        type: String, 
        enum: ["men", "women", "unisex", "family bathroom", "handicap accessible", "has changing station"], ////////////// unsure if this is correct - it should be an array of strings so the user can search to see if these things exist
        // required: true, ///////////////////// unsure if it should be required
    },
    timeOpen: {
        type: String, /////////// is time a string???
        // required: true, ///////////////////// unsure if it should be required
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



export default mongoose.model("Bathroom", bathroomSchema);
import mongoose from "mongoose";

export const commentSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        text: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    },
);

export default mongoose.model("Comment", commentSchema);
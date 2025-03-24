import mongoose from "mongoose";


const coffeeSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: {
        type: String,
        required: true,
        index: true,
    },
    price: {
        type: Number,
        required: true,
        index: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
});

export default mongoose.model("Coffee", coffeeSchema);
import mongoose from "mongoose";

const BlacklistSchema = new mongoose.Schema(
    {
        token: {
            type: String,
            required: true,
            ref: "User",
        },
    },
    { timestamps: true }  // Adds createdAt and updatedAt timestamps automatically
);

export default mongoose.model("blacklist", BlacklistSchema);

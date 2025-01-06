import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "completed", "in-progress"],
        default: "pending"
    },
}, {
    timestamps: true,
});

export const Task = mongoose.model("Task", taskSchema);

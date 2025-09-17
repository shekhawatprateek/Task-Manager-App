import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
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
        enum: ["pending", "done"],
        default: "pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
})

const Task = mongoose.model("Task", taskSchema);

export default Task;
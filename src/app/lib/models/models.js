import mongoose, {Schema} from "mongoose";

const modelSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    timestamp:{
        type: Date,
        default: Date.now,
    },
});

const Task = mongoose.models.Task || mongoose.model("Task", modelSchema);

export default Task;
import mongoose from "mongoose";

const memorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Memory should have a title'],
        minlength: [4, 'Memory title should be at least 4 characters long'],
        maxlength: [50, 'Memeory title should be at most 50 characters long'],  
    },
    message: {
        type: String,
        required: [true, 'Memory should have a message'],
        minlength: [10, 'Memory message should be at least 10 characters long'],
        maxlength: [250, 'Memeory message should be at most 250 characters long'],
    },
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Memory = mongoose.model('Memory', memorySchema);

export default Memory;
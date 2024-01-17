import Memory from "../models/memoryModel";
import catchAsyncErorrs from "../modules/catchAsyncErrors";

export const getAllMemories = catchAsyncErorrs(async (req, res) => {
    const allMemories = await Memory.find();

    res.status(200).json({
        data: allMemories
    })
});

export const createMemory = catchAsyncErorrs(async (req, res) => {
    const { title, message, creator } = req.body;
    const memeory = await Memory.create({
        title,
        message,
        creator
    })
    
    res.status(204).json({
        data: memeory
    })
})
import Memory from "../models/memoryModel";

export const getAllMemories = async (req, res) => {
    const allMemories = await Memory.find();

    res.status(200).json({
        data: allMemories
    })
};

export const createMemory = async (req, res) => {
    const { title, message, creator } = req.body;

    const memeory = await Memory.create({
        title,
        message,
        creator
    })

    res.status(204).json({
        data: memeory
    })
}
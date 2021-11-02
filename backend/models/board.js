import mongoose, { Schema } from "mongoose";

const boardSchema = new mongoose.Schema(
    {
    "name": {type: String},
    "description": {type: String},
    "taskStatus": {type: String},
    "imageUrl": {type: String},
    "registerDate": {type: Date.now, default: Date.now},
    "userId": {type: ObjectId},
    }
);

const board = mongoose.model("boards", boardSchema);

export default board;
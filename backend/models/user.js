import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
    {
    "name": {type: String},
    "email": {type: String},
    "password": {type: String},
    "roleId": {type: ObjectId},
    "dbStatus": {type: Boolean},
    "registerDate": {type: Date, default: Date.now}
    }
);

const user = mongoose.model("users", userSchema);

export default user;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        requitred: true
    },
    email: {
        type: String,
        requitred: true
    },
    password: {
        type: String,
        requitred: true
    },
    avatar: {
        type: String,
        requitred: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const User = mongoose.model("user", UserSchema);
module.exports = User;

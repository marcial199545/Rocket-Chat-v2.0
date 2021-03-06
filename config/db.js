const mongoose = require("mongoose");
const config = require("config");

const dbOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
};
const connectDB = async () => {
    try {
        await mongoose.connect(config.get("mongoURI"), dbOptions);
        console.log(`DB is connected 🐲 `);
    } catch (error) {
        console.error(error.message);
        //NOTE exit process if something is wrong
        process.exit(1);
    }
};
module.exports = connectDB;

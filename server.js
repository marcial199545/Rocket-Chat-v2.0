const express = require("express");
const connectDB = require("./config/db");

// SECTION Express
const app = express();
const PORT = process.env.PORT || 4545;
// NOTE parsing middleware
app.use(express.json({ extended: false }));

// SECTION DATA BASE
connectDB();

// SECTION Routes
app.get("/", (req, res) => {
    res.send("hello from express");
});
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// وقتی درخواست بیاد اینجا اجرا میشه
app.post("/saveScore", (req, res) => {
    const userId = req.body.userId;
    const score = req.body.score;

    console.log("User:", userId, "Score:", score);

    res.json({ message: "دریافت شد ✅" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
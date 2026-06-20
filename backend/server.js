const express = require ("express");
const app = express();

const cors = require ("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

app.post("/contact", (req,res) => {
    console.log(req.body);

    res.send("Data received");
})
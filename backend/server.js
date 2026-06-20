require("dotenv").config();

const express = require ("express");
const cors = require ("cors");
const emailjs = require("@emailjs/nodejs");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

app.post("/contact", async (req,res) => {
    try{
        const data = req.body;
        console.log(data);

        const emailVars = {
            name: data.firstName + " " + data.lastName,
            email: data.email,
            message: data.message
        }

        await emailjs.send("service_jnn56jh", "template_26u0trj", emailVars, {publicKey: process.env.PUBLIC_KEY, privateKey: process.env.PRIVATE_KEY});
        res.send("Data Received and email has been sent");
    } 
    catch(err){
        console.error(err);
        res.send("Email could not be sent");
    }
})
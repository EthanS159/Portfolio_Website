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
    console.log("Server running on t 5000");
});

app.get("/github-repos", async (req, res) => {
    try{
        console.log("Request came in");

        const response = await fetch("https://api.github.com/users/EthanS159/repos");
        console.log(response);

        const repos = await response.json();
        console.log(repos);

        res.send(repos);

    }
    catch(error){
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            console.error('Connection blocked or network down:', error);
        }    
    }
})

app.post("/contact", async (req,res) => {
    console.log("Request came in for contact form");

    try{
        const data = req.body;
        console.log(data);

        let firstName = data.firstName.trim();
        let lastName = data.lastName.trim();
        let email = data.email.trim();
        let message = data.message.trim();

        const emailVars = {
            name: firstName + " " + lastName,
            email: email,
            message: message
        }

        await emailjs.send("service_jnn56jh", "template_26u0trj", emailVars, {publicKey: process.env.PUBLIC_KEY, privateKey: process.env.PRIVATE_KEY});
        res.send("Data Received and email has been sent");
    } 
    catch(err){
        console.error(err);
        res.send("Email could not be sent");
    }
})
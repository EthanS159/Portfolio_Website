require("dotenv").config();

const express = require ("express");
const cors = require ("cors");
const emailjs = require("@emailjs/nodejs");

const app = express();

app.use(express.json());
app.use(cors());

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

app.get("/github-repos", async (req, res) => {
    try{
        console.log("Request for Repos came in");

        const response = await fetch("https://api.github.com/users/EthanS159/repos");
        const data = await response.json();
        const repos = data.map(({name, id, owner, description, url, language, created_at, updated_at}) => ({name, id, owner, description, url, language, created_at, updated_at}));


        
        console.log(repos);

        res.send(repos);
    }
    catch(err){
        if (err.name === 'TypeError' && err.message.includes('fetch')) {
            console.error('Connection blocked or network down:', err); // work network is blocking API calls
        }    
    }
})

app.post("/contact", async (req,res) => {
    console.log("Request came in for contact form");

    try{
        const data = req.body;

        const emailVars = {
            name: data.firstName.trim() + " " + data.lastName.trim(),
            email: data.email.trim(),
            phone: data.phone.trim(),
            subject: data.subject.trim(),
            message: data.message.trim()
        }

        console.log("User provided the following: " + emailVars);

        await emailjs.send("service_jnn56jh", "template_26u0trj", emailVars, {publicKey: process.env.PUBLIC_KEY, privateKey: process.env.PRIVATE_KEY});
        res.send("Data Received and email has been sent");
    } 
    catch(err){
        console.error(err);
        res.send("Email could not be sent");
    }
})

const data = [{
    id:811988,
    name: "Ethan Sarante",
    owner: "EthanS159",
    description: "Test project",
    url: "https::/apple.com",
    language: "JavaScript",
    created_at: "12/8/2025",
    updated_at: "3/14/2026"
},
{
    id:317872,
    name: "Ethan Sarante",
    owner: "EthanS159",
    description: "Test project 2",
    url: "https::/pear.com",
    language: "C++",
    created_at: "3/8/2026",
    updated_at: "4/28/2026"
}]

module.exports = data;
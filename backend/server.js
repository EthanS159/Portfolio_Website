require("dotenv").config();

const express = require ("express");
const cors = require ("cors");
const emailjs = require("@emailjs/nodejs");
const sqlite3 = require('sqlite3').verbose();
const app = express();

app.use(express.json());
app.use(cors());

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

const database = new sqlite3.Database(`./repos.db`, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    }
    console.log(`Connected to the SQLite database: repos`);
})

// database.run(`DELETE FROM repositories`, [],  (err) => {
//     if (err) console.error('Error deleting data', err.message);

//     console.log("Data deleted successfully")
// });

app.get("/github-repos", async (req, res) => {
    try{
        console.log("Request for Repos came in");

        const response = await fetch("https://api.github.com/users/EthanS159/repos");
        const data = await response.json();

        const repos = await Promise.all(
            data.map(async ({ id, name, owner, description, html_url,  url, language, created_at, updated_at, default_branch }) => ({
                name: "Ethan Sarante",
                id: id,
                projectName: name,
                owner: owner.login,
                projectLink: html_url,
                apiUrl: url,
                description: description,
                primaryLanguage: language,
                languages: await fetch(`${url}/languages`).then((res) => res.json()),
                createdAt: created_at,
                updatedAt: updated_at,
                defaultBranch: default_branch
            }))
        );

        // repos.forEach((repo) => {
        //     database.run(`INSERT INTO repositories(id, name, owner, description, url, language, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`, Object.values(repo))
        // })

        // database.all(`SELECT * FROM repositories`, [], (err, rows) => {
        //     if (err) {
        //         console.error('Error retrieving data:', err.message);
        //         rej(err);
        //     }
        //     rows.forEach((row) => console.log(row));
        // });

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

const data = require('./server.js')

const sqlite3 = require('sqlite3').verbose();


const database = new sqlite3.Database(`./repos.db`, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    }
    console.log(`Connected to the SQLite database: repos`);
})


// database.run(`CREATE TABLE repositories(id, name, owner, description, url, language, created_at, updated_at)`, (err) => {
//     if (err) console.error('Error creating table:', err.message);

//     console.log("Table created successfully.");
// })


const sql = `INSERT INTO repositories(id, name, owner, description, url, language, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`;

// data.forEach((obj) => {
//     database.run(sql, Object.values(obj))
// })

// database.run(`DELETE FROM repositories WHERE id = 1`, [],  (err) => {
//     if (err) console.error('Error deleting data', err.message);

//     console.log("Data deleted successfully")
// });

database.all(`SELECT * FROM repositories`, [], (err, rows) => {
    if (err) {
        console.error('Error retrieving data:', err.message);
        rej(err);
    }
    rows.forEach((row) => console.log(row));
});

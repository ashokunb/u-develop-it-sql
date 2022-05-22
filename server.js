//requiring that express and mysql12 will be used
const express = require('express');
const mysql = require('mysql2');

//creating the port and app for express to be used
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql username,
        user: 'root',
        // your my sql passowrd
        password: 'ashokunb',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

//return all data in our candidates table
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });

//default response for any other reques (NOT FOUND), must be the last thing before port
app.use((req, res) => {
    res.status(404).end();
});

//executing the port that our file will run through 
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});



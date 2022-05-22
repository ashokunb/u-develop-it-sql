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

// //return all data in our candidates table
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
//   });

// // GET a signle candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// //DELETE  a candidate; the id =? is a place holder text for whatever id that we use. 
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
              VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];
//wer are passing sql and parms into our query that runs the function
db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});


//default response for any other reques (NOT FOUND), must be the last thing before port
app.use((req, res) => {
    res.status(404).end();
});

//executing the port that our file will run through 
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});



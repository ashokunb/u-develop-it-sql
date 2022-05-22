//requiring that express will be used. 
const express = require('express');

//creating the port and app for express to be used
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());



//default response for any other reques (NOT FOUND), must be the last thing before port
app.use((req, res) => {
    res.status(404).end();
});

//executing the port that our file will run through 
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});



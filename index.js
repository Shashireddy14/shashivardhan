const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const app = express();
const PORT = 3000;

//connection to mongoDB
connectDB();

app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`Server is running fine on port : ${PORT} `);
})
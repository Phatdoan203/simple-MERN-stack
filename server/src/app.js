const express = require('express');
const cors = require('cors');
const connection = require('./config/configDB');
const UserRoute = require('./routes/UserRoute');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8888;

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use Route
app.use('/', UserRoute)

connection();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
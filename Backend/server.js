const express = require('express');
const { dbConnect } = require('./config/dbconnect')
const app = express();
const cookieParser = require('cookie-parser')
/* const cors = require('cors');
app.use(cors()); */

const userRoutes = require('./routes/userRoutes')
require('dotenv').config();

dbConnect();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send("Hello Users")
});

app.use('/api/user', userRoutes);

app.listen(process.env.PORT, (req, res) => {
    console.log(`Server Started on Port : ${process.env.PORT}`)
})
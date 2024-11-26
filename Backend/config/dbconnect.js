const mongoose = require('mongoose');
require('dotenv').config();


const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL);
        console.log(`Database Connected : ${conn.connection.host}`)
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = { dbConnect }
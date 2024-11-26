const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.generateToken = (res, userId) => {
    const payload = { userId };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000,
    })
}
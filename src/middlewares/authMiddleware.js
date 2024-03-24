require('dotenv').config({}); // Load environment variables
const jwt = require('jsonwebtoken');
const { Unauthorized } = require('../utility/errors'); // Import Unauthorized error

module.exports = (req, res, next) => {
    let Token = req.headers['authorization']?.split(' ')[1];

    console.log('Token:', Token); // Add this line for logging

    if (!Token) {
        throw new Unauthorized('Unauthorized');
    }

    jwt.verify(Token, process.env.AUTH_SECRET_KEY, function (err, decoded) {
        if (err) {
            console.error('Token verification error:', err); // Add this line for logging
            throw new Unauthorized('Access Denied');
        } else {
            console.log('Decoded token:', decoded); // Add this line for logging
            req.userid = decoded.userId;
            req.role = decoded.role;
            next();
        }
    });
};

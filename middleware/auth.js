const jwt = require('jsonwebtoken');
const config = require('config');

function auth(req, res, next) {
    const token = req.header('X-Auth-Token');
    if(!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decodedPayload = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = decodedPayload;
        console.log(req.user);
        next();
    } catch (error) {
        res.status(400).send('Invalid token.');
    }

}

module.exports = auth;
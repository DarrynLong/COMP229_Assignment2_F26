// require_auth.js - middleware for protecting authenticated routes
// Author: Darryn
// Centennial College - Fall 2026

//=============================================================
//                          IMPORTS
//=============================================================

// import JSON Web Token
const jwt = require('jsonwebtoken');


//=============================================================
//                     AUTHENTICATION
//=============================================================

// require a valid Bearer token before continuing to a protected route
const requireAuth = (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Authorization token required' });
    }

    const token = authorization.split(' ')[1];

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decodedToken.userId;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
};


//=============================================================
//                          EXPORT
//=============================================================

module.exports = requireAuth;

import React from 'react';

const firebase = require("firebase");

//MiddleWare for routes using tokens

const FBAuth = (req, res, next) => {
    let idToken;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        idToken= req.headers.authorization.split('Bearer ')[1];
    }else{
        console.error('no token found')
        return res.status(403).json({ error: 'Unauthorized'});
    }
    admin.auth().verifyIdToken(idToken)
    .then(decodedToken => {
        req.users =  decodedToken;
        return db.collection('users')
        .where('userId', '==', req.users.uid)
        .limit(1)
        .get();
    })
    .then(data => {
        req.user.email = data.docs[0].data().handle;
        return next();
    })
    .catch(err => {
        console.error('Error while verifying token', err);
        return res.status(403).json(err);
    })
}
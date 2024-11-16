// server/routes/authRoutes.js

// // server/routes/authRoutes.js
// const express = require('express');
// const router = express.Router();
// const passport = require('passport');

// router.get('/auth/google', passport.authenticate('google', {
//     scope: ['profile', 'email']
// }));

// router.get('/auth/google/callback', passport.authenticate('google', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/login',
// }));

// router.get('/logout', (req, res) => {
//     req.logout(() => {
//         res.redirect('/');
//     });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const passport = require('passport');

// Google Authentication Route
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google Callback Route
router.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login', session: true }),
    (req, res) => {
        // Redirect to frontend after successful login
        res.redirect('http://localhost:3000/dashboard');
    }
);

// Logout Route
router.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
});

// Get Current User
router.get('/auth/user', (req, res) => {
    res.json(req.user || null);
});

module.exports = router;

// server/routes/mediaRoutes.js


const express = require('express');
const router = express.Router();
const { uploadMedia, getAllMedia } = require('../controllers/mediaController');
const fileUpload = require('express-fileupload');

// Middleware to handle file uploads
router.use(fileUpload({ useTempFiles: true }));

// Routes
router.post('/upload', uploadMedia);
router.get('/', getAllMedia);

module.exports = router;

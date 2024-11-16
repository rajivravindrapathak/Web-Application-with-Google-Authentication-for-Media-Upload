// server/controllers/mediaController.js

const cloudinary = require('../config/cloudinary');
const Media = require('../models/Media');

// Upload Media
exports.uploadMedia = async (req, res) => {
  try {
    const file = req.files.file; // Use req.files for accessing the uploaded file
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      resource_type: 'auto',
    });

    const media = new Media({
      url: result.secure_url,
      type: result.resource_type === 'image' ? 'image' : 'video',
    });

    await media.save();
    res.json(media);
  } catch (error) {
    console.error('Error uploading media:', error);
    res.status(500).json({ error: 'Media upload failed' });
  }
};

// Get All Media
exports.getAllMedia = async (req, res) => {
  try {
    const media = await Media.find();
    res.json(media);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch media' });
  }
};


// const cloudinary = require('../config/cloudinary');
// const Media = require('../models/Media');

// exports.uploadMedia = async (req, res) => {
//   try {
//     const file = req.file.path;
//     const result = await cloudinary.uploader.upload(file, {
//       resource_type: 'auto',
//     });

//     const media = new Media({ url: result.secure_url, type: result.resource_type });
//     await media.save();
//     res.json(media);
//   } catch (error) {
//     res.status(500).json({ error: 'Media upload failed' });
//   }
// };


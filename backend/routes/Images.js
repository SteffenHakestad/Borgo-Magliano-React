const express = require('express');
const multer = require('multer');
const path = require('path');
const Image = require('../models/Image');

const router = express.Router();

// Настройка хранения Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Маршрут для загрузки изображений
router.post('/', upload.single('selectedImage'), async (req, res) => {
  console.log('File received:', req.file);  // Логирование полученного файла
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  try {
    const newImage = new Image({
      url: `http://localhost:5000/uploads/${req.file.filename}`
    });
    const savedImage = await newImage.save();
    console.log('Image saved to DB:', savedImage);  // Логирование сохраненного изображения
    res.json(savedImage);
  } catch (err) {
    console.error('Error saving image to DB:', err);  // Логирование ошибок
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

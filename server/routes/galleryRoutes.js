const express = require('express');
const router = express.Router();
const multer = require('multer');
const GalleryItem = require('../models/GalleryItem');

// Конфигурация multer для хранения файлов
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Папка для хранения загруженных файлов
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname) // Уникальное имя файла
  }
});

const upload = multer({ storage: storage });

// Получить все элементы галереи
router.get('/gallery', async (req, res) => {
  try {
    const items = await GalleryItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Добавить новый элемент в галерею
router.post('/gallery', upload.single('selectedImage'), async (req, res) => {
  const newItem = new GalleryItem({
    profileName: req.body.profileName,
    profilePicture: req.body.profilePicture,
    galleryImagePath: req.file.path // Путь к загруженному файлу
  });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1);
  });

// Middleware для обработки JSON
app.use(express.json());

// Обслуживание статических файлов из папки uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Маршруты
const imageRoutes = require('./routes/images');
app.use('/api/images', imageRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
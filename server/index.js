const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Database
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/gurumatch';
mongoose.connect(mongoURI)
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// Routes
app.use('/api/requests', require('./routes/requestRoutes'));
app.use('/api/tutors', require('./routes/tutorRoutes'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 GuruMatch Backend running on port ${PORT}`));

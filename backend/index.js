require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Define schema and model
const contactSchema = new mongoose.Schema({
  name: String,
  contact: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.post('/api/contact', async (req, res) => {
  const { name, contact, email, message } = req.body;

  const newContact = new Contact({ name, contact, email, message });

  try {
    await newContact.save();
    res.status(201).json({ message: 'Data submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error submitting data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

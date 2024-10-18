// Import required modules
const express = require('express');
const axios = require('axios');

// Initialize the Express app
const app = express();

// Set the port for the server
const PORT = 3000;

// Route to create a new conversation
app.get('/api/new_convo', async (req, res) => {
  try {
    // Construct the API URL and the required API key
    const apiUrl = `http://tunica.zapto.org/v1/api/new_conversation`;
    const apiKey = 'ragflow-dhNzQ0MjdiOGFkYzExZWY4OGZjMDI0Mm'; // Wrap the API key in quotes

    // Make the API request using axios
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      params: {
        user_id: "43bba4b6-0b74-4bab-ae3c-35add0f2bdf2",  // Pass user ID as a query parameter
      },
    });

    // Send the response data to the client
    res.json(response.data);
  } catch (error) {
    console.error('Error creating conversation in Ragflow:', error.message);
    res.status(500).json({ message: 'Failed to create a new conversation' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const webhook = require('./webhook'); // Import your webhook logic

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Handle CORS issues

// Route for Dialogflow webhook
app.use('/webhook', webhook);

// Start the server locally (for local testing)
if (require.main === module) {
    const port = 3000;
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

module.exports = app; // Export app for Vercel

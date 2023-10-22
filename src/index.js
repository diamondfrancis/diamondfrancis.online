const express = require('express');
const path = require('path');
const app = express();

// Serve static files (HTML, CSS, JS) from a 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', './index.html'));
});

const PORT = 80; // Use port 80 for HTTP
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
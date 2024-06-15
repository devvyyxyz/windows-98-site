// index.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (like index.html)
app.use(express.static(path.join(__dirname, 'public'), { etag: false, maxAge: 0 }));


// Define a route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});


// Example API endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

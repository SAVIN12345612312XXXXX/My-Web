const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 1. Serve the assets folder correctly
app.use('/assets', express.static(path.join(__dirname, 'Project WEB', 'assets')));

// 2. Automatically serve all HTML files inside the "Project WEB" folder
app.use(express.static(path.join(__dirname, 'Project WEB')));

// 3. Keep the root route to serve index.html by default
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Project WEB', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running successfully!`);
    console.log(`Open your browser and navigate to: http://localhost:${PORT}`);
});
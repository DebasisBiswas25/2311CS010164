const express = require('express');
const cors = require('cors');
const loggingMiddleware = require('./middlewares/logging');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(loggingMiddleware);

app.get('/api/status', (req, res) => {
    res.json({ status: "Backend operational" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
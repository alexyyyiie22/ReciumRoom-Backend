const express = require('express');
const app = express();
app.use(express.json());

// This mimics the login request the game sends
app.post('/api/login', (req, res) => {
    res.json({ status: "success", username: "ReciumPlayer" });
});

app.listen(process.env.PORT || 3000);

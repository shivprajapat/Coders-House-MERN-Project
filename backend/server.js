require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from express Js');
});
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`));
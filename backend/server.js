require('dotenv').config();
const express = require('express');
const router = require('./routes');
const app = express();

const PORT = process.env.PORT || 5500;

app.use(express.json());

app.use(router)
app.use(express.json());

router.get('/', (req, res) => {
    res.send({ message: 'Hello from express Js' });
});

app.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`));

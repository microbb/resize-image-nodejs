require('dotenv').config()
const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.json({message: 'succes'})
})


app.listen(PORT, () => console.log(`server started on ${PORT}`))


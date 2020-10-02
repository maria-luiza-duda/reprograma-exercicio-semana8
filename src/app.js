const express = require('express');
const app = express();

const musicas = require('./routes/musicasRoutes');

app.use('/musicas', musicas);

app.get('*', (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})

module.exports = app;

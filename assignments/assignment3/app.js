const express = require('express');

const mainRoutes = require('./routes');
const path = require("path");

const app = express();

app.use(mainRoutes);
app.use(express.static(path.join(__dirname, 'public'))); 


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
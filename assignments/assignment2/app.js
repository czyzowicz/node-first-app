const express = require('express');
const app = express();

// app.use('/form', (req, res, next) => {
//     console.log('In form middleware');
//     next();
// });
//
// app.use('/hello', (req, res, next) => {
//     console.log('In hello middleware');
//     res.send('<h1>Hello from Express!</h1>');
// });

app.use('/users', (req, res, next) => {
    console.log('In /users middleware');
    res.send('<h1>The "Users" Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    res.send('<h1>This always run</h1>');
});

app.listen(3000);
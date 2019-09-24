const express = require('express');
const app = express();

//Import Routes
const authRoute = require('./routes/auth');

//Routes Middleware
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('app up and running'))
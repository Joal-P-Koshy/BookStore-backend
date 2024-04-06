
require('dotenv').config();

const routes = require('./Routes/router');

const express = require('express');

const cors = require('cors');

require('./DB/connection')

const bookServer = express();

bookServer.use(cors());

bookServer.use(express.json());

bookServer.use(routes);

const PORT = 3300;

bookServer.listen(PORT,() => {
    console.log('Server is running at', PORT);
})
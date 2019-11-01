const express = require('express');

const server = express();
server.use(express.json());

//import routers
const projectRouter = require('./data/helpers/projectRouter.js');
const actionRouter = require('./data/helpers/actionRouter.js');

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', (req, res) => {
    res.send(`<h3>Welcome to your server!</h3>`)
});

module.exports = server;
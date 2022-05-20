const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const databaseConfig = require('./config/database');
require('module-alias/register');
require('dotenv/config');

const EjRoutes = require('./modules/Ej/EjRoutes');
const UserRoutes = require('./modules/User/UserRoutes');
const MemberRoutes = require('./modules/Member/MemberRoutes');
const ProjectRoutes = require('./modules/Project/ProjectRoutes');
const server = express();

server.use(cors());

server.get('/', async function (req, res) {
    return res.json({ message: "API conectada" });
})

databaseConfig();

server.use(express.json());
server.use(EjRoutes, UserRoutes, MemberRoutes, ProjectRoutes);
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const port = process.env.PORT || 4444;

server.listen(port);

module.exports = server;
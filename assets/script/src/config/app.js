const express = require('express');
const cors = require('cors');

const personasRoutes = require('../routes/personas.routes');

const PORT = process.env.PORT || 3000;

//middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//endpoints
app.use('/personas', personasRoutes);


module.exports = PORT;
module.exports = app;

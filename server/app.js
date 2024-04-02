const express = require("express");
const cors = require("cors");
const app = express();
const corsOptions = {
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
};
const apiRoutes = require('./routes/apiRoute')
app.use(cors(corsOptions));
app.use(express.json());


app.use('/api', apiRoutes)


module.exports = app;
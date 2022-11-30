const express = require('express');
const logger = require('morgan');
const attractionRouter = require('./routes/attraction');

const logLevel = process.env.LOG_LEVEL;
const app = express();
const enableCors = (req, resp, next) => {
  resp.setHeader('Access-Control-Allow-Origin', '*');
  resp.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
};
const handleUnmatchedAsJson = (req, resp) => {
  resp.status(400).json({ error: `Cannot ${req.method} ${req.path}` });
};
const handleErrorAsJson = (error, req, resp, next) => {
  resp.status(500).json({ error: error.message });
  next(error);
};

app.use(logger(logLevel));
app.use(enableCors);
app.use(express.json());
app.use('/api/attractions', attractionRouter);
app.use(handleUnmatchedAsJson);
app.use(handleErrorAsJson);

module.exports = app;

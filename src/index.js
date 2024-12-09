const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./config/db_connection');
const { errorResponse } = require('./shared/generatedResponse');
const messages = require('./utils/constants/messages');
const routes = require('./routes');

const PORT = process.env.PORT || 3060;
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Methods', 'Content-Type, Authorization');
  next();
});

// all routes
app.use('/api/v1', routes);

// Page not found route
app.use((req, res, next) => {
  errorResponse(res, 404, messages.GENERIC.PAGE_NOT_FOUND);
});

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} in "${process.env.NODE_ENV}" mode.`,
  );
});

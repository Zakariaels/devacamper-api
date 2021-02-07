const express = require('express');
const dontenv = require('dotenv');
const morgan = require('morgan');

//Route files
const bootcamps = require('./routes/bootcamps');

const PORT = process.env.PORT || 5000;
//Load ENV VARS
dontenv.config({ path: './config/config.env' });

const app = express();

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

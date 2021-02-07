const express = require('express');
const dontenv = require('dotenv');

//Route files
const bootcamps = require('./routes/bootcamps');

const PORT = process.env.PORT || 5000;
//Load ENV VARD
dontenv.config({ path: './config/config.env' });

const app = express();

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require('cors');
const corsOptions = require('./configs/corsOptions');
const dbConnect = require("./configs/dbConnect");

dbConnect();

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'public')));

// app routes
app.use('/auth', require('./routes/authRoutes'));

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log("connected to mongoose database");
    console.log(`server is running on port: ${PORT}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

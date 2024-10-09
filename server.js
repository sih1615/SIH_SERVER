require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// middlewares
app.use(express.json());

app.use((req, res, next) => {
    console.log("test middleware");
})

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(process.env.PORT, () => console.log("Server is listening on port", process.env.PORT));
    })
    .catch((error) => console.log(error))

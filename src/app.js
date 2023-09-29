
const express = require("express");
const fileUpload = require("express-fileupload");
const uploadRouter = require("./router/uploadRouter");
const cors = require("cors");

const app = express();

//middlewares
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}));



//routes
app.use('/upload', uploadRouter);

module.exports = app;

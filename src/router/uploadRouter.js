const { Router } = require("express");
const { postUpload } = require("../controller/uploadController");

const uploadRouter = Router();

uploadRouter.post('', postUpload)

module.exports=uploadRouter;
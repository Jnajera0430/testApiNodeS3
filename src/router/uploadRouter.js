const { Router } = require("express");
const { postUpload, getFiles } = require("../controller/uploadController");

const uploadRouter = Router();
uploadRouter.get('/:fileName',getFiles);
uploadRouter.post('', postUpload);

module.exports=uploadRouter;
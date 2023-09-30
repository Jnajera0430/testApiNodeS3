const { uploadFile, readFile } = require("../constant/var.env");

const postUpload = async (req, res) => {

    console.log(req.files['photos'].tempFilePath);
    const result = await uploadFile(req.files['photos']);
    console.log({ result });
    return await res.status(202).json({
        message: 'listo cambia',
        data: req.files
    });
}

const getFiles = async (req, res) => {
    console.log(req.params);
    const result = await readFile(req.params.fileName);
    return await res.status(200).json({
        message:'Listo tu archivo'
    })
}
module.exports = {
    postUpload,
    getFiles
}
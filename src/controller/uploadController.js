const { uploadFile } = require("../constant/var.env");

const postUpload = async (req, res) => {
    
    console.log(req.files['photos'].tempFilePath);
    const result = await uploadFile(req.files['photos']);
    console.log({result});
    return res.status(202).json({
        message: 'listo cambia',
        data: req.files
    });
}

module.exports={
    postUpload,
}
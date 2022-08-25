const cloudinary=require('../../../cloudinary')
const fs = require('fs-extra')

async function postImgCloudinary(req,res){
    const files=req.files
    let pathsCldry=[]
    for(file of files){
        const {path}=file;
        console.log(path)
        const pathCldnry=await cloudinary.v2.uploader.upload(path);
        pathsCldry.push(pathCldnry.url)
        fs.unlink(path)
    }
    res.status(200).json({
        message: 'Images uploaded successfully',
        data: pathsCldry,
    })
}

module.exports={postImgCloudinary}
import mongoose from 'mongoose';
import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

 cloudinary.config({ 
        cloud_name: CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });

 const uploadonCloudinary = async (localfilepath) => {
    try {
        if(!localfilepath) return null
        //uploading the file at the cloudinary 
        const response = await cloudinary.uploader.upload(localfilepath, {
            resource_type :"auto"
        })
        //file has been uploaded successfully
        console.log("file is uploaded at cloudinary", response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localfilepath)
        //it removes the locally saved path if the operation gets failed
        return null
        
    }

 }   

 const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
   
export {uploadonCloudinary};
import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

    const uploadOnCloudinary = async (localFilepath)=>{
        try {
            if (!localFilepath) return "file not found"

            const response= await cloudinary.uploader.upload(localFilepath,{resource_type: "auto"})
            console.log("File is uploaded on cloudinary",
            response.url)
            return response
        
        } catch (error) {
            fs.unlinkSync(localFilepath);
            return null
            
        }
    }

    export {uploadOnCloudinary};


    
// ensures .env is loaded before config
// cloudinary.js
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("../.env") });
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";


const cloud_name=process.env.CLOUDINARY_CLOUD_NAME
const  api_key=process.env.CLOUDINARY_API_KEY
const  api_secret=process.env.CLOUDINARY_API_SECRET
cloudinary.config({
  cloud_name ,
  api_key,
  api_secret,
});  
console.log("Cloud Name:",cloud_name);
console.log("API Key:", api_key);
console.log("API Secret:", api_secret ? "Loaded ✅" : "❌ Missing");


export const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads", // folder in cloudinary
    allowed_formats: ["jpg", "png", "pdf"], // restrict file types if needed
  },
});

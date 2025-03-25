import app from "./app.js";
import cloudinary from "cloudinary"

import cors from "cors";

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT,()=>{
    console.log(`server listening on port ${process.env.PORT}`);
});


app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,
}));  //its temp code time of frontend

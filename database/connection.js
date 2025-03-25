import mongoose from "mongoose";

export const connection = ()=>{
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName: "AUCTION_PLATFORM",
    })
    .then(()=>{
        console.log("connected to database");
    }).catch(err=>{
        console.log(`some errors occure while connecting to database:${err}`);

    });
    
};
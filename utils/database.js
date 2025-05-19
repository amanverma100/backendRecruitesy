import mongoose from "mongoose";
const connectDB= async()=>{     
     try{
      await mongoose.connect(process.env.databaseURI);
      console.log("database connected successfully");
       }
       catch(error)
       {
             console.error(error);
       }
               
      
}
export default connectDB;
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/database.js";
import userRoute from "./routes/userRoute.js";
import companyRoute from "./routes/companyRoute.js"
import jobRoute from "./routes/jobRoute.js"
import applicationRoute from "./routes/applicationRoute.js"

dotenv.config({});
const PORT=process.env.PORT||5000;
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
   origin: 'http://localhost:5173', // or use an array for multiple origins
  credentials: true
}));
connectDB();

app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);

app.listen(PORT,()=>{
   console.log(`app is listening on the port no ${PORT}`);
});


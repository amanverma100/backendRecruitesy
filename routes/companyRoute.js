import express from "express";
import isAuthenticated from "../middleware/auth.js";
import { getCompany, getCompanyId, registerCompany, updateCompany } from "../controller/company.js";
import { singleUpload } from "../middleware/multer.js";
const router=express.Router();

router.post("/register",isAuthenticated,singleUpload,registerCompany);
router.get("/get",isAuthenticated,getCompany);
router.get("/get/:id",isAuthenticated,getCompanyId);
router.put("/update/:id",isAuthenticated,singleUpload,updateCompany);
export default router;
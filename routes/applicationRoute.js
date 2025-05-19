import express from "express";
import isAuthenticated from "../middleware/auth.js";
import { applyJobs, getApplicants, getAppliedJobs, updateStatus } from "../controller/application.js";

const router=express.Router();

router.get("/apply/:id",isAuthenticated,applyJobs);
router.get("/get",isAuthenticated,getAppliedJobs);
router.get("/:id/applicants",isAuthenticated,getApplicants);
router.post("/status/:id/update",isAuthenticated,updateStatus);
export default router;
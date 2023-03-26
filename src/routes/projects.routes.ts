import { Router } from "express";
import {
  createProject,
  deleteProject, getProject,
  getProjects,
  getProjectWorkpackages,
  updateProject
} from '../controllers/projects.controller';


const router = Router();

router.get("/", getProjects);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);
router.get("/:id", getProject);
router.get("/:id/workpackages", getProjectWorkpackages);

export default router;

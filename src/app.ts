import express from "express";
import projectsRoutes from './routes/projects.routes';
import workpackagesRoutes from './routes/workpackages.routes';
import router from './routes/routes';


const app = express();

// middleware
app.use(express.json());

// routes
app.use(router);
app.use("/api/projects", projectsRoutes);
app.use("/api/workpackages", workpackagesRoutes);

export default app;

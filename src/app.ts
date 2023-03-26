import express from "express";
import router from './routes/routes';


const app = express();

// middleware
app.use(express.json());

// routes
app.use(router);

export default app;

import { Router } from "express";
import ChartController from "../controller/chart-controller";

const chartRouter = Router();

// GET
chartRouter.get("/", ChartController.getAllChart);
// chartRouter.get("/chart/:id", ChartController.getAstroByName);

// // POST
// chartRouter.post("/chart", ChartController.createChart);

// // PATCH
// chartRouter.patch("/chart/:id", ChartController.updateChart);

// //DELETE
// chartRouter.delete("/chart/:id", ChartController.deleteChart);


export default chartRouter;
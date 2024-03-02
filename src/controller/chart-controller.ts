import {Request, Response} from "express";
import crypto from "node:crypto"
import ChartModel from "../model/chart-model";

abstract class ChartController {
   static getAllChart = (req: Request, res: Response) =>{
   //  const querys = req.query;

    const charts = ChartModel.getAllChart();
    if(!charts) return res.status(500).json({error: "Server Error"})
   res.json(charts)
   }

}

export default ChartController
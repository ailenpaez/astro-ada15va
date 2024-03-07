import { Request, Response } from "express";
import crypto from "node:crypto";
import ChartModel from "../model/chart-model";

abstract class ChartController {
  static getAllChart = (req: Request, res: Response) => {
    const charts = ChartModel.getAllChart();
    if (!charts) return res.status(500).json({ error: "Server Error" });
    res.json(charts);
  };

  static getAstroByName = (req: Request, res: Response) => {
    const { name } = req.params;
    const chart = ChartModel.getChartByName(name);
    if (!chart) return res.status(404).json({ error: "Server Error" });
    res.json(chart);
  };

  // static createChart = (req: Request, res: Response) => {
  //   const { name,birthdate,time,asc,sun,moon,mercury,venus,mars,jupiter,saturn,uranus,neptune,pluto} = req.body

  //   const newChart = {
  //     name,
  //     birthdate,
  //     time,
  //     asc,
  //     sun,
  //     moon,
  //     mercury,
  //     venus,
  //     mars,
  //     jupiter,
  //     saturn,
  //     uranus,
  //     neptune,
  //     pluto
  //   };

  //   const response = ChartModel.createChart(newChart);
  //   if (response instanceof Error) {
  //       return res.status(500).json({ error: "Error to create New Chart " });
  //   };

  //   return res.json(newChart);
  // };

  static createChart = (req: Request, res: Response) => {
    const { name, birthdate, time, asc, sun, moon, mercury, venus, mars, jupiter, saturn, uranus, neptune, pluto } = req.body;

    const newChart = {
      name,
      birthdate,
      time,
      asc,
      sun,
      moon,
      mercury,
      venus,
      mars,
      jupiter,
      saturn,
      uranus,
      neptune,
      pluto
    };

    const response = ChartModel.createChart(newChart);

    if (response instanceof Error) {
      return res.status(500).json({ error: response.message });
    }

    return res.json(newChart);
  };
}

export default ChartController;

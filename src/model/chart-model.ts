import dbChart from "../database/natal-charts.json";
import fs from "node:fs";

abstract class ChartModel {

  static getAllChart = () => {
    const charts = dbChart.charts;
    return charts;
  };

  static getChartByName = (name: string) => {
    const chart = dbChart.charts.find(
      (chart: any) => chart.name.toLowerCase() == name.toLowerCase()
    );
    return chart;
  };

  static createChart = (newChart: any) => {
    const existingChart = dbChart.charts.find(
      (chart: any) => chart.name.toLowerCase() === newChart.name.toLowerCase()
    );

    if (existingChart) {
      return new Error("Chart with the same name already exists!");
    }

    dbChart.charts.push(newChart);

    try {
      fs.writeFileSync(
        "./src/database/natal-charts.json",
        JSON.stringify(dbChart)
      );
    } catch (error) {
      return new Error("Error writing new chart to database");
    }

    return newChart;
  };

  

}

export default ChartModel;

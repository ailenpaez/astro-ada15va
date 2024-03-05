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

  static createChart = (newChart: any) =>{
    dbChart.charts.push(newChart);

    try{
      fs.writeFileSync("./src/database/natal-charts.json", JSON.stringify(dbChart));
    }catch(error){
      return new Error();
    }
    return newChart;

  }

}


export default ChartModel;

import dbChart from "../database/natal-charts.json"
import fs from "node:fs"


abstract class ChartModel{
    static getAllChart = ()=>{
        const charts = dbChart.charts;
        return charts;
    }
}

export default ChartModel;

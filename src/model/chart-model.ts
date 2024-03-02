import dbChart from "../database/natal-charts.json"
import fs from "node:fs"


abstract class ChartModel{
    static getAllChart = (querys: any)=>{
        const charts = querys.charts;
        return charts;
    }
}

export default ChartModel;

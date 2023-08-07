import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointsValue = props.dataPoints.map(
    (dataPoints) => dataPoints.value
  );
  const TotalMaximum = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => {
        return (
          <ChartBar
            key={dataPoints.label}
            value={dataPoints.value}
            label={dataPoints.label}
            maxValue={TotalMaximum}
          />
        );
      })}
      ;
    </div>
  );
};

export default Chart;

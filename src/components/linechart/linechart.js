import * as React from "react";
import { useEffect, useRef } from "react";
import bb, { line, zoom } from "billboard.js";

const LineChart = ({ dataSource }) => {
  const lineChart = useRef(null);

  useEffect(() => {
    bb.generate({
      data: {
        x: "x",
        columns: dataSource,
        type: line(), // for ESM specify as: line()
      },
      zoom: {
        enabled: zoom(), // for ESM specify as: zoom()
        type: "drag",
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            count: 4,
            format: "%Y-%m-%d",
          },
        },
      },
      bindto: lineChart.current,
    });
  }, [dataSource]);

  return (
    <>
      <div style={{ height: "300px" }} ref={lineChart}>
        chart
      </div>
    </>
  );
};

export default LineChart;
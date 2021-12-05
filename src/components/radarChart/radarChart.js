import React from "react";
import { useEffect, useRef } from "react";
import bb, { radar } from "billboard.js";

const RadarChart = ({ dataSource }) => {
  const RadarChart = useRef(null);

  useEffect(() => {
    bb.generate({
        data: {
          x: "x",
          columns: dataSource,
          type: radar(), // for ESM specify as: radar()
          labels: true
        },
        radar: {
          axis: {
            max: 600
          },
          level: {
            depth: 4
          },
          direction: {
            clockwise: true
          }
        },
        bindto: RadarChart.current
    })
  }, [dataSource]);
  return (
    <>
      <div ref={RadarChart}>chart</div>
    </>
  );
};

export default RadarChart;





    
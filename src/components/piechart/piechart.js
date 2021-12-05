import React from "react";
import { useEffect, useRef } from "react";
import bb, { pie } from "billboard.js";
import "./pieChart.css";

const PieChart = ({ dataSource }) => {
  const PieChart = useRef(null);

  useEffect(() => {
    bb.generate({
      data: {
        columns: dataSource,
        type: pie(), // for ESM specify as: pie()
        onover: function (d, i) {},
        onout: function (d, i) {},
      },
      pie: {
        innerRadius: 20,
      },
      bindto: PieChart.current,
    });
  }, [dataSource]);
  return (
    <>
      <div ref={PieChart}>chart</div>
    </>
  );
};

export default PieChart;
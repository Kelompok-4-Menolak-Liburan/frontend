import React from "react";
import ReactEcharts from "echarts-for-react";

const SuccessCharts = () => {
  const option = {
    darkMode: true,
    color: ["#FF3D3D", "#33AA5B"],
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: true,
          position: "center",
          formatter: "{d}%",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 735, name: "Active" },
          { value: 1048, name: "Not Active" },
        ],
      },
    ],
  };

  return <ReactEcharts option={option} className="w-full" />;
};

export default SuccessCharts;

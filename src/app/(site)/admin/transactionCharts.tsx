import React from "react";
import ReactEcharts from "echarts-for-react";

const TransactionCharts = () => {
  const option = {
    darkMode: true,
    textStyle: {
      color: "#fff",
    },
    color: ["#097BFD", "#FF3D3D", "#33AA5B"],
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Comedy", "Music", "Webinar"],
      textStyle: {
        color: "#fff",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Nov",
        "Dec",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Comedy",
        type: "line",
        data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290],
      },
      {
        name: "Music",
        type: "line",
        data: [120, 132, 101, 134, 90, 230, 210, 120, 500, 101, 134, 90],
      },
      {
        name: "Webinar",
        type: "line",
        data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190],
      },
    ],
  };

  return <ReactEcharts option={option} lazyUpdate={true} />;
};

export default TransactionCharts;

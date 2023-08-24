"use client";
import ReactEcharts from "echarts-for-react";

const BarChart = () => {
  const option = {
    darkMode: true,
    color: ["#13A696", "#B5720E"],
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
      textStyle: {
        color: "#fff",
      },
      data: ["tes", "tes3"],
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "bar",
        avoidLabelOverlap: false,

        label: {
          show: true,
          position: "top", // Adjust the position as needed
          formatter: function (params: any) {
            return params.value; // Display the actual value from data
          },
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
        },
        barWidth: "20px", // Adjust the bar width as needed

        labelLine: {
          show: false,
        },
        data: [
          {
            value: 20, // Assuming this is your totalsell for Monday
            name: "Total Sell",
            itemStyle: { color: "#13A696" },
          },
          {
            value: 40, // Assuming this is your totalview for Monday
            name: "Total View",
            itemStyle: { color: "#B5720E" },
          },
          {
            value: 30, // Assuming this is your totalsell for Tuesday
            name: "Total Sell",
            itemStyle: { color: "#13A696" },
          },
          {
            value: 50, // Assuming this is your totalview for Tuesday
            name: "Total View",
            itemStyle: { color: "#B5720E" },
          },
        ],
      },
    ],
  };

  return <ReactEcharts option={option} className="w-full" />;
};
export default BarChart;

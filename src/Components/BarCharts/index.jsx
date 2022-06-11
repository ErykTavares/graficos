/* eslint-disable no-unused-vars */
import React from "react";
import Chart from "react-apexcharts";

const BarCharts = () => {
  const series = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
    // responsive: [
    //   {
    //     breakpoint: 500,
    //     options: {
    //       plotOptions: {
    //         bar: {
    //           horizontal: false,
    //         },
    //       },
    //       legend: {
    //         position: "bottom",
    //       },
    //     },
    //   },
    // ],
  };

  return (
    <Chart options={options} series={series} type="bar" width={"100%"}  height={350} />
  )
};

export default BarCharts;

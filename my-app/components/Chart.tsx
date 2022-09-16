import React, { useState } from "react";
import { Button } from "@mui/material";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function SampleChart(props) {
  const labels = [
    "2022-01",
    "2022-02",
    "2022-03",
    "2022-04",
    "2022-05",
    "2022-06",
    "2022-07",
    "2022-08",
    "2022-09",
    "2022-10",
    "2022-11",
    "2022-12",
  ];

  const GraphData = {
    labels: labels,
    datasets: [
      {
        label: "Sample",
        data: props.data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sample-Chart",
      },
    },
  };

  return (
    <div className="Chart">
      <Line options={options} data={GraphData} height={400} width={800} />
    </div>
  );
}
export const LineChart = () => {
  // ランダムデータを作成
  let initial_data = [];
  for (let i = 0; i < 12; i++) {
    initial_data.push(Math.random());
  }
  const [data, setData] = useState(initial_data);

  return (
    <div className="App">
      <SampleChart data={data} />
      <Button
        variant="contained"
        onClick={() => {
          let random_data = [];
          for (let i = 0; i < 12; i++) {
            random_data.push(Math.random());
          }
          setData(random_data);
        }}
      >
        ランダム
      </Button>
    </div>
  );
};

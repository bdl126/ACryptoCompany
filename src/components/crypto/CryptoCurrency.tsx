import React, { Fragment } from "react";
import Card from "../cards/Card";
import classes from "./CryptoCurrency.module.css";
import { fullCryptoType } from "../../types";

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

import { Line } from "react-chartjs-2";
import Button from "../UI/Button";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: { color: "#9ba4b6" },
    },
    x: {
      ticks: { color: "#9ba4b6" },
    },
  },
};

function CryptoCurrency(props: fullCryptoType) {
  const data = {
    labels: props.marketPriceData.map((array: any): string => {
      return dayOfWeek[array[0]];
    }),
    datasets: [
      {
        label: "",
        data: props.marketPriceData,
        borderColor: "#0B4870",
      },
    ],
  };

  return (
    <Card>
      <div className={classes.title}>
        <img src={props.image} alt="crypto" />
        <h1>{props.name}</h1>
      </div>
      <div className={classes.information}>
        <div className={classes.description}>
          <h3> Price: {props.current_price}$ </h3>
          <h4> All time High: {props.ath.toFixed(2)}$</h4>
          <h4> All time low: {props.atl.toFixed(2)}$</h4>
        </div>
        <div className={classes.button}>
          <Button className={classes.buy}>Buy</Button>
          <Button className={classes.sell}>Sell</Button>
        </div>
      </div>
      <div className={classes.graph}>
      <Line  options={options} data={data} />

      </div>
    </Card>
  );
}

export default CryptoCurrency;

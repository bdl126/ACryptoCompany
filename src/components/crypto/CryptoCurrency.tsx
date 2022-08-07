import React, { Fragment } from "react";
import Card from "../cards/Card";
import classes from "./CryptoCurrency.module.css";
import { cryptoType } from "../../types";

function CryptoCurrency(props: cryptoType) {
  return (
    <Card>
      <div className={classes.title}>
        <img src={props.image} alt="crypto" />
        <h1>{props.name}</h1>
      </div>
      <div className={classes.description}>
        <h3> Price: {props.current_price}$ </h3>
        <h4> All time High: {props.ath}$</h4>
        <h4> All time low: {props.atl}$</h4>
      </div>
    </Card>
  );
}

export default CryptoCurrency;

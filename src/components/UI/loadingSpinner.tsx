import React from "react";
import classes from "./loadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classes.loadingSpinner}></div>
    </div>
  );
}

export default LoadingSpinner;

import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import Button from "../UI/Button";


function Navbar() {
  return (
    <Fragment>
      <header className={classes.navbar}>
        <div className={classes.logo}>
          <h1>A Crypto </h1>
          <img src="investmentcryptocurrency.png" alt="fuck" />
        </div>

        <div className={classes.links}>
          <ul>
            <li>
              <NavLink to="/"> Buy Crypto </NavLink>
            </li>
            <li>
              <NavLink to="/"> Portfolio</NavLink>
            </li>
          </ul>
          <Button> Contact me</Button>
        </div>
      </header>
    </Fragment>
  );
}

export default Navbar;

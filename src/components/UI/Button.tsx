import React from "react";
import classes from "./Button.module.css"

interface buttonProps{
    children:any
    className?:string
}

function Button (props: buttonProps)  {
    return (
        <button className={`${classes.mybutton} ${props.className}`}> {props.children}</button>
    );
}

export default Button
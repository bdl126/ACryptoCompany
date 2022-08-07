import React from "react";
import classes from "./card.module.css"

interface CardProps{
    children:any
}

function Card (props: CardProps) {
    return (
        <main className={classes.card}>{props.children}</main>
    )
}

export default Card
import React from "react";
import classes from "./card.module.css"

interface CardProps{
    children:any
    className?:string
}

function Card (props: CardProps) {
    return (
        <main className={`${classes.card} ${props.className}`}>{props.children}</main>
    )
}

export default Card
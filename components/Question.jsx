import React from "react"
import Answer from "./Answer"

export default function Question(props) {
    return (
        <>
            <h3 data-question={props.question}>{props.question}</h3>
            <ul className="answers-list">
                {props.children}
            </ul>
        </>
    )
}

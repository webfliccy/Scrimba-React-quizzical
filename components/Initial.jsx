import React from "react"

export default function Initial(props) {
    return (
        <div className="splash-screen">
            <h1>Quizzical</h1>
            <p>Trivia game built in React</p>
            <button onClick={props.handleClick}>Start Quiz</button>
        </div>
    )
}
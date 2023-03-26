import React from "react"

export default function Scoring(props) {
    return (
        // <>
        // {props.endGame ? 
        //     <button>Play again</button> : 
        //     <button onClick={props.scoreGame}>Check answers</button>}
        // </>
        <div className="scores">
            <button onClick={props.scoreGame}>Check answers</button>
            <p>You scored {props.score} / 5 correct answers</p>
        </div>
    )
}
import React from "react"

export default function Answer(props) {
    
    const correctClass = props.isCorrect ? "correct" : ""
    const activeClass = props.isSelected ? "selected" : ""
        
    
    return (
        <li 
            data-answer={props.answer}
            onClick={() => props.handleClick(props.id, props.qId, props.isCorrect, props.isSelected)} 
            className={[activeClass, correctClass].join(' ')}   
        >{props.answer}
        </li>
    )
}

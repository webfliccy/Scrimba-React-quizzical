import React from "react"
import Initial from "./components/Initial"
import Quiz from "./components/Quiz"

export default function App() {
    
    const [startQuiz, setStartQuiz] = React.useState(false)
    
    function handleClick() {
        setStartQuiz(true)
    }
    
    return (
        <>
        {startQuiz && 
        <Quiz />
        }
        {!startQuiz && 
        <Initial 
            handleClick={handleClick}
        />}
        </> 
    )
}
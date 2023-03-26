import React from "react"
import {nanoid} from 'nanoid'
import Answer from "./Answer"
import Question from "./Question"
import Scoring from "./Scoring"

export default function Questions(props) {
    
    const [questionsObj, setQuestionsObj] = React.useState([])
    const [endGame, setEndGame] = React.useState(false)
    const [score, setScore] =  React.useState(0)
    
    function parseHtmlEnteties(text) {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
    }

    const cleanedData = props.data.map(item => {  
        //randomise answers array
        const answers = item.incorrect_answers
        const randIndex = Math.floor(Math.random() * 3)
        answers.splice(randIndex, 0, item.correct_answer)
        
        //turn array into array of objects
        const answersObj = answers.map(answer => {
            return ({
                answer,
                correct: item.correct_answer === answer ? true : false,
                id: nanoid(),
                isSelected: false
            }) 
        })
        
        //return questions
        return ({
            question: parseHtmlEnteties(item.question),
            id: nanoid(),
            answers: answersObj,
        })
    })

    React.useEffect(() => {
        setQuestionsObj(cleanedData)
    }, [props.data])
    
    
    function handleClick(id, qId, correct, isSelected) {
        
        //Update clicked ans in current Q object
        const currQ = 
            questionsObj.filter(item => item.id === qId)[0].answers
            .map(ans => {
                 return (ans.id === id ?
                {...ans, isSelected: !isSelected}
                : {...ans, isSelected: false})
            })
            
        //set Questions    
        setQuestionsObj(prev => prev.map(item => { 
            return(
            item.id === qId ?
            {...item, answers: [...currQ]} :
            item
            )    
        }))
        
    }
    
    function scoreGame() {
        document.body.classList.add("scoring")
        setEndGame(true)
        const correctAns = 
            questionsObj.map(item => item.answers)
            .flat().filter(item => item.isSelected && item.correct).length
        
        setScore(correctAns)
    }
    
 
    const questionsHtml = questionsObj.map(item => {
    
        const answersHtml = item.answers.map(
            answer => <Answer 
                    key={answer.id} 
                    id={answer.id} 
                    qId={item.id}
                    answer={answer.answer} 
                    isSelected={answer.isSelected}
                    handleClick={handleClick} 
                    isCorrect={answer.correct}
                /> 
        )
        
        
        return (
            <div key={item.question}>
                <Question 
                    key={nanoid()}
                    question={item.question}
                    children={answersHtml}
                />
            </div>  
        )
    })
    
    
    return (
        <div>
            {questionsHtml}
            <Scoring 
                endGame={endGame}
                score={score}
                scoreGame={() => scoreGame()} 
            />
        </div>
    )
}
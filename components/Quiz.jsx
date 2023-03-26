import React from "react"
import Questions from "./Questions"



export default function Quiz(props) {
    
    const [allData, setAllData] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setAllData(data.results))
    }, [])
    
    return (
        <section className="quiz">
            <Questions 
                data={allData}
            />
        </section>
    )
}
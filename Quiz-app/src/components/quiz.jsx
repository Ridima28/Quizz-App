import React from 'react'
const questionBank = [
    {
        id:1, 
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer : "Paris"
    },
        {
        id:2, 
        question: "What is the capital of India?",
        options: ["New Delhi", "Mumbai", "Kolkata", "Bombay"],
        answer : "New Delhi"
    },
        {
        id:3, 
        question: "What is the capital of England?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer : "London"
    }
]
export const Quiz = () => {
    return (
    <div>
        <h2>Question 1</h2>
        <p className = "question">  {questionBank[0].question}</p>
        {questionBank[0].options.map((option)=>(
            <button className= "option"> {option}</button>
        ))}
        
        <div className = "nav-buttons"> 
            <button > Previous</button>
            <button> Next</button>

        </div>


    </div>
    )
}

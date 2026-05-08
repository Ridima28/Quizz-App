import React from 'react'
import { useState } from 'react'
export const Quiz = () => {
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
const[optionSelected, setOptionSelected] = useState("None")
const[message, setMessage] = useState("")
const[currentQuestion, setCurrentQuestion] = useState(0)

const handleNext =() =>{
    if (currentQuestion < questionBank.length -1){
        setCurrentQuestion(currentQuestion + 1)
        setOptionSelected("None")
        setMessage("")
    }else if (currentQuestion === questionBank.length -1){
        setMessage("You have reached the last question")
    }

}
const handlePrev =() =>{
    if (currentQuestion >0){
        setCurrentQuestion(currentQuestion - 1)
        setOptionSelected("None")
        setMessage("")

    }else if (currentQuestion ===0){
        setMessage("You Have Reached the First Question")
    }

}
const handleSelectOption = (option) => {
    setOptionSelected(option);
}

const handleSubmit = () =>{
    if (optionSelected === questionBank[currentQuestion].answer){

        setMessage("Correct Answer")
    } else{
        setMessage( `Correct Answer is ${questionBank[currentQuestion].answer}`)
    }
        
}   

    return (
    <div>
        <h2>Question {currentQuestion + 1}</h2>
        <p className = "question"> {questionBank[currentQuestion].question}</p>

        {questionBank[currentQuestion].options.map((option,index)=>(
            <button 
            key = {index}
            onClick = {()=> handleSelectOption(option)} className= "option">
            {option}
        </button>

        ))}
        <p> Option Selected: {optionSelected} </p>
        <p> {message} </p>


        <div className = "nav-buttons"> 
            <button 
            onClick = {handlePrev}> Previous</button>
            <button 
            onClick = {handleNext}> Next</button>
            <button onClick = {handleSubmit}> Submit</button>
        </div>
    </div>
    )

}
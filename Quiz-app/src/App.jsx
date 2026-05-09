import React from 'react'
import './index.css'
import { Quiz } from './components/quiz'
import WelcomePage from './components/welcomePage'

export default function App() {
  return (
    <div className = "app-container">
      <WelcomePage/>
      <h1> General Knowledge Quiz</h1>
    <Quiz/>
    </div>
  )
}

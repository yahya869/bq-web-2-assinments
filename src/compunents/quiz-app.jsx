import { useState } from "react";
import { Options } from "./options";


export function QuizApp() {
    const [mcqs, setMcqs] = useState([])
    const [quizStarted, setQuizStarted] = useState(false)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [answer, setAnswer] = useState('')
    const [showResult, setShowResult] = useState(false)

    async function getQuizQuestions() {
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple');
        const data = await response.json();
        setMcqs(data.results)
        setQuizStarted(true)
        setCurrentQuestionIndex(0)
        setScore(0)
        setShowResult(false)
    }
    const nextQuestion = () => {
        if (currentQuestionIndex < mcqs.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            if (mcqs[currentQuestionIndex].correct_answer === answer) {
                setScore(score + 10)
            }
        } else {
            setQuizStarted(false)
            setShowResult(true)
        }
    }

    const hendleAnswer = (answer) => {
        setAnswer(answer)
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-2">
  <div className="bg-white dark:bg-gray-800 max-w-3xl w-full mx-auto mt-6 md:mt-0 rounded-2xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 shadow-xl ring-1 ring-gray-900/10">
      
      
      
         {!quizStarted && (
                <>
                    <h1 className="text-2xl sm:text-3xl font-bold text-blue-500  mb-2 text-center ">Quiz</h1>
                    <h2 className="text-base sm:text-lg font-medium text-gray-600 dark:text-gray-300 mb-6 text-center">Web-App</h2>
                </>
            )}

            {showResult && (
                <div className="mt-6 text-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Score : {score}</h2>
                    <p className={`mt-2 text-base sm:text-lg font-semibold ${score > 50 ? 'text-green-600' : 'text-red-600'}`}>
                        {score > 50 ? 'Pass 🎉' : 'Failed 😞'}
                    </p><br /><br />
                </div>
            )}
            
            {!quizStarted && (
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md transition duration-200 w-full sm:w-auto block mx-auto"
                    onClick={getQuizQuestions}
                >
                    Start Quiz
                </button>
            )}

            {quizStarted && (
                <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
                            Question : {currentQuestionIndex + 1}
                        </h3>
                        <h3 className="text-md sm:text-lg font-medium text-gray-600 dark:text-gray-400">
                            Score : {score}
                        </h3>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white text-center sm:text-left">
                        {mcqs[currentQuestionIndex].question}
                    </h2>

                    <div className="space-y-3">
                        <Options
                            currectAnswer={mcqs[currentQuestionIndex].correct_answer}
                            incurrectAnswer={mcqs[currentQuestionIndex].incorrect_answers}
                            onAnswer={hendleAnswer}
                        />
                    </div>

                    <button
                        onClick={nextQuestion}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md transition duration-200 w-full sm:w-auto block mx-auto"
                    >
                        {currentQuestionIndex === mcqs.length - 1 ? 'Submit' : 'Next Question'}
                    </button>
                </div>
            )}


        
  </div>
</div>


    )
}
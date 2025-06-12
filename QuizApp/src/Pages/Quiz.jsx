import React, { useState } from 'react'

import QuizResult from '../components/QuizResult';
import QuizTimer from '../components/QuizTimer';
import QuizQuestions from '../components/QuizQuestions';

const Quiz = ({ questions }) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // function to handle answer selection
    const handleAnswer = (index, answer) => {
        setSelectedAnswers({ ...selectedAnswers, [index]: answer });
    }

    // function to handle next question
    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleSubmit();
        }
    }

    // function to handle quiz submit
    const handleSubmit = () => {
        setIsSubmitted(true);
    }

    // function to handle time up
    const handleTimeUp = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleSubmit();
        }
    }

    // calculate correct and incorrect answers
    const correctAnswers = questions.map((q, i) => (q.correct_answer === selectedAnswers[i] ? i + 1 : null)).filter((q) => q !== null);

    // calculate correct and incorrect answers
    const incorrectAnswers = questions.map((q, i) => (q.correct_answer === selectedAnswers[i] && selectedAnswers[i] ? i + 1 : null)).filter((q) => q !== null);

    // calculate correct and incorrect answers
    if (isSubmitted) {
        return (
            <QuizResult
                questions={questions}
                selectedAnswers={selectedAnswers}
                correctAnswers={correctAnswers}
                incorrectAnswers={incorrectAnswers}
            />
        )
    };

    return (
        <div className='w-[80%] -space-y-4 px-36 flex items-center justify-center flex-col z-20 relative'>
            <div className="w-full p-6 space-y-4 bg-neutral-600/20 border border-neutral-100/20 backdrop-blur rounded-xl">
                {/* Quiz Timer */}
                <QuizTimer
                    difficulty={questions[currentQuestion].difficulty}
                    questionCount={questions.length}
                    onTimeUp={handleTimeUp}
                />

                {/* Quiz Questions */}
                <QuizQuestions
                    question={questions[currentQuestion]}
                    index={currentQuestion}
                    handleAnswer={handleAnswer}
                    selectedAnswer={selectedAnswers[currentQuestion]}
                />

                {/* Button */}
                <button
                    className="bg-blue-600 text-neutral-50 text-base font-medium px-8 py-3 rounded-lg hover:bg-blue-700 ease-in-out duration-300"
                    onClick={handleNext}
                >
                    {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
                </button>
            </div>

        </div>
    )
}

export default Quiz
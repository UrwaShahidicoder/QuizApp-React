import React from 'react'

const QuizQuestions = ({ question, index, handleAnswer, selectedAnswer }) => {
    return (
        <div className='p-4 text-neutral-100 text-lg font-bold'>
            <h2 className="mb-4">
                Q{index + 1}:
                <span dangerouslySetInnerHTML={{ __html: question.question }} />
                {/* dangerouslySetInnerHTML is used to display the question html to avoid some quotation issues or simply safe ields */}
            </h2>

            {question.answers.map((answer, i) => (
                <label
                    key={i}
                    className={`block h-11 p-3 rounded-lg ${selectedAnswer === answer ? "bg-neutral-400/20" : ""} hover:bg-neutral-400/20`}
                >
                    <input
                        type="radio"
                        name={`question-${index}`}
                        value={answer}
                        checked={selectedAnswer === answer}
                        onChange={() => handleAnswer(index, answer)}
                        className="mr-2 w-4 h-4 bg-transparent"
                    />

                    <span dangerouslySetInnerHTML={{ __html: answer }} />

                </label>
            ))}
        </div>
    )
}

export default QuizQuestions
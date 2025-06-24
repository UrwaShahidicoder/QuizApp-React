import React from 'react';

const QuizQuestions = ({ question, index, handleAnswer, selectedAnswer }) => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-6 text-neutral-100">
      <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4 leading-snug break-words">
        Q{index + 1}:{' '}
        <span dangerouslySetInnerHTML={{ __html: question.question }} />
      </h2>

      <div className="space-y-3">
        {question.answers.map((answer, i) => (
          <label
            key={i}
            className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
              selectedAnswer === answer
                ? 'bg-neutral-400/30'
                : 'hover:bg-neutral-400/20'
            }`}
          >
            <input
              type="radio"
              name={`question-${index}`}
              value={answer}
              checked={selectedAnswer === answer}
              onChange={() => handleAnswer(index, answer)}
              className="mt-1 w-4 h-4 accent-blue-600 shrink-0"
            />
            <span
              className="text-sm sm:text-base break-words"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestions;
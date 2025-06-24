import React from 'react';

const QuizResult = ({
  questions,
  selectedAnswers,
  correctAnswers,
  incorrectAnswers,
}) => {
  const notAttempted = questions
    .map((_, i) => (selectedAnswers[i] ? null : i + 1))
    .filter((q) => q !== null);

  const handleShare = () => {
    const summary = `I scored ${correctAnswers.length} out of ${questions.length} in a quiz! 🎯`;
    if (navigator.share) {
      navigator.share({
        title: 'Quiz Results',
        text: summary,
        url: window.location.href,
      });
    } else {
      alert('Sharing is not supported on this device.');
    }
  };

  return (
    <div className="w-full min-h-screen py-10 px-4 flex items-center justify-center text-neutral-100 z-20">
      <div className="w-full max-w-6xl flex flex-col space-y-6 p-4 sm:p-6 md:p-8 bg-neutral-600/20 border border-neutral-100/20 backdrop-blur rounded-xl overflow-hidden">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h1 className="text-xl sm:text-2xl text-neutral-50 font-bold">
            Quiz Results
          </h1>
          <button
            onClick={handleShare}
            className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base px-4 py-2 rounded-lg transition duration-300"
          >
            Share Results
          </button>
        </div>

        <div className="flex flex-wrap gap-4 border-b pb-4 border-neutral-100/20">
          <h2 className="text-base sm:text-lg tracking-wide font-bold w-full sm:w-auto">
            Quiz Summary:
          </h2>

          <p className="flex items-center gap-x-2 bg-green-700 px-3 py-1 rounded-lg text-sm sm:text-base">
            Total Correct: <span className="font-bold">{correctAnswers.length}</span>
          </p>

          <p className="flex items-center gap-x-2 bg-red-700 px-3 py-1 rounded-lg text-sm sm:text-base">
            Total Incorrect: <span className="font-bold">{incorrectAnswers.length}</span>
          </p>

          {notAttempted.length > 0 && (
            <>
              <p className="flex items-center gap-x-2 bg-red-800/60 px-3 py-1 rounded-lg text-sm sm:text-base">
                Not Attempted: <span className="font-bold">{notAttempted.length}</span>
              </p>
              <p className="flex items-center gap-x-2 bg-neutral-800/60 px-3 py-1 rounded-lg text-sm sm:text-base">
                Questions: <span className="font-bold">{notAttempted.join(', ')}</span>
              </p>
            </>
          )}
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          <h2 className="text-lg font-bold">Review Questions:</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {questions.map((q, i) => (
              <div
                key={i}
                className="w-full p-4 space-y-2 rounded-xl bg-neutral-700/10 border border-neutral-100/30 hover:scale-[1.02] transition-transform duration-300"
              >
                <p className="font-bold">
                  Q{i + 1}:{' '}
                  <span dangerouslySetInnerHTML={{ __html: q.question }} />
                </p>
                <p className="font-bold">
                  Your Answer:{' '}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: selectedAnswers[i] || 'Not Attempted',
                    }}
                  />
                </p>
                <p className="font-bold">
                  Correct Answer:{' '}
                  <span dangerouslySetInnerHTML={{ __html: q.correct_answer }} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
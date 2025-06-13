import React, { useEffect, useState } from 'react'
import { fetchQuiz } from '../Api/quizAPI';

import Quiz from "../pages/Quiz";
import QuizOptions from "../components/QuizOptions";

const Home = () => {

    const [quizData, setQuizData] = useState(null);

    const startQuiz = async (options) => {
        const data = await fetchQuiz(
            options.category,
            options.difficulty,
            options.type,
            options.amount
        );

        const formatData = data.map((q) => ({
            ...q,
            answers: [...q.incorrect_answers, q.correct_answer].sort(),
        }));

        setQuizData(formatData);
    }

    return (
        <div className='w-full flex-1 flex items-center justify-center'>
            {!quizData ? (
                <QuizOptions startQuiz={startQuiz} />
            )
                :
                (
                    <Quiz questions={quizData} />
                )
            }
        </div>
    )
}

export default Home
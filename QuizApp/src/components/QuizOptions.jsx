import React, { useState, useEffect } from 'react'
import { fetchCategories } from '../Api/quizAPI';

const QuizOptions = ({ startQuiz }) => {

    const [categories, setCategories] = useState([]);
    const [options, setOptions] = useState({
        category: "",
        difficulty: "easy",
        type: "multiple",
        amount: 10,
    });

    // Fetch categories
    useEffect(() => {
        const getCategories = async () => {
            const data = await fetchCategories();
            setCategories(data);
        }
        // Don't forgot to call the function
        getCategories();
    }, []);

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setOptions({ ...options, [name]: value });
    }

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        startQuiz(options);
    }

    return (
        <div className='w-[80%] -space-y-4 px-36 flex items-center justify-center flex-col z-20 relative'>
            {/*  */}
            <div className="w-fit p-1 bg-transparent rounded-xl z-10 border-b-2 border-neutral-50/20">
                <h1 className="text-xl text-neutral-50 font-bold w-fit bg-neutral-50/20 backdrop-blur rounded-xl py-2 px-4">
                    Select Quiz Options
                </h1>
            </div>

            {/*  */}
            <form onSubmit={handleSubmit} className="w-full p-6 space-y-6 bg-neutral-50/20 backdrop-blur rounded-xl">
                <label className="block space-y-1">
                    <p className="text-base text-neutral-200 font-medium">
                        Select Category
                    </p>
                    <select
                        name="category"
                        value={options.category}
                        onChange={handleChange}
                        className="block w-full h-12 p-2 bg-neutral-200 border border-neutral-200 rounded-lg focus:border-blue-600 outline-none">
                        <option value="">Any</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}

                    </select>
                </label>

                <div className="space-y-1">
                    <p className="text-base text-neutral-200 font-medium">
                        Select Difficulty Level
                    </p>
                    <select
                        name="level"
                        value={options.difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="block w-full h-12 p-2 bg-neutral-200 border border-neutral-200 rounded-lg focus:border-blue-600 outline-none">

                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className="space-y-1">
                    <p className="text-base text-neutral-200 font-medium">
                        Select Question Type
                    </p>
                    <select
                        name="type"
                        value={options.type}
                        onChange={(e) => setType(e.target.value)}
                        className="block w-full h-12 p-2 bg-neutral-200 border border-neutral-200 rounded-lg focus:border-blue-600 outline-none">

                        <option value="multiple">Multiple Choice</option>
                        <option value="boolean">True/False</option>
                    </select>
                </div>

                <div className="space-y-1">
                    <p className="text-base text-neutral-200 font-medium">
                        Number of Questions
                    </p>
                    <input
                        type='number'
                        name="amount"
                        value={options.amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="block w-full h-12 p-2 bg-neutral-200 border border-neutral-200 rounded-lg focus:border-blue-600 outline-none"
                        min="1"
                        max="50"
                    />
                </div>

                <button type='submit' className="bg-blue-600 text-neutral-50 text-base font-medium px-8 py-3 rounded-lg hover:bg-blue-700 ease-in-out duration-300">
                    Start Quiz
                </button>

            </form>
        </div>
    )
}

export default QuizOptions
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const { data } = useLoaderData();

    const { name, questions, total } = data;
    console.log(questions);
    return (
        <div>
            <h2 className='mt-5 fw-bold'>Questions Of <span className="text-warning">{name}</span></h2>
            <h4>Total Quiz: {total}</h4>
            {
                questions.map(quiz => <QuizDetails
                    key={quiz.id}
                    quiz={quiz}></QuizDetails>)
            }
        </div>
    );
};

export default Quiz;
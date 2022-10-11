import React from 'react';
import { Button } from 'react-bootstrap';

const QuizDetails = ({ quiz }) => {
    const { correctAnswer, question, options } = quiz;
    console.log(quiz);
    return (

        <div className='mt-5 bg-secondary bg-opacity-100  border border-warning rounded' style={{ width: '50%', margin: "auto" }}>
            <div className='mt-3 fw-bold' dangerouslySetInnerHTML={{ __html: question }}>

            </div>
            <div className='d-flex justify-content-around gap-4 p-3'>
                <Button variant="outline-warning"> {options[0]}</Button>{''}
                <Button variant="outline-warning"> {options[1]}</Button>{''}

            </div>
            <div className='d-flex justify-content-around gap-4 p-3'>
                <Button variant="outline-warning">{options[2]}</Button>{''}
                {options[3] ? <Button variant="outline-warning">  {options[3]}</Button> : ''}


            </div>

        </div>



    );
};

export default QuizDetails;
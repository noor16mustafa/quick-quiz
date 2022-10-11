import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './QuizDetails.css'

const QuizDetails = ({ quiz }) => {
    const { correctAnswer, question, options } = quiz;


    const handleSelectBtn = (option) => {
        if (option === correctAnswer) {
            toast.success('WoW...Good Job !', {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            toast.error('Oops..Wrong Answer !', {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    const handleEyeBtn = () => {
        toast.info(`Answer: ${correctAnswer}`, {
            position: toast.POSITION.TOP_CENTER
        });

    }
    return (

        <div className='quiz-container row  mt-5 p-4 shadow bg-secondary bg-opacity-100  border border-warning rounded' style={{ margin: "auto" }}>
            <div className=' col d-flex position-relative'>
                <div className='mt-3 fw-bold text-start ps-2' dangerouslySetInnerHTML={{ __html: question }}>

                </div>
                <div className='position-absolute top-0 end-0 me-3'>
                    <FontAwesomeIcon onClick={handleEyeBtn} icon={faEye} />
                </div>
            </div>

            <div className='btn d-flex justify-content-around gap-4 p-3 container-fluid'>

                <Button className='btn-option' variant="outline-warning" onClick={() => handleSelectBtn(options[0])}> {options[0]}</Button>{''}


                <Button className='btn-option' variant="outline-warning" onClick={() => handleSelectBtn(options[1])}> {options[1]}</Button>{''}


            </div>
            <div className='btn d-flex justify-content-around gap-4 p-3 '>
                <Button className='btn-option' variant="outline-warning" onClick={() => handleSelectBtn(options[2])}>{options[2]}</Button>{''}
                {options[3] ? <Button className='btn-option' variant="outline-warning" onClick={() => handleSelectBtn(options[3])}>  {options[3]}</Button> : ''}


            </div>
            <ToastContainer />

        </div>



    );
};

export default QuizDetails;
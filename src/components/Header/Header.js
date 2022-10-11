import React from 'react';
import { Button } from 'react-bootstrap';


const Header = () => {
    return (

        <div className='position-relative'>
            <img
                className="d-block w-100 mx-auto img-fluid opacity-50" style={{ height: '400px' }}
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                alt=""
            />


            <div className='text-center position-absolute top-50 start-50 translate-middle'>
                <h2 className="text-warning">Welcome to <span className='fw-bold fs-1 text-dark'>Quick quiz</span></h2>
                <p>We are here to map your talent. Feel free to examine yourself...!!!</p>
                <Button variant="outline-warning" href="/blog">Know More</Button>{' '}
            </div>

        </div>


    );
};

export default Header;
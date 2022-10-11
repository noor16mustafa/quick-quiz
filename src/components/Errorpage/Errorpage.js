import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='mx-auto my-5'>
            <img src="https://t3.ftcdn.net/jpg/01/07/05/28/240_F_107052883_iC9J5BShOPBBiAzFCxVZu6VFNWV1V9V3.jpg" alt="" />
            <div>
                <h1>Could not find the page...!!!</h1>
                <Button variant="outline-danger" as={Link} to={"/"}>Back to home page..</Button>{''}
            </div>
        </div>
    );
};

export default Errorpage;
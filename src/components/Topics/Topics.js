import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Topics = ({ topic }) => {
    const { name, logo, total } = topic;
    return (
        <Col>
            <Card className='my-5 shadow' style={{ width: '300px', margin: 'auto' }}>
                <Card.Img className=' bg-dark bg-opacity-50' style={{ height: '200px', padding: '7px' }} variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='d-flex align-item-center justify-content-center'>
                        <p className='me-2 fw-bolder'>Quiz: {total}</p>
                        <Button className='ms-3' variant="outline-warning">Let's Started
                            <FontAwesomeIcon icon={faArrowRight} /></Button>{''}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Topics;
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Topics = ({ topic }) => {
    const { name, logo, total, id } = topic;
    return (
        <Col>
            <Card className='my-5 shadow border-warning' style={{ width: '300px', margin: 'auto' }}>
                <Card.Img className=' bg-dark bg-opacity-50' style={{ height: '200px', padding: '7px' }} variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='d-flex align-item-center justify-content-center'>
                        <p className='me-2 fw-bolder'>Quiz: {total}</p>
                        <Button className='ms-3' variant="outline-warning" as={Link} to={`/topics/${id}`}>Let's Started
                            <FontAwesomeIcon icon={faArrowRight} /></Button>{''}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Topics;
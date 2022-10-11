import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topics from '../Topics/Topics';

const Home = () => {
    const topics = useLoaderData();
    console.log(topics.data);
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                <Row xs={1} lg={4} className="g-4">
                    {
                        topics.data.map(topic => <Topics
                            key={topic.id}
                            topic={topic}></Topics>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;
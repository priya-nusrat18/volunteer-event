import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Event from '../Event/Event';

const Home = () => {
    const [events , setEvents] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])
    return (
        <Container>
            <Row>
            {
                events.map( event => <Event event={event}></Event>)
            }
            </Row>
        </Container>
    );
};

export default Home;
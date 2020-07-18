import React from 'react';
import { Card, Button } from 'react-bootstrap';
import gatsbyImage from '../images/cat.jpg';

const Post = (props) => (
    <div className="p-10">
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={gatsbyImage} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.excerpt}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>

);

export default Post;
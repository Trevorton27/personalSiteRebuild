import React from 'react';
import { Card, Button } from 'react-bootstrap';
const Post = (props) => (
    <div className="p-10">
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title dangerouslySetInnerHTML={{__html: props.title}} />
                <Card.Text dangerouslySetInnerHTML={{__html: props.excerpt}} />
           
                <Button variant="primary" href={props.readMoreLink}>Read More?</Button>
            </Card.Body>
        </Card>
    </div>

);

export default Post;
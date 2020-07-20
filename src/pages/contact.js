import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout.js';
import { Form, Button } from 'react-bootstrap';

const IndexPage = () => (
    <div>
        <PrimaryLayout column="col-10">
            <Form className="p-5">
                <h1 className="align-content-center">Contact Us</h1>
                <Form.Group controlId="contactForm.Email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Your email, if you would..." />
                </Form.Group>
                <Form.Group controlId="contactForm.Subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Your subject, if you would..." />
                </Form.Group>
                <Form.Group controlId="contactForm.Message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Form.Group controlId="contactForm.Message.Submit">
                    <Button >Submit</Button >
                </Form.Group>
            </Form>
        </PrimaryLayout>
    </div>
);

export default IndexPage;

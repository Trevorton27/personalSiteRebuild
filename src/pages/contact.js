import React from "react"
import Footer from '../components/Footer.js';
import SEO from "../components/seo";
import Header from '../components/Header.js';
import {Form } from 'react-bootstrap';

const IndexPage = () => (
    <div>
        <SEO title="Home" />
        <Header />
        <div className="container" >
            <div className="row justify-content-md-center">
                <div className="col-xs-6">
                    <h1 >Contact Us</h1>
                    <Form>
                        <Form.Group controlId="contactForm.Email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Your email..." />
                        </Form.Group>
                        <Form.Group controlId="contactForm.Subject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Your subject..." />
                        </Form.Group>
                        <Form.Group controlId="contactForm.Message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    </Form>
                </div>
            </div>

        </div>
        <Footer />
    </div>


)

export default IndexPage

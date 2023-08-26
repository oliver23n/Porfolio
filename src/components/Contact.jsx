import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useState } from 'react';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);


    const handleBlur = (field) => {
        if (field === 'fullName') {
            !name ? setNameError(true) : setNameError(false);
        } else if (field === 'email') {
            !email ? setEmailError(true) : setEmailError(false);
        } else if (field === 'message') {
            !message ? setMessageError(true) : setMessageError(false);
        }
    };



    return (
        <Container className="contact-container content">
            <h2 className="my-5">CONTACT ME</h2>
            <Row className="justify-content-lg-start">
                <Col xs lg={8}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Full name:</Form.Label>
                            <Form.Control name="fullName" type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onBlur={() => handleBlur('fullName')}
                                required />
                            {nameError && <p>Must enter your name!</p>}


                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="formEmail">
                            <Form.Label>Email address:</Form.Label>
                            <Form.Control name="email" type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => handleBlur('email')}

                                required /> 
                            {emailError && <p>Email is required</p>}

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Message:</Form.Label>
                            <Form.Control name="message" as="textarea"
                                value={message}
                                onBlur={() => handleBlur('message')}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={6}
                                required />
                            {messageError && <p>Cannot send empty message.</p>}



                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
};

export default Contact;
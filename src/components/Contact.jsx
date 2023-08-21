import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/Contact.css'


function Contact  (){

    return(
        <Container className="contact-container" >
            <h3 className="">CONTACT</h3>
            <Row className="justify-content-lg-start">
                <Col xs lg={8}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

            
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Col>
            </Row>
            
        </Container>
    )
};

export default Contact;
import { Figure, Row, Col, Container } from 'react-bootstrap';
import profilePic from './images/pic.png'


function About() {
   return (

      <Container className='py-5 content'>
         <Row className='my-5'>
            <Col lg={4}>
               <Figure >
                  <Figure.Image
                     roundedCircle
                     thumbnail
                     alt="profile Pic"
                     src={profilePic}
                  />
               </Figure>

            </Col>
            <Col lg={{ span: 7, offset: 1 }}>
               <div className='p-2 m-2'>
                  <h2 className='pt-3'>About.</h2>
                  <p className='pt-4 about'>
                     Hey there. My name is Oliver Nasevski a Software Developer skilled in <span>JavaScript, React, NodeJs and Css</span>. Passionate about design and functionality, I'm dedicated to crafting seamless online experiences. I'm a problem solver and a lifelong learner. Always open to new opportunities and challenges, so don't hesitate to reach out!
                  </p>
               </div>
            </Col >
         </Row>
      </Container>

   )
};

export default About;
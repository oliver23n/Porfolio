
import Figure from 'react-bootstrap/Figure';
import profilePic from './images/pic.png'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function About (){
   return(
    
    <div className='m-5 p-20'>

    <Container id ='about' fluid>
        <Row>
               <Col lg={3}>
                    <Figure className=''>
                    <Figure.Image
                    className=''
                    roundedCircle
                    thumbnail
                    alt="profile Pic"
                    src={profilePic}
                    />
                    <Figure.Caption>
                   <h1 className='text-center'>Oliver Nasevski</h1>
                    </Figure.Caption>
                    </Figure>
                </Col>
                   <Col lg={{ span:7, offset: 1 }}>
            <div className='p-2 m-2'>
            <h2 className='pt-2'>About.</h2>
            <p className='pt-3'>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, unde facere odio necessitatibus ea corrupti, sapiente cupiditate id quisquam natus, officia laudantium reiciendis eum beatae quas molestias magni nesciunt officiis.
               Tenetur ab sapiente quos inventore assumenda, reprehenderit nesciunt eos odio dolorem quidem, quae corrupti id vitae illum, quam autem? Omnis minima possimus fuga? Voluptate, reiciendis! Illo quidem ipsa tenetur veniam.
               Itaque consequuntur quaerat sit eligendi tempore ea. Molestiae porro dolore dignissimos deleniti beatae aliquid, rem nisi doloribus sint maiores nobis voluptatum fugiat quis veritatis vel, doloremque nam ipsa repellat eius.
            </p>
           </div>
                </Col >
                    </Row>
    </Container>
    </div>
   )
};

export default About;
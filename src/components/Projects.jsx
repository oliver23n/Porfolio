import { Container } from "react-bootstrap";
import {projects} from "./data";
import { FaGithub } from 'react-icons/fa';  
import Card from 'react-bootstrap/Card';
// import './styles/Projects.css';

function Projects(){
    return (
         <Container className="my-2">
            <h3>Projects</h3>
            <Container className="d-flex flex-wrap justify-content-evenly">
                {projects.map((project)=>(
                    
                    <Card className="cards" key={project.id}>
                            <img className="position-absolute" src={project.image} />
                        <Card.Body className="cardB">
                                <a href={project.link}>
                                <Card.Title >{project.title}</Card.Title>
                                </a>
                                <a href={project.github}>
                                <FaGithub className='icons mx-3 '></FaGithub>
                                </a>
                                
                                <Card.Text>
                                {project.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                
                
                ) )}
            </Container>
                </Container>
    

    )
};

export default Projects;
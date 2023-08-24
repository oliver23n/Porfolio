import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cssimg from './images/icons/css.png';
import gitimg from './images/icons/git.png';
import htmlimg from './images/icons/html.png';
import jsimg from './images/icons/js.png';
import mongoimg from './images/icons/mongo.png';
import nodeimg from './images/icons/node.png';
import reactimg from './images/icons/react.png';
import sqlimg from './images/icons/sql.png';

function Resume(){
    return(
        <Container className="resume-container">
          
            <h5>Download my <span><a href="https://drive.google.com/file/d/1YWr84UIVmcIiP-AcoPsyd3Yl_RNDApHS/view?usp=drive_link">Resume.pdf</a></span></h5>
           
            <h3>Skills</h3>
            <div className="skills">
             <Row className="d-flex flex-wrap">

            <Col>
            <h4>Languages:</h4>
            </Col>
            <Col>
            <div  className="skill-icons">
            <img src={htmlimg} />
            </div>
            </Col>
            <Col>
            <div className="skill-icons">
            <img src={cssimg}/>
            </div>
            </Col>
            <Col>
            <div className="skill-icons">
            <img src={jsimg}/>
            </div>
            </Col>
             </Row>
            <Row>
                <Col>
                <h4>Libraries/Frameworks:</h4>
                </Col>
                <Col>
            <div className="skill-icons"  >
            <img src={reactimg}/>
            </div>
          
                </Col>
            <Col>
                 <div className="skill-icons"  >
                    <img src={nodeimg} />                 
                </div>
                </Col>
            </Row>
            <Row>
             <Col>
             <h4>Database:</h4>
             </Col>
             <Col>
            <div className="skill-icons">
            <img src={mongoimg}/>
            </div>
             </Col>
             <Col>
            <div className="skill-icons">
            <img src={sqlimg}/>
            </div>
             </Col>   
            </Row>

            <div className="skill-icons" >
            <img src={gitimg}/>
            </div>
        </div>
        </Container>
    )
};

export default Resume;
import { Container, Row, Col } from "react-bootstrap";

import cssimg from './images/icons/css.png';
import gitimg from './images/icons/git.png';
import htmlimg from './images/icons/html.png';
import jsimg from './images/icons/js.png';
import mongoimg from './images/icons/mongo.png';
import nodeimg from './images/icons/node.png';
import reactimg from './images/icons/react.png';
import sqlimg from './images/icons/sql.png';
import bootsimg from './images/icons/bootstrap.png';
import expressImg from './images/icons/express.png';

function Resume() {
    return (
        <Container className="resume-container content">
            <div className="d-flex justify-content-between my-5">
                <h2>SKILLS</h2>
                <h5>Download my <span><a href="https://drive.google.com/file/d/1BQ8zm2yvPSFCUDFQe_E1Hnd0YADIdPCx/view?usp=sharing">Resume.pdf</a></span></h5>
            </div>

            <div className="skills">
                <Row>
                    <Col>
                        <h4>Languages:</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex  flex-row flex-wrap">
                        <div className="skill-icons">
                            <img src={htmlimg} />
                        </div>
                        <div className="skill-icons">
                            <img src={cssimg} />
                        </div>
                        <div className="skill-icons">
                            <img src={jsimg} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4 className="d-flex flex-wrap">Libraries/<span clas>Frameworks:</span></h4>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex flex-row flex-wrap">
                        <div className="skill-icons">
                            <img src={reactimg} />
                        </div>
                        <div className="skill-icons">
                            <img src={nodeimg} />
                        </div>
                        <div className="skill-icons">
                            <img src={expressImg} />
                        </div>
                        <div className="skill-icons">
                            <img src={bootsimg} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Database:</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex flex-row flex-wrap">
                        <div className="skill-icons">
                            <img src={mongoimg} />
                        </div>
                        <div className="skill-icons">
                            <img src={sqlimg} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Other</h4>
                    </Col>
                    <Row >
                        <Col className="d-flex flex-row flex-wrap">
                            <div className="skill-icons" >
                                <img src={gitimg} />
                            </div>
                        </Col>
                    </Row>
                </Row>
            </div>
        </Container>
    )
};

export default Resume;
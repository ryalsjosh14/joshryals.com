import React from 'react';
import '../css/Interests.css'
import { Container, Col, Row } from 'react-bootstrap'
import PMLogo from '../logos/PM_logo.png'
import DTULogo from '../logos/DTU_logo.png'





export default function Interests( { mode }){

    let descriptionClass = mode ? "description" : "";
    let intTitleClass = mode ? "darkIntTitle" : "interestTitle";
    let titleClass = mode ? "darkTitle" : "title";



    return(
        <Container className="section">
            <Row>
                <Col lg={2}>
                    <header className={titleClass}>
                        Involvement
                    </header> 
                </Col>  
                <Col lg={10}>
                    <Container className="involvementCont">
                        <Row>
                            <Col lg={4}>
                            <img src={PMLogo} alt="icon" className="interestLogo"></img>
                            </Col>
                            <Col>
                                <Container>
                                    <Row>
                                        <header className={intTitleClass}>
                                            Project Makeover UF
                                        </header>
                                    </Row>
                                    <Row>
                                        <p className={descriptionClass}>
                                            For the past 2 years, I have enjoyed serving as a captain for Project Makeover UF.
                                            Project Makeover is a student volunteer organization which carries out a multitude of improvement projects
                                            at a local elementary school each year. I have been able to work with the construction team, where we have built
                                            things such as painting easels, playground cars and a gaga ball pit. 
                                        </p>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row>
                            <Col lg={4}>
                            <img src={DTULogo} alt="icon" className="interestLogo"></img>
                            </Col>
                            <Col>
                                <Container>
                                    <Row>
                                        <header className={intTitleClass}>
                                            Dream Team Engineering
                                        </header>
                                    </Row>
                                    <Row>
                                        <p className={descriptionClass}>
                                            Dream Team Engineering is an organization which partners with local Shands children's hospital to build certain products
                                            that could be useful to the patients and staff. I work on the DreamTeamU team, where we have developed a suturing VR game 
                                            to help relax patients both before and during certain procedures. 
                                        </p>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>     
        </Container>
    )
}
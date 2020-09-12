import React from 'react';
import '../css/Education.css'
import UFLogo from '../logos/UF_logo.jpg'
import { Container, Col, Row } from 'react-bootstrap'


export default function Education( { mode }){

    let gradTitleClass = mode ? "darkGradTitle" : "gradTitle";
    let dateClass = mode ? "darkDate" : "date";
    let majorClass = mode ? "darkMajor" : "major";
    let titleClass = mode ? "darkTitle" : "title";



    return(
        <Container className="section">
            <Row>
                <Col lg={2}>
                    <header className={titleClass}>
                        Education
                    </header>
                </Col>   
                <Col lg={10}>
                    <Container>
                        <Row> 
                            <img src={UFLogo} alt="icon" className="logo"></img>
                            <header className="schoolName">
                                University of Florida
                            </header>
                        </Row>
                        <Row>
                            <header className={gradTitleClass}>
                                Expected Graduation:  
                            </header>
                            <header className={dateClass}>
                                Dec. 2021
                            </header>
                        </Row>
                        <Row>
                            <header className={majorClass}>
                                Major in Computer Engineering
                            </header>
                        </Row>
                        <Row>
                            <header className={majorClass}>
                                Cumulative GPA: 3.84/4.00
                            </header>
                        </Row>
                    </Container>
                </Col> 
            </Row>   
        </Container>
    )
}
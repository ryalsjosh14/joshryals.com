import React from 'react';
import '../css/AboutMe.css'
import { Container, Col, Row } from 'react-bootstrap'


export default function AboutMe({ mode }){

    //let titleClass = mode ? "darkTitle" : "title";
    let aboutClass = mode ? "darkAbout" : "about";
    let titleClass = mode ? "darkTitle" : "title";


    return(
        <Container className="section">
            <Row>
                <Col lg={2}>
                    <header className={titleClass}>
                        About me
                    </header>
                </Col>
                <Col lg={10}>
                    <p className={aboutClass}>
                    I am a fourth year Computer Engineering Student with a strong intertest in machine learning and other 
                    data-driven techniques. I have used knowledge acquired from the classroom as well as other experiences to build multiple projects, which 
                    can be seen below. 
                    </p>

                    <p className={aboutClass}>
                    I am currently searching for a summer internship in software engineering or related fields. If you would like to contact me, I can be reached at {<a href="mailto:joshryals3@gmail.com">joshryals3@gmail.com </a>}.
                    </p>
                </Col>
    
            </Row>
        </Container>
    )
}


/*
<p>
                    This is where I will talk about myself. Maybe I will talk about my interests, experiences and extracirriculars. I don't know, 
                    but I definitely want to make this part good because I really want it to draw in the viewer and land me an awesome job! :)
                    his is where I will talk about myself. Maybe I will talk about my interests, experiences and extracirriculars. I don't know, 
                    but I definitely want to make this part good because I really want it to draw in the viewer and land me an awesome job! :)
                </p> 
*/
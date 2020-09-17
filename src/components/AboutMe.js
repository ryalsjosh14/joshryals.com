import React from 'react';
import '../css/AboutMe.css'
import { Container, Col, Row } from 'react-bootstrap'
import resume from '../logos/resume.pdf'


export default function AboutMe({ mode }){

    //let titleClass = mode ? "darkTitle" : "title";
    let aboutClass = mode ? "darkAbout" : "about";
    let titleClass = mode ? "darkTitle" : "title";
    let contactClass = mode? "darkContact" : "contact"


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
                    I am a fourth year Computer Engineering Student in search of a software engineering internship for summer 2021.
                    I have developed a strong intertest in machine learning and other data-driven techniques. A holistic outline of my 
                    experiences and previous work can be seen below. In my free time, I enjoy watching professional sports, hiking and 
                    traveling.
                    </p>

                    <p className={contactClass}>
                    Contact me: {<a href="mailto:joshryals3@gmail.com">joshryals3@gmail.com</a>}, Resume: {<a href={resume}> Josh Ryals Resume</a>}

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
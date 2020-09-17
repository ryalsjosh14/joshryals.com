import React from 'react';
import '../css/Projects.css'
import { Container, Col, Row, Card } from 'react-bootstrap'
import SDLogo from '../logos/app_icon_inverted.png'
import PathFindLogo from '../logos/PathFind_logo.JPG'
import treeLogo from '../logos/tree_logo.png'


export default function Education({ mode }){
    let titleClass = mode ? "darkTitle" : "title";


    return(
        <Container className="section">
            <Row>
                <Col lg={2}>
                    <header className={titleClass}>
                        Projects
                    </header>
                </Col>
                <Col lg={10}>
                    <Container>
                        <Row>
                            <Col lg={5}>
                            <Card style={{ width: '20rem', height: '25rem', margin:20 }}>
                                <Card.Img variant="top" src={PathFindLogo} className="projectImg" />
                                <Card.Body>
                                    <Card.Title>Path Finder</Card.Title>
                                    <Card.Text>
                                    A web app which visualizes common pathfinding algorithms on a grid
                                    </Card.Text>
                                    <Card.Link href="https://ryalsjosh14.github.io/PathFinder/">Try it here!</Card.Link>
                                    <Card.Link href="https://github.com/ryalsjosh14/PathFinder">Code</Card.Link>
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col lg={5}>
                            <Card style={{ width: '20rem', height: '25rem', margin:20}}>
                                <Card.Img variant="top" src={SDLogo} className="projectImg" />
                                <Card.Body>
                                    <Card.Title>Study Date</Card.Title>
                                    <Card.Text>
                                    A mobile application made to connect students with their classmates
                                    </Card.Text>
                                    <Card.Link href="https://studydate.app">studydate.app</Card.Link>
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col lg={5}>
                            <Card style={{ width: '20rem', height: '25rem', margin:20}}>
                                <Card.Img variant="top" src={treeLogo} className="treeImg" />
                                <Card.Body>
                                    <Card.Title>Fundamental Algorithms</Card.Title>
                                    <Card.Text>
                                    A compilation of common data structures and algorithms implemented from scratch                                    </Card.Text>
                                    <Card.Link href="https://github.com/ryalsjosh14/fundamental-algorithm">Code</Card.Link>
                                </Card.Body>
                            </Card>
                            </Col>

                        </Row>  
                    </Container>                  
                </Col>   
            </Row>
                  
        </Container>
    )
}
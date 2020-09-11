import React from 'react';
import '../css/Header.css'
//import MenuItem from './MenuItem.js'
import { Link } from 'react-scroll';
import { Container, Col, Row } from 'react-bootstrap'
import Sun from '../logos/sun_emoji.png'
import Moon from '../logos/moon_emoji.png'






export default function Header({mode, setMode}){
    
    let header= mode ? "darkHeader" : "header";
    let headerName = mode ? "darkName" : "name";
    let menuClass = mode ? "darkMenu" : "menu";
    let scrollClass = mode ? "darkScroll" : "scroll";

    let modeImg = mode ? Moon : Sun;


    return(
        <div className={header}>
            <Row>
                <Col xs={2}></Col>
                <Col xs={8}>
                    <header className={headerName}>
                        Josh Ryals
                    </header> 
                    <Container className={menuClass}>
                    <Row className={menuClass}>
                        <div>
                            <Link className={scrollClass} activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                                About  
                            </Link>
                            <Link className={scrollClass} activeClass="active" to="edu" spy={true} smooth={true} duration={500}>
                                Education  
                            </Link>
                        </div>
                        <div>
                            <Link className={scrollClass} activeClass="active" to="projects" spy={true} smooth={true} duration={500}>
                                Projects  
                            </Link>
                            <Link className={scrollClass} activeClass="active" to="interests" spy={true} smooth={true} duration={500}>
                                Involvement
                            </Link>
                        </div>                        
                    </Row>
                    </Container>
                </Col >
                <Col xs={2} className="emojiContainer">
                    <img alt="emoji" src={modeImg} onClick={ ()=> setMode(!mode)} className="modeButton"></img>
                </Col>
            </Row>      
        </div>
    )
}


/* <button onClick={() => setMode(!mode)} className="modeButton">
                        {mode ? "🌙" : "☀️"}
                    </button> */



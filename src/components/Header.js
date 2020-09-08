import React from 'react';
import '../css/Header.css'
//import MenuItem from './MenuItem.js'
import { Link } from 'react-scroll';
import { Container, Col, Row } from 'react-bootstrap'




export default function Header({mode, setMode}){
    
    let header= mode ? "darkHeader" : "header";
    let headerName = mode ? "darkName" : "name";
    let menuClass = mode ? "darkMenu" : "menu";
    let scrollClass = mode ? "darkScroll" : "scroll";


    return(
        <div className={header}>
            <Row>
                <Col xs={2}></Col>
                <Col xs={8}>
                    <header className={headerName}>
                        Josh Ryals
                    </header> 
                    <div className={menuClass}>
                        <Link className={scrollClass} activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                            About  |
                        </Link>
                        <Link className={scrollClass} activeClass="active" to="edu" spy={true} smooth={true} duration={500}>
                            Education  |
                        </Link>
                        <Link className={scrollClass} activeClass="active" to="projects" spy={true} smooth={true} duration={500}>
                            Projects  |
                        </Link>
                        <Link className={scrollClass} activeClass="active" to="interests" spy={true} smooth={true} duration={500}>
                            Involvement
                        </Link>
                    </div> 
                </Col >
                <Col xs={2}>
                    <button onClick={() => setMode(!mode)} className="modeButton">
                        {mode ? "🌙" : "☀️"}
                    </button>
                </Col>
            </Row>      
        </div>
    )
}



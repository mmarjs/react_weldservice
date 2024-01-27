import React, {useEffect, useState} from 'react';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import './style.scss';

import Logo from '../../assets/images/logo.png';

import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import {useSelector} from "react-redux";
import {selectLead} from "../../../../reducers/leadDataManager";
import {useParams} from "react-router-dom";

const MainNav = () => {
    const lead = useSelector(selectLead);
    const leadInfo = lead[0];

    const { leadId } = useParams();
    const urlBase = `/${leadId}`;

    useEffect( () =>{
        document.title = `${leadInfo.company_name} | Professional Welding Services in ${leadInfo.big_city} and surrounding areas`;
    }, []);

    const checkIfActive = (given) => {
        let loc = window.location.pathname.split('/')[2];
        loc = loc === undefined ? "" : loc;
        return loc === given;
    };
    const checkIfServiceActive = (given) => {
        let loc = window.location.pathname.split('/')[3];
        loc = loc === undefined ? "" : loc;
        return loc === given;
    };
    return (
        <div className="nav-container container">
            <Navbar expand="lg" bg="dark" variant="light">
                <Navbar.Brand href={`${urlBase}/`}>
                    <img alt={leadInfo.company_name} className="logo-top" src={Logo} />
                    <p>{leadInfo.company_name}</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <FormatAlignRightIcon/>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href={`${urlBase}/`} className={checkIfActive('') ? 'active' : ''}>Home</Nav.Link>
                        <Nav.Link href={`${urlBase}/about`} className={checkIfActive('about') ? 'active' : ''}>About</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown" className={checkIfActive('service') ? 'active' : ''}>
                            <NavDropdown.Item href={`${urlBase}/services/aluminium`} className={checkIfServiceActive('aluminium') ? 'active' : ''}>Aluminium Welding</NavDropdown.Item>
                            <NavDropdown.Item href={`${urlBase}/services/laser`} className={checkIfServiceActive('laser') ? 'active' : ''}>Laser Welding</NavDropdown.Item>
                            <NavDropdown.Item href={`${urlBase}/services/mobile`} className={checkIfServiceActive('mobile') ? 'active' : ''}>Mobile Welding</NavDropdown.Item>
                            <NavDropdown.Item href={`${urlBase}/services/plasma`} className={checkIfServiceActive('plasma') ? 'active' : ''}>Plasma Cutting</NavDropdown.Item>
                            <NavDropdown.Item href={`${urlBase}/services/stainless`} className={checkIfServiceActive('stainless') ? 'active' : ''}>Stainless Steel Welding</NavDropdown.Item>
                            <NavDropdown.Item href={`${urlBase}/services/welding`} className={checkIfServiceActive('welding') ? 'active' : ''}>Welding and Fabrication Services</NavDropdown.Item>

                        </NavDropdown>
                        <Nav.Link href={`${urlBase}/gallery`} className={checkIfActive('gallery') ? 'active' : ''}>Gallery</Nav.Link>
                        <Nav.Link href={`${urlBase}/faq`} className={checkIfActive('faq') ? 'active' : ''}>FAQ</Nav.Link>
                        <Nav.Link href={`${urlBase}/get-a-quote`} className={checkIfActive('get-a-quote') ? 'active' : ''}>Get a Quote</Nav.Link>
                        <Nav.Link href={`${urlBase}/contact`} className={checkIfActive('contact') ? 'active' : ''}>Contacts</Nav.Link>
                        <Nav.Link href={`tel:${leadInfo.phone_number}`}>| <span>{leadInfo.phone_number}</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};

export default MainNav;

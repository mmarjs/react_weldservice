import {Fade} from "react-reveal";
import React from "react";
import {Col, Container, Nav, NavDropdown, Row} from "react-bootstrap";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import BuildIcon from "@material-ui/icons/Build";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ScrollUpButton from "react-scroll-up-button";

import './styles.scss';
import {useSelector} from "react-redux";
import {selectLead} from "../../../../reducers/leadDataManager";
import {useParams} from "react-router-dom";

const Footer = () => {
    const lead = useSelector(selectLead);
    const leadInfo = lead[0];

    const { leadId } = useParams();
    const urlBase = `/${leadId}`;
    return (
        <footer>
            <Fade bottom>
                <Container className="footerContent">
                    <Row>
                        <Col xs={12} sm={6} md={3}>
                            <h3><ContactSupportIcon/> Contact Us</h3>
                            <ul className="contact-info">
                                <li><PhoneInTalkOutlinedIcon/> {leadInfo.phone_number}</li>
                                <li><MailOutlineIcon/> {leadInfo.email}</li>
                                <li><RoomOutlinedIcon/> {leadInfo.street_address}, {leadInfo.city}, {leadInfo.state}</li>
                            </ul>
                            <ul className="social-info">
                                <li><a href="/"><FacebookIcon/></a></li>
                                <li><a href="/"><TwitterIcon/></a></li>
                                <li><a href="/"><LinkedInIcon/></a></li>
                                <li><a href="/"><YouTubeIcon/></a></li>
                                <li><a href="/"><InstagramIcon/></a></li>
                                <li><a href="/"><PinterestIcon/></a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <h3><BuildIcon/> Our Services</h3>
                            <ul className="services-info">
                            <li><Nav.Link href={`${urlBase}/services/aluminium`}>Aluminium Welding</Nav.Link></li>
                                <li><Nav.Link href={`${urlBase}/services/laser`}>Laser Welding</Nav.Link></li>
                                <li><Nav.Link href={`${urlBase}/services/mobile`}>Mobile Welding</Nav.Link></li>
                                <li><Nav.Link href={`${urlBase}/services/plasma`}>Plasma Cutting</Nav.Link></li>
                                <li><Nav.Link href={`${urlBase}/services/stainless`}>Stainless Steel Welding</Nav.Link></li>
                                <li><Nav.Link href={`${urlBase}/services/welding`}>Welding and Fabrication Services</Nav.Link></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <h3><QueryBuilderIcon/> Working Hours</h3>
                            <ul className="hours-info">
                                <li>Mon: 9:00 - 17:00</li>
                                <li>Tue: 9:00 - 17:00</li>
                                <li>Wed: 9:00 - 17:00</li>
                                <li>Thu: 9:00 - 17:00</li>
                                <li>Fri: 9:00 - 17:00</li>
                                <li>Sat: Closed</li>
                                <li>Sun: Closed</li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <h3><AccountTreeIcon/> Site Map</h3>
                            <ul className="pages-info">
                                <li><Nav.Link href={`${urlBase}/`}>Home</Nav.Link></li>
                                <li><Nav.Link href={`${urlBase}/about`}>About Us</Nav.Link></li>
                                <li><Nav.Link href={`${urlBase}/gallery`}>Gallery</Nav.Link></li>
                                <li><Nav.Link href={`${urlBase}/faq`}>FAQ</Nav.Link></li>
                                <li><Nav.Link href={`${urlBase}/get-a-quote`}>Get a Quote</Nav.Link></li>
                                <li><Nav.Link href={`${urlBase}/contact`}>Contacts</Nav.Link></li>
                            </ul>
                        </Col>
                    </Row>
                    <hr/>
                    <div className="copyright-info">
                        <p>{leadInfo.company_name} {new Date().getFullYear()} Copyright | Powered by <a href="https://biramedia.com">biramedia.com</a></p>
                    </div>
                </Container>
            </Fade>
            <ScrollUpButton/>
        </footer>
    )
};


export default Footer;

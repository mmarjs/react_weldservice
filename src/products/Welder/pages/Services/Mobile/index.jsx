import React, {useEffect} from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";
import './styles.scss';
import {Helmet} from "react-helmet";

import {useSelector} from "react-redux";
import {selectLead} from "../../../../../reducers/leadDataManager";
import {useParams} from "react-router-dom";
import ImgBox1 from "../../../assets/images/furniture.jpg";

const setStyle={
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
};

const CounterTopInstallation = () => {
    const lead = useSelector(selectLead);
    const leadInfo = lead[0];

    const { leadId } = useParams();
    const urlBase = `/${leadId}`;
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>{leadInfo.company_name} | Mobile Welding</title>
                <meta name="description" content={`Mobile Welding Service`} />
            </Helmet>
            <div style={setStyle}>
                <MainNav/>
                <div className="service-body-wrap">
                    <Container>
                        <div className="main-title">
                            <h1>Mobile Welding</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2><span>Welding It Right on Any Site in {leadInfo.city}</span></h2>
                                    <p>
                                    Since our inception, {leadInfo.company_name} has garnered the reputation of being a leader in the field of providing custom-made mobile welding solutions in {leadInfo.city}. We feature a full-end workshop facility having a team of the most professional and skilled welders in Canada. Our team of certified and licensed welders in {leadInfo.city} have access to state-of-the-art mobile welding equipment and tools 
                                    </p>

                                    <p>At {leadInfo.company_name}, we specialize in:</p>
                                    <ul>
                                        <li>Heavy equipment repair</li>
                                        <li>Mobile welding and fabrication</li>
                                        <li>Manufacturing plant, industrial, and commercial welding</li>
                                        <li>Pressure vessels, boilers, and piping systems</li>
                                        <li>Structural and construction welding and fabrication</li>
                                        <li>Architectural and artisanal welding</li>
                                    </ul>

                                    <h3>Our Comprehensive Range of Mobile Welding Services in {leadInfo.city}</h3>
                                
                                    <p>
                                    At {leadInfo.company_name}, we are experts in delivering a wide range of mobile welding services –right form artisanal welding to industrial welding, custom metal fabrication, and so more. We are capable of welding it all –with no job too big or too small. From commercial buildings to construction welding repairs, beam installation, piping work, and so more –you can rely on {leadInfo.company_name} for a professional and safe experience throughout. 
                                    </p>
                                    <p>
                                    In case of emergency, we deliver access to our impressive fleet of mobile welding trucks which are always available at your service. Our mobile welding team is committed to delivering mobile services on the road as per your requirement and convenience. At {leadInfo.company_name}, our on-site welding experts are well-versed and highly professional. This implies that we are capable of handling welding and fabrication jobs off-site as well.
                                    </p>
                                    <p>We are committed to offering you efficient and fast services round-the-clock. We assure that your project deadlines remain intact. Through our mobile welding services, we aim at bringing ideas, prototypes, and models to right execution for the best outcomes. Reach out to us now for hiring emergency mobile welding services. </p>

                                    <hr/>
                                    <p><strong>Call us today to book an appointment with our experts at: <a href={leadInfo.phone_number}>{leadInfo.phone_number}</a></strong></p>
                                    <div className="">
                                        <div className="button-blue">
                                            <a href={`${urlBase}/contact`}>Contact us right away to know more!</a>
                                        </div>
                                    </div>
                                    </Fade>
                            </Col>
                            <Col md={4}>
                                <Fade>
                                    <ServicesSider/>
                                </Fade>
                                <img src={ImgBox1} alt="" style={{'width': '100%', 'marginTop': '5px'}}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <BlueQuoteStripe/>
                <Footer/>
            </div>
        </div>
    );
};

export default CounterTopInstallation;

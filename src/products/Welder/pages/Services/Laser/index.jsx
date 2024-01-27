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
import ImgBox1 from "../../../assets/images/inner_15.jpg";

const setStyle={
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
};

const SinkAndFaucetInstallation = () => {
    const lead = useSelector(selectLead);
    const leadInfo = lead[0];

    const { leadId } = useParams();
    const urlBase = `/${leadId}`;
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>{leadInfo.company_name} | Laser Welding</title>
                <meta name="description" content={`Laser Welding`} />
            </Helmet>
            <div style={setStyle}>
                <MainNav/>
                <div className="service-body-wrap">
                    <Container>
                        <div className="main-title">
                            <h1>Laser Welding</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2><span>Precision Laser Welding Solutions in {leadInfo.city} for Different Materials</span></h2>

                                    <p>
                                    {leadInfo.company_name} is one of the leading laser welding companies in {leadInfo.city}. We deliver access to state-of-the-art laser welding solutions to companies in the manufacturing, aerospace, automotive, defence, and mining sectors of the nation.
                                    </p>
                                    <p>
                                    At {leadInfo.company_name}, our expertise in laser cutting and welding covers a wide spectrum of laser joining technologies –right from joint design to inert gas shielding, plasma control, and weldability of materials. Our overall experience in the field of laser-material interaction and bespoke material science helps us in exercising precise control of energy, pulse shape, and laser pulse duration for producing spot welds and sound seam. 
                                    </p>

                                    <h3><span>Expertise in Laser Welding Services in {leadInfo.city}</span></h3>

                                    <p>
                                    {leadInfo.company_name} has a team of dedicated welding experts delivering professional laser welding services in {leadInfo.city}. We offer a comprehensive range of laser cutting and welding services –ranging from laser tube welding featuring rotary chucks, hermetic welding, laser transmission welding for thermo plastics, and laser welding for dissimilar materials. 

                                    </p>

                                    <p>
                                    Amongst others, highly conductive and reflective materials (copper, aluminium, and other alloys), titanium, steel, high melting point metals (tantalum, tungsten, and molybdenum) and even thermoplastic materials can be welded by our team of professionals. 
                                    </p>

                                    <p>
                                    At {leadInfo.company_name}, we are always committed to making things smarter, faster, and highly efficient. Therefore, our team keeps working on collaborative and innovative projects to include materials to any machined system. As a major part of our welding solutions, we also offer access to upgrades and repairs, along with equipment warranties. 
                                    </p>

                                    <p>You can trust our team of laser welding experts to get access to low-cost accessories for different types of high-tech equipment. As you enlist yourself with our {leadInfo.city} laser welding services, you can easily reduce your overall expenses. Contact us now to know more!</p>
                                    
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
                                    <img src={ImgBox1} alt="" style={{'width': '100%', 'marginTop': '5px'}}/>
                                </Fade>
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

export default SinkAndFaucetInstallation;

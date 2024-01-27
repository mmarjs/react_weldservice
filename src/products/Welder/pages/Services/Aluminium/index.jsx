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
import ImgBox1 from "../../../assets/images/inner_16.jpg";

const setStyle={
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
};

const TileInstallation = () => {
    const lead = useSelector(selectLead);
    const leadInfo = lead[0];

    const { leadId } = useParams();
    const urlBase = `/${leadId}`;
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>{leadInfo.company_name} | Aluminum Welding</title>
                <meta name="description" content={`Aluminum Welding Service`} />
            </Helmet>
            <div style={setStyle}>
                <MainNav/>
                <div className="service-body-wrap">
                    <Container>
                        <div className="main-title">
                            <h1>Aluminum Welding</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2><span>Aluminum Welding Services in {leadInfo.city} from the Experts</span></h2>
                                    <p>
                                    The overall demand for aluminum as a fabrication metal has skyrocketed in the recent times. Therefore, {leadInfo.company_name} is committed to delivering its clients with bespoke aluminum welding services in {leadInfo.city}. We are a specialized welding service provider working with industry experts and state-of-the-art welding equipment and technology to deliver a comprehensive range of aluminum welding services in {leadInfo.city}. 
                                    </p>
                                    <p>
                                    Whether you wish to go for MIG or TIG aluminum welding, we have a versatile range of services to suit all your requirements. At {leadInfo.company_name}, we have an excellent team of welding experts for handling AC aluminum welding effectively. As we have ample experience in the given field, we handle all types of aluminum welding requirements. We work with experienced aluminum welders to deliver the highest level of excellence with our services.
                                    </p>
                                    <h3>Affordable Aluminum Welding Services in {leadInfo.city}</h3>
                                    <p>
                                    Whether you need welding services for a thick or thin aluminum sheet with AC, we make use of revolutionary aluminum welding techniques. You can make use of our unparalleled welding strategies or services to bring about amazing strength as well as durability to the respective joints. We offer our clients in {leadInfo.city} with our versatile welding services. 
                                    </p>
                                    <p>
                                    At {leadInfo.company_name}, we are capable of performing a wide range of welding works including stick aluminum welding, aluminum spool gun welding, and so more. 
                                    </p>

                                    <p>
                                    Spanning different types of aluminum welding, we are capable of handling all types of projects for you. In addition to MIG aluminum welding, we also offer expertise in spot welding, AC welding, and several other types. When you provide your welding requirements to our team, we can help you with every aspect of the welding process. 
                                    </p>
                                    <p>At {leadInfo.company_name}, we are proficient in deliver budget-friendly welding services to our clients. Contact us now to know more!</p>

                                
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

export default TileInstallation;

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
import ImgBox1 from "../../../assets/images/inner_14.jpg";

const setStyle={
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
};

const BacksplashInstallation = () => {
    const lead = useSelector(selectLead);
    const leadInfo = lead[0];

    const { leadId } = useParams();
    const urlBase = `/${leadId}`;
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>{leadInfo.company_name} | Stainless Steel Welding</title>
                <meta name="description" content={`Stainless Steel Welding Service`} />
            </Helmet>
            <div style={setStyle}>
                <MainNav/>
                <div className="service-body-wrap">
                    <Container>
                        <div className="main-title">
                            <h1>Stainless Steel Welding</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2><span>World-class Stainless Steel Welding Services in {leadInfo.city}</span></h2>

                                    <p>
                                    Are you searching for the most professional steel welding service provider in {leadInfo.city}? {leadInfo.company_name} has got you covered. Our comprehensive range of stainless steel welding services is executed with the help of advanced strategies. It would ultimately depend on the material’s finish, type, and thickness. 
                                    </p>

                                    <p>
                                    Stainless steel welding is one of the most sought-after services in {leadInfo.city} in the given domain. This is because the modern manufacturing units, machineries, and industries extensively make use of steel for achieving the purpose. With our impressive tactics for stainless steel welding, we always deliver the assurance that our clients are satisfied with us. 

                                    </p>

                                    <h3>Precision Stainless Steel Welding in {leadInfo.city} for Accurate Results</h3>
                                    <p>
                                    Stainless steel welding in {leadInfo.city} is one of our core services at {leadInfo.company_name}. With our bespoke stainless steel welding services in {leadInfo.city}, we remain focused on the weld joints to deliver optimum results. We are capable of welding any steel material –ranging from industrial to household equipment.
                                    </p>

                                    <p>With the help of our advanced stainless steel welding services in {leadInfo.city}, we ensure the delivery of stronger joints capable of withstanding harsh weather conditions. As far as welding steel is concerned, we make use of impressive solutions to deliver the desired outputs to our clients. </p>
                                    <p>One of the core aspects that differentiate us from others is that we pay utmost attention to every single detail. {leadInfo.company_name} is a pioneering stainless steel welder and fabricator in {leadInfo.city}. Therefore, we deliver the assurance of precision stainless steel material fabrication products & services. Whether you require a single part or an entire batch of parts, we offer access to the best-in-class metal fabrication services.  </p>
                                    <p>To know more about our stainless steel welding solutions, contact our team of welding experts now!</p>

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

export default BacksplashInstallation;

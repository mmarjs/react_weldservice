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
import ImgBox1 from "../../../assets/images/inner_17.jpg";

const setStyle={
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
};

const LightFixtureInstallation = () => {
    const lead = useSelector(selectLead);
    const leadInfo = lead[0];

    const { leadId } = useParams();
    const urlBase = `/${leadId}`;
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>{leadInfo.company_name} | Welding and Fabrication Services</title>
                <meta name="description" content={`Welding and Fabrication Services`} />
            </Helmet>
            <div style={setStyle}>
                <MainNav/>
                <div className="service-body-wrap">
                    <Container>
                        <div className="main-title">
                            <h1>Welding and Fabrication Services</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2><span>Professional Welding and Fabrication Services in {leadInfo.city} for an Assortment of Metals</span></h2>

                                    <p>
                                    At {leadInfo.company_name}, we are well-equipped to deliver a wide range of welding and fabrication services in {leadInfo.city}. Our comprehensive services include welding, bending, water-jet cutting, and laser cutting. We have a full-end range of state-of-the-art welding and fabrication equipment. We are certified to meet all international standards of the industry.
                                    </p>
                                    <p>
                                    At {leadInfo.company_name}, we strive to not just meet, but to also exceed your overall expectations. Our welding and fabrication experts in {leadInfo.city} perform in-depth, thorough quality assurance and inspections for ensuring that all meticulous expectations and standards are followed. We combine macro-tech, in-house inspections, visual inspections, and an extensive network of advanced testing facilities for coming up with a detailed checklist of your products. 
                                    </p>

                                    <h3><span>Top-quality Welding Services in {leadInfo.city} for Different Metals</span></h3>

                                    <p>
                                    {leadInfo.company_name} offers a full spectrum of advanced welding services as per the respective CWB (Canadian Welding Bureau) for welding while following the accordance of the CSA code or Canadian Standards Association. Whether your project in {leadInfo.city} involved aluminium, carbon steel, or stainless steel, we feature the right knowledge as well as tools to help you see through. We also boast the necessary capabilities for welding a wide range of exotic metals.
                                    </p>
                                    <ul>
                                        <li>Carbon Steel</li>
                                        <li>Aluminium</li>
                                        <li>Stainless steel</li>
                                    </ul>
                                    <p>
                                    In addition to welding, our expert team at {leadInfo.company_name} also has the capability to deliver access to a wide range of fabrication processes based on the specific requirements of the clients. Waterjet cutting, laser cutting, and bending are all carried out in-house by experienced and certified team. 

                                    </p>
                                    <p>At {leadInfo.company_name}, we understand the importance of top-quality products. Therefore, we work with our clients to ensure that all welding and fabrication needs are met properly. Contact us now to know more!</p>

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

export default LightFixtureInstallation;

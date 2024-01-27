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
import ImgBox2 from "../../../assets/images/inner_18.jpg";

const setStyle={
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
};

const KitchenCabinets = () => {
    const lead = useSelector(selectLead);
    const leadInfo = lead[0];

    const { leadId } = useParams();
    const urlBase = `/${leadId}`;
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>{leadInfo.company_name} | Plasma Cutting</title>
                <meta name="description" content={`Plasma Cutting Service`} />
            </Helmet>
            <div style={setStyle}>
                <MainNav/>
                <div className="service-body-wrap">
                    <Container>
                        <div className="main-title">
                            <h1>Plasma Cutting</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2><span>Professional Plasma Cutting Services in {leadInfo.city} from Industry Experts</span></h2>

                                    <p>
                                    At {leadInfo.company_name}, we take all types of custom or standard plasma cutting projects a level up with our top-notch quality procedures and bespoke solutions. Through our revolutionary plasma cutting services in {leadInfo.city}, we are committed to addressing all types of industrial purposes. 

                                    </p>

                                    <p>
                                    With the help of the innovative technology of plasma cutting, we combine our unparalleled fabrication process with excellent customer services for making sure that your project gets completed with utmost satisfaction.
                                    </p>

                                    <h3>Accelerating the Process of Plasma Cutting in {leadInfo.city}</h3>
                                    <p>
                                    The process of plasma cutting is widely utilized in multiple industries –including architecture, automotive, military, and so more. Plasma cutting is known to be highly versatile when it comes to cutting different metals like copper, aluminum, steel, and others. Therefore, we offer access to an innovative range of plasma cutting solutions tailor-made to suit the specific requirements of your project.
                                    </p>

                                    <p>
                                    At {leadInfo.company_name}, we specialize in processing all types of sheet metals for the technique of plasma cutting. Through our bespoke services, we help in mitigating the overall costs due to overtime and defects. Our unmatched plasma cutting process is engineered to take care of all possible customizations while scaling on demand at the same time. 
                                    </p>
                                    <p>Our plasma cutting services extend to (but not limited to) different parts of {leadInfo.city} and beyond. We deliver top-class plasma cutting services to different industries across {leadInfo.city} with utmost efficiency and quick turnaround time. 
                                    </p>
                                    <p>We deliver access to the revolutionary plasma cutting technology featuring higher cutting speeds -10 times higher than other technologies. Therefore, our experts make the entire process fast and seamless. To know more about in-depth plasma cutting services in {leadInfo.city} for your requirements, contact our team of industry experts now!</p>
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
                                <img src={ImgBox2} alt="" style={{'width': '100%', 'marginTop': '5px'}}/>
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

export default KitchenCabinets;

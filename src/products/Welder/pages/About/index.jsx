import React, {useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import './styles.scss';
import MainNav from "../../components/MainNav";
import BlueQuoteStripe from "../../components/BlueQuoteStripe";
import Footer from "../../components/Footer";

import Img1 from '../../assets/images/gallery_about-us.jpg';
import Img2 from '../../assets/images/guarantee-customer-satisfaction.png';

import ServiceBoxes  from '../../components/ServiceBoxes';
import {useSelector} from "react-redux";
import {selectLead} from "../../../../reducers/leadDataManager";
import {useParams} from "react-router-dom";

import Helmet from "react-helmet";
const About = () => {
    const lead = useSelector(selectLead);
    const leadInfo = lead[0];

    const { leadId } = useParams();
    const urlBase = `/${leadId}`;
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>{leadInfo.company_name} | About Us</title>
                <meta name="description" content={`About ${leadInfo.company_name}`} />
            </Helmet>
            <MainNav/>
            <Container style={{'margin' : '50px  auto'}}>
                <div className="main-title">
                    <h1>About Us</h1>
                </div>
                <Row>
                    <Col md={4}>
                        <div className="image-wrap-right">
                            <img src={Img1} style={{'width' : '100%'}} alt=""/>
                        </div>
                    </Col>
                    <Col md={8}>
                        <h2>Delivering Professional Welding Services in {leadInfo.city}</h2>
                        <p>
                        {leadInfo.company_name} is a leading welding company in {leadInfo.city} providing top-quality welding, repair, and metal fabrication services across the area. At {leadInfo.city}, we have an impressive full-service, state-of-the-art welding workshop delivering access to all sizes and scales of metal fabrication projects for our clients. Our mobile welding services in {leadInfo.city} can send professional welders and fabricators to your location instantly.
                        </p>
                        <p>
                        At {leadInfo.company_name}, we are committed to helping out clients with bespoke welding services on the go. We are, therefore, available round-the-clock for your assistance through our comprehensive range of welding services in and around {leadInfo.city}.
                        </p>
                        <p>
                        From a newly-engineered part to construction welding, we are capable of making anything out of the desired metal of your choice. You can bring us your drawings, ideas, CAD files, or prototypes and we deliver manufacturing services on demand. We will build the desired model and deliver it you as per the deadline. Contact us today to get professional help with your project. 
                        </p>
                        <h3>{leadInfo.company_name} Welding Difference</h3>
                        <p>
                        At {leadInfo.company_name}, no job is too big or too small for our professional team. From the fabrication of industrial pipe fitting to welding ornate materials for residential complexes in {leadInfo.city}, we take immense pride in our craftsmanship and work. Moreover, we are also committed to completing the work on time with utmost safety and quality as the guiding principles.
                        </p>
                    
                        <p>With an experience of over a decade, we have a team of highly qualified and certified welding experts in {leadInfo.city}. Over years, we have become the leading choice for people searching for welding services in & around {leadInfo.city}.</p>
                        <p>We are qualified and experienced team of welding experts having expertise in all types of welding techniques and tools. Contact us now to know more!</p>
                        <hr/>
                        <p><strong>Call us today to book an appointment with our experts at: <a href={leadInfo.phone_number}>{leadInfo.phone_number}</a></strong></p>

                        <img src={Img2} className="customer-satisfaction" alt=""/>
                        <div className="button-blue">
                            <a href={`${urlBase}/get-a-quote`}>Request Service</a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container style={{margin: '50px auto'}}>
                <div className="main-title">
                    <h2>Our Services</h2>
                </div>
                <ServiceBoxes/>
            </Container>

            <BlueQuoteStripe/>
            <Footer/>
        </div>
    )
};

export default About;

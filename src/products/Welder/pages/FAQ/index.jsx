import React, {useEffect} from 'react';
import {Container, Row, Col, Accordion, Card} from 'react-bootstrap';
import './styles.scss';
import MainNav from "../../components/MainNav";
import BlueQuoteStripe from "../../components/BlueQuoteStripe";
import Footer from "../../components/Footer";
import ServicesSider from "../../components/ServicesSider";
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import {useSelector} from "react-redux";
import {selectLead} from "../../../../reducers/leadDataManager";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";

const setStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
const FAQ = (props) => {
    const lead = useSelector(selectLead);
    const leadInfo = lead[0];

    const { leadId } = useParams();
    const urlBase = `/${leadId}`;

    return (
        <div className="page-wrapper">
            <Helmet>
                <title>{leadInfo.company_name} | FAQs</title>
                <meta name="description" content={`FAQs`} />
            </Helmet>
            <div style={setStyle}>
                <MainNav/>
                <div className="faq-body-wrap">
                    <Container>
                        <div className="main-title">
                            <h1>Frequently Asked Questions</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Accordion defaultActiveKey="0">
                                    <Card><Accordion.Toggle as={Card.Header} eventKey="0">
                                        <LiveHelpIcon className="svgIcon" />
                                        What are welding standards in Canada?

                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <QuestionAnswerIcon className="svgIcon" />
                                                The art of welding is required to be governed by a set of standards and codes responsible for providing guidelines, specifications, certifications, and requirements. In Canada, the key standards for establishing guidelines for welding come under the CSA Standards W59 and W47.1. The given standards are responsible for governing different aspects of the welding process in Canada –including welding procedures, welding quality, and welders. The CWB or Canadian Welding Bureau Group is responsible for overlooking the certification process of inspection organizations, companies, welders, and welding equipment.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                                <Accordion defaultActiveKey="0">
                                    <Card><Accordion.Toggle as={Card.Header} eventKey="1">
                                        <LiveHelpIcon className="svgIcon" />
                                        What are different types of welding services for industrial fabrication in Canada?
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <QuestionAnswerIcon className="svgIcon" />
                                                {leadInfo.company_name} is committed to delivering a comprehensive range of welding services in {leadInfo.city}. Some of these include submerged arc welding, shielded metal arc welding, stainless steel welding, aluminum welding, and so more. To know more, contact our team of welding experts and get an instant quote right away.

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                                <Accordion defaultActiveKey="0">
                                    <Card><Accordion.Toggle as={Card.Header} eventKey="2">
                                        <LiveHelpIcon className="svgIcon" />
                                        What are welding safety precautions?

                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <QuestionAnswerIcon className="svgIcon" />
                                                Our experienced team of certified welding professionals take full notice of important welding safety during the execution of the welding process. Right from ensuring proper ventilation to making use of the right welding equipment, welding only in the firesafe area, protecting the entire body with the right safety gear, and so much more –our team is well-trained to undertake all possible safety measures.

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                                <Accordion defaultActiveKey="0">
                                    <Card><Accordion.Toggle as={Card.Header} eventKey="3">
                                        <LiveHelpIcon className="svgIcon" />
                                        What is the importance of safety in welding?

                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                                <QuestionAnswerIcon className="svgIcon" />
                                                Welders can experience a wide range of physical hazards during the welding process –right from cuts to eye damage, burns, or even crushed toes and fingers. Therefore, our team of certified welding experts in {leadInfo.city} takes care of the important welding safety measures to ensure the best outcomes. We make use of state-of-the-art welding technology and equipment to maximize safety. 

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                            </Col>
                            <Col md={4}>
                                <ServicesSider/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <BlueQuoteStripe/>
            <Footer/>
        </div>
    )
};

export default FAQ;

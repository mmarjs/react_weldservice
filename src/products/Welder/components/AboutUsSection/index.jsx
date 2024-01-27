import React from 'react';
import {Container, Col, Row, NavDropdown, Nav} from 'react-bootstrap';
import configs from '../../assets/configs';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import './styles.scss';
import {useSelector} from "react-redux";
import {selectLead} from "../../../../reducers/leadDataManager";
import {useParams} from "react-router-dom";

const AboutUsSection = () => {
    const lead = useSelector(selectLead);
    const leadInfo = lead[0];

    const { leadId } = useParams();
    const urlBase = `/${leadId}`;
    return (
        <div className='about-us-section-wrap'>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={6}>
                        <h3>Our Comprehensive Range of Construction Services in <span>{leadInfo.big_city}</span></h3>
                        <strong>Affordable Charges</strong>
                        <p>We charge sensible pricing for all our services and our prices are even competitive and reasonable.</p>

                        <strong>Quality Work</strong>
                        <p>Our staff have expertise in this domain and ensure to provide the quality work for all your precise demands.</p>

                        <strong>Renowned Company</strong>
                        <p>We are a renowned company for providing the best services to meet the various clients needs on-time.</p>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                        <h3>Why <span>Choose Us</span>?</h3>
                        <p>
                            At {leadInfo.company_name}, we are fully dedicated to ensuring ultimate customer satisfaction.
                            Here are some reasons to choose us:
                        </p>
                        <ul>
                            <li>Stress-Free Service</li>
                            <li>Quick turnaround time</li>
                            <li>Competitive pricing</li>
                            <li>Top-notch customer service</li>
                        </ul>
                        <div className="button-blue">
                            <a href={`tel:1${leadInfo.phone_number}`}><PhoneInTalkIcon/> For more information, give us a call!</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default AboutUsSection;

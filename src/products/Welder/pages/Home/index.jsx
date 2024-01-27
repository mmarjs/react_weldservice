import React, {useEffect} from 'react';
import {Fade, Slide} from 'react-reveal';
import './styles.scss';
import MainNav from "../../components/MainNav";
import {Col, Row} from 'react-bootstrap';

import Background from '../../assets/images/background.jpg';

import ImgSales1 from '../../assets/images/phone-ring.png';
import ImgSales2 from '../../assets/images/worenty.png';
import ImgSales3 from '../../assets/images/lisence.png';
import inner_blue_02 from '../../assets/images/inner_blue_02.jpg';
import inner_blue_03 from '../../assets/images/inner_blue_03.jpg';

import AboutUsSection from "../../components/AboutUsSection";
import BlueQuoteStripe  from '../../components/BlueQuoteStripe';
import ServiceBoxes  from '../../components/ServiceBoxes';

import Footer from '../../components/Footer';
import {useSelector} from "react-redux";
import {selectLead} from "../../../../reducers/leadDataManager";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";

const setStyle = {
    backgroundImage: "linear-gradient(rgba(0.5, 0.5, 0.5, 0.5), rgba(0.5, 0.5, 0.5, 0.5)),url(" + Background + ")"
};
const Home = (props) => {
    const lead = useSelector(selectLead);
    const leadInfo = lead[0];

    const { leadId } = useParams();
    const urlBase = `/${leadId}`;

    return (
        <div className="page-wrapper">
            <Helmet>
                <title>{leadInfo.company_name} | Home</title>
                <meta name="description" content={`Welding Services`} />
            </Helmet>
            <div style={setStyle} className="page-wrapper-content">
                <MainNav/>
                <div className="container">
                    <div className="header-wrapper">
                        <div style={{maxWidth: '600px'}} className="header-content">
                            <Fade left cascade>
                                <h1 className="">
                                Professional Welding Services in {leadInfo.city}
                                </h1>
                            </Fade>
                            <Fade>
                                <p className="">
                                {leadInfo.company_name} offers access to a professional range of welding services in {leadInfo.city} to suit all requirements.
                                </p>
                                <div className="">
                                    <div className="button-blue">
                                        <a href={`${urlBase}/get-a-quote`}>Request Service</a>
                                    </div>
                                    <div className="button-white">
                                        <a href={`${urlBase}/about`}>About Us</a>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <Fade left cascade>
                        <ServiceBoxes/>
                    </Fade>
                    <Fade bottom>
                        <div className="sales-line-section">
                            <div className="sales-line-box box-wrapper">
                                <div className="sales-line-box-img-wrap">
                                    <img src={ImgSales1} alt=""/>
                                </div>
                                <p>AVAILABLE 24 HOURS</p>
                            </div>
                            <div className="sales-line-box box-wrapper">
                                <div className="sales-line-box-img-wrap">
                                    <img src={ImgSales2} alt=""/>
                                </div>
                                <p>LICENSED & INSURED</p>
                            </div>
                            <div className="sales-line-box box-wrapper">
                                <div className="sales-line-box-img-wrap">
                                    <img src={ImgSales3} alt=""/>
                                </div>
                                <p>WARRANTY & MAINTENANCE</p>
                            </div>
                        </div>
                    </Fade>
                </div>

                <Fade bottom>
                    <div className="about-section">
                    <Slide left>
                        <div className="about-section-left">
                            <div className="about-section-left-content">
                                <h3>Who <span>We</span> Are</h3>
                                <p>
                                {leadInfo.company_name} is a full-service welding and metal fabrication service provider in {leadInfo.city}. We serve different types of metals and requirements of our clients to come up with the best-in-class welding solutions. We also deliver 24/7 mobile welding services for boosting customer satisfaction
                                </p>

                                <Row>
                                    <Col xs={12} sm={6}>
                                        <div className="about-section-left-content-point-wrap">
                                            <span>
                                                <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-13.478-6l.91 2h1.164l.92-2h-2.994zm2.995 6l-.704-3h-1.615l-.704 3h3.023z"/></svg>
                                            </span>
                                            <span>
                                                <h4>Service Experts</h4>
                                                <p>
                                                We have an expert team of welding professionals delivering high-end results.
                                                </p>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <div className="about-section-left-content-point-wrap">
                                            <span>
                                                <svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z"/></svg>
                                            </span>
                                            <span>
                                                <h4>Our Objective</h4>
                                                <p>
                                                We are committed to maximizing customer satisfaction through our bespoke services.
                                                </p>
                                            </span>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12} sm={6}>
                                        <div className="about-section-left-content-point-wrap">
                                            <span>
                                            <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.753 23c-.868 0-1.684-.338-2.297-.951l-10.602-11.174-.607.652-1.929 1.93-5.318-5.32 2.51-2.511.683.459c.026.015.171.086.304.086.054 0 .12-.008.215-.104.195-.195.312-.471.475-.854.323-.759.765-1.801 2.174-2.861 1.19-.897 2.66-1.352 4.367-1.352 2.713 0 5.107 1.163 5.208 1.212l-.341 1.891c-1.658.166-4.558.762-3.318 2.007l10.786 11.358c.6.602.937 1.417.937 2.284s-.337 1.683-.951 2.296c-.614.614-1.429.952-2.296.952zm-9.341-11.368l8.47 9.017c.444.443 1.28.458 1.753-.013.235-.236.366-.55.366-.883 0-.333-.13-.647-.367-.884l-8.457-9.002-1.765 1.765zm-8.585-3.495l2.492 2.493.021-.022c-.138-.558-.058-1.225.524-1.806.346-.346.777-.529 1.25-.529.651 0 1.307.34 2.004 1.039l.893.893 1.766-1.767-.915-.915c-1.171-1.172-1.027-2.24-.838-2.772.246-.689.807-1.258 1.661-1.695-.312-.036-.633-.057-.958-.057-1.264 0-2.329.319-3.165.949-.98.738-1.25 1.374-1.537 2.047-.212.5-.431 1.016-.901 1.485-.45.452-1.013.69-1.627.69-.227 0-.437-.032-.623-.08l-.047.047zm13.553-.619l3.336-3.296c.169-.17.443-.168.611 0 .169.17.169.442.001.611l-3.353 3.313.866.912 3.375-3.335c.168-.169.441-.168.611.001.168.168.169.441 0 .609l-3.392 3.352 1.011 1.064 3.679-3.637c.584-.582.875-1.346.875-2.11 0-.768-.293-1.537-.88-2.125-.585-.585-1.35-.877-2.114-.877-.766 0-1.53.293-2.114.877l-3.569 3.528 1.057 1.113zm-7.233 7.65l-4.127 3.993c-.229.229-.503.407-.79.558l-.58.302-1.025 2.146.833.833 2.101-1.07.301-.58c.151-.286.347-.545.574-.774l4.091-3.958-1.378-1.45z"/></svg>
                                            </span>
                                            <span>
                                                <h4>Our Clients</h4>
                                                <p>
                                                We value our clients across residential, commercial, and industrial domains to help us serve better.
                                                </p>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <div className="about-section-left-content-point-wrap">
                                            <span>
                                                <svg className="svgIcon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 24 24" clip-rule="evenodd"><path d="M13.403 24h-13.403v-22h3c1.231 0 2.181-1.084 3-2h8c.821.916 1.772 2 3 2h3v9.15c-.485-.098-.987-.15-1.5-.15l-.5.016v-7.016h-4l-2 2h-3.897l-2.103-2h-4v18h9.866c.397.751.919 1.427 1.537 2zm5.097-11c3.035 0 5.5 2.464 5.5 5.5s-2.465 5.5-5.5 5.5c-3.036 0-5.5-2.464-5.5-5.5s2.464-5.5 5.5-5.5zm0 2c1.931 0 3.5 1.568 3.5 3.5s-1.569 3.5-3.5 3.5c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5zm2.5 4h-3v-3h1v2h2v1zm-15.151-4.052l-1.049-.984-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.385zm6.151 1.052h-2v-1h2v1zm2-2h-4v-1h4v1zm-8.151-4.025l-1.049-.983-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.384zm8.151 1.025h-4v-1h4v1zm0-2h-4v-1h4v1zm-5-6c0 .552.449 1 1 1 .553 0 1-.448 1-1s-.447-1-1-1c-.551 0-1 .448-1 1z"/></svg>
                                            </span>
                                            <span>
                                                <h4>Our Primary Goal</h4>
                                                <p>
                                                Through our comprehensive welding services in {leadInfo.city}, we aim at serving a larger spectrum of clients in search for top-class welders.

                                                </p>
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </div>
                    </Slide>
                    <Slide right>
                        <div className="about-section-right" style={{backgroundImage: `linear-gradient(rgba(0.5, 0.5, 0.5, 0.5), rgba(0.5, 0.5, 0.5, 0.5)),url(${inner_blue_03})`}} >
                            <div className="about-section-right-content">
                                <h3>Delivering welding services with utmost excellence and professionalism</h3>
                            </div>
                        </div>
                    </Slide>
                </div>
                </Fade>

                <Fade bottom>
                    <div className="about-section">
                    <Slide left>
                        <div className="about-section-right" style={{backgroundImage: `linear-gradient(rgba(0.5, 0.5, 0.5, 0.5), rgba(0.5, 0.5, 0.5, 0.5)),url(${inner_blue_02})`}} >
                        </div>
                    </Slide>
                    <Slide right>
                        <div className="about-section-left">
                            <div className="about-section-left-content">
                                <h3>Why Choose Us?</h3>
                                <p>
                                At {leadInfo.company_name}, we are dedicated to maximizing client satisfaction through our professional results.

                                </p>

                                <ul>
                                    <li>Dedicated team of industry experts</li>
                                    <li>On-time project delivery</li>
                                    <li>24/7 availability</li>
                                    <li>Competitive pricing</li>
                                </ul>
                            </div>

                        </div>
                    </Slide>
                </div>
                </Fade>

                <BlueQuoteStripe/>
                <AboutUsSection/>
                <Footer/>
            </div>
        </div>
    )
};

export default Home;

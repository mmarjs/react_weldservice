import React, {useEffect} from 'react';
import {Fade } from 'react-reveal';
import './styles.scss';
import MainNav from "../../components/MainNav";
import {Col, Row } from 'react-bootstrap';

import Background from '../../assets/images/quote-bg.jpg';

import ImgSales1 from '../../assets/images/phone-ring.png';
import ImgSales2 from '../../assets/images/worenty.png';
import ImgSales3 from '../../assets/images/lisence.png';

import Footer from '../../components/Footer';
import GetAQuoteForm from "../../components/GetAQuoteForm";

import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import {useSelector} from "react-redux";
import {selectLead} from "../../../../reducers/leadDataManager";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";

const setStyle = {
    backgroundImage: "linear-gradient(rgba(0.5, 0.5, 0.5, 0.5), rgba(0.5, 0.5, 0.5, 0.5)),url(" + Background + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '85vh',
};
const GetAQuote = (props) => {
    const lead = useSelector(selectLead);
    const leadInfo = lead[0];

    const { leadId } = useParams();
    const urlBase = `/${leadId}`;
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>{leadInfo.company_name} | Get a Quote</title>
                <meta name="description" content={`Get a free quote`} />
            </Helmet>
            <div style={setStyle}>
                <MainNav/>
                <div className="container">
                    <div className="header-wrapper">
                        <div style={{maxWidth: '600px'}}>
                            <Fade left cascade>
                                <h1 title="get a quote">Get a Quote</h1>
                            </Fade>
                            <Fade>
                                <p className="">
                                    Are you interested in hiring our company services, and would like to get a quote for your job?
                                    Then get in touch with us using the form below, and we will get back to you shortly.
                                </p>
                            </Fade>
                        </div>
                    </div>
                    <Row  className="box-section">
                        <Col md={8} className="bg-white">
                            <h2>Fill out the form:</h2>
                            <svg id="svgIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 0l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-8.698 6.825l-1.439-.507 5.701-5.215 1.436.396-5.698 5.326zm3.262 4.287l-1.323-.565 4.439-4.503 1.32.455-4.436 4.613zm-4.083.387l-1.481-.507 8-7.89 1.437.397-7.956 8z"/></svg>
                            <GetAQuoteForm/>
                        </Col>
                        <Col md={4} className="bg-blue-regular">
                            <h2>Contact information</h2>
                            <div>
                                <div className="flex">
                                    <RoomOutlinedIcon/>
                                    <p>{leadInfo.street_address}, {leadInfo.city}, {leadInfo.state}</p>
                                </div>
                                <div className="flex">
                                    <PhoneInTalkOutlinedIcon/>
                                    <p>{leadInfo.phone_number}</p>
                                </div>
                                <div className="flex">
                                    <DraftsOutlinedIcon/>
                                    <p>{leadInfo.email}</p>
                                </div>
                            </div>
                            <ul className="social-wrap">
                                <li><a href="/"><FacebookIcon/></a></li>
                                <li><a href="/"><LinkedInIcon/></a></li>
                                <li><a href="/"><TwitterIcon/></a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Fade bottom>
                        <p className="text-center privacy-paragraph"><small>Your Data is always safe with us.
                            We will only contact you in conjunction with your inquiry and your details are stored securely in the meantime.</small></p>
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
                <Footer/>
            </div>
        </div>
    )
};

export default GetAQuote;

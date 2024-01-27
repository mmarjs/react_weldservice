import React, {useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './styles.scss';
import MainNav from "../../components/MainNav";
import {Fade} from "react-reveal";
import Footer from "../../components/Footer";
import GalleryLib from 'react-grid-gallery';
import {Helmet} from "react-helmet";
import configs from "../../assets/configs";

import img1 from '../../assets/images/gallery/img1.jpg';
import img2 from '../../assets/images/gallery/img2.jpg';
import img3 from '../../assets/images/gallery/img3.jpg';
import img4 from '../../assets/images/gallery/img4.jpg';
import img5 from '../../assets/images/gallery/img5.jpg';
import img6 from '../../assets/images/gallery/img6.jpg';
import img7 from '../../assets/images/gallery/img7.jpg';
import img8 from '../../assets/images/gallery/img8.jpg';
import img9 from '../../assets/images/gallery/img9.jpg';
import img10 from '../../assets/images/gallery/img10.jpg';

import thumbImg1 from '../../assets/images/gallery/thumbs/img1.jpg';
import thumbImg2 from '../../assets/images/gallery/thumbs/img2.jpg';
import thumbImg3 from '../../assets/images/gallery/thumbs/img3.jpg';
import thumbImg4 from '../../assets/images/gallery/thumbs/img4.jpg';
import thumbImg5 from '../../assets/images/gallery/thumbs/img5.jpg';
import thumbImg6 from '../../assets/images/gallery/thumbs/img6.jpg';
import thumbImg7 from '../../assets/images/gallery/thumbs/img7.jpg';
import thumbImg8 from '../../assets/images/gallery/thumbs/img8.jpg';
import thumbImg9 from '../../assets/images/gallery/thumbs/img9.jpg';
import thumbImg10 from '../../assets/images/gallery/thumbs/img10.jpg';
import ServicesSider from "../../components/ServicesSider";
import Brands from "../../components/Brands";
import BlueQuoteStripe from "../../components/BlueQuoteStripe";

import {useSelector} from "react-redux";
import {selectLead} from "../../../../reducers/leadDataManager";

const IMAGES = [
    {
        src: img1,
        thumbnail: thumbImg1,
        thumbnailWidth: 320,
        thumbnailHeight: 182
    },
    {
        src: img2,
        thumbnail: thumbImg2,
        thumbnailWidth: 320,
        thumbnailHeight: 182
    },
    {
        src: img3,
        thumbnail: thumbImg3,
        thumbnailWidth: 320,
        thumbnailHeight: 182
    },
    {
        src: img4,
        thumbnail: thumbImg4,
        thumbnailWidth: 320,
        thumbnailHeight: 182
    },
    {
        src: img5,
        thumbnail: thumbImg5,
        thumbnailWidth: 320,
        thumbnailHeight: 182
    },
    {
        src: img6,
        thumbnail: thumbImg6,
        thumbnailWidth: 320,
        thumbnailHeight: 182
    },
    {
        src: img7,
        thumbnail: thumbImg7,
        thumbnailWidth: 320,
        thumbnailHeight: 182
    },
    {
        src: img8,
        thumbnail: thumbImg8,
        thumbnailWidth: 320,
        thumbnailHeight: 182
    },
    {
        src: img9,
        thumbnail: thumbImg9,
        thumbnailWidth: 320,
        thumbnailHeight: 182
    },
    {
        src: img10,
        thumbnail: thumbImg10,
        thumbnailWidth: 320,
        thumbnailHeight: 182
    },
];



const Gallery = (props) => {
    const lead = useSelector(selectLead);
    const leadInfo = lead[0];
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>{leadInfo.company_name} | Gallery</title>
                <meta name="description" content={`Gallery`} />
            </Helmet>
            <div>
                <MainNav/>
                <div className="gallery-body-wrap">
                    <Container>
                        <div className="main-title">
                            <h1>Gallery</h1>
                        </div>
                        <Row>
                            <Col sm={8} md={8}>
                                <Fade>
                                    <GalleryLib images={IMAGES}/>
                                </Fade>
                            </Col>
                            <Col sm={4} md={4}>
                                <Fade>
                                    <ServicesSider/>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <BlueQuoteStripe/>
                <Footer/>
            </div>
        </div>
    )
};

export default Gallery;

import React from 'react';
import ImgBox1 from "../../assets/images/inner_11.jpg";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ImgBox2 from "../../assets/images/inner_12.jpg";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import ImgBox3 from "../../assets/images/inner_13.jpg";
import MapIcon from '@material-ui/icons/Map';

import BubbleChartIcon from '@material-ui/icons/BubbleChart';

import './styles.scss'
import {useSelector} from "react-redux";
import {selectLead} from "../../../../reducers/leadDataManager";
import {useParams} from "react-router-dom";

const ServiceBoxes = () => {
    const lead = useSelector(selectLead);
    const leadInfo = lead[0];

    const { leadId } = useParams();
    const urlBase = `/${leadId}`;

    return (
        <div className="boxes-section">
            <div className="box-wrapper">
                <div className="box-thumb">
                    <img src={ImgBox2} alt=""/>
                </div>
                <div className="box-icon"><BubbleChartIcon/></div>
                <div className="box-content">
                    <h2>Welding & Fabrication</h2>
                    <p>Boosting industrial excellence with welding and fabrication solutions</p>
                    <div className="box-btn"><a href={`${urlBase}/services/welding`}>Read More</a></div>
                </div>
            </div>
            <div className="box-wrapper">
                <div className="box-thumb">
                    <img src={ImgBox3} alt=""/>
                </div>
                <div className="box-icon"><BubbleChartIcon/></div>
                <div className="box-content">
                    <h2>Metal Welding</h2>
                    <p>We deliver metal welding services for different types of metals</p>
                    <div className="box-btn"><a href={`${urlBase}/services/stainless`}>Read More</a></div>
                </div>
            </div>
            <div className="box-wrapper">
                <div className="box-thumb">
                    <img src={ImgBox1} alt=""/>
                </div>
                <div className="box-icon"><BubbleChartIcon/></div>
                <div className="box-content">
                    <h2>Plasma Cutting</h2>
                    <p>Based on client’s requirements, we ensure top-notch plasma cutting</p>
                    <div className="box-btn"><a href={`${urlBase}/services/plasma`}>Read More</a></div> 
                </div>
            </div>
        </div>
    )
};

export default ServiceBoxes

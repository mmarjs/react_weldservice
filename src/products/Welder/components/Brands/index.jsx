import React from "react";
import './styles.scss';

import brand1 from '../../assets/images/brands/amana.png';
import brand2 from '../../assets/images/brands/american_standard.png';
import brand3 from '../../assets/images/brands/aprilaire.png';
import brand4 from '../../assets/images/brands/arcoaire.png';
import brand5 from '../../assets/images/brands/bryant.png';
import brand6 from '../../assets/images/brands/carrier.png';
import brand7 from '../../assets/images/brands/ge.png';
import brand8 from '../../assets/images/brands/goodman.png';
import brand9 from '../../assets/images/brands/honeywell.png';
import brand10 from '../../assets/images/brands/lennox.png';
import brand11 from '../../assets/images/brands/maytag.png';
import brand12 from '../../assets/images/brands/payne.png';
import brand13 from '../../assets/images/brands/rheem.png';
import brand14 from '../../assets/images/brands/ruud.png';
import brand15 from '../../assets/images/brands/tempstar.png';
import brand16 from '../../assets/images/brands/trane.png';
import brand17 from '../../assets/images/brands/york.png';
import {Fade} from "react-reveal";

const Brands = () => {
    return (
        <div className="brands-section">
                <Fade>
                        <h2>We service all <span>major brands of A/C</span> and heating units.</h2>
                </Fade>
                <Fade bottom>
                        <ul className="brands-list">
                            <li><img src={brand1} alt=""/></li>
                            <li><img src={brand2} alt=""/></li>
                            <li><img src={brand3} alt=""/></li>
                            <li><img src={brand4} alt=""/></li>
                            <li><img src={brand5} alt=""/></li>
                            <li><img src={brand6}alt=""/></li>
                            <li><img src={brand7} alt=""/></li>
                            <li><img src={brand8} alt=""/></li>
                            <li><img src={brand9} alt=""/></li>
                            <li><img src={brand10} alt=""/></li>
                            <li><img src={brand11} alt=""/></li>
                            <li><img src={brand12} alt=""/></li>
                            <li><img src={brand13} alt=""/></li>
                            <li><img src={brand14} alt=""/></li>
                            <li><img src={brand15} alt=""/></li>
                            <li><img src={brand16} alt=""/></li>
                            <li><img src={brand17} alt=""/></li>
                        </ul>
                </Fade>
        </div>
    )
};

export default Brands;

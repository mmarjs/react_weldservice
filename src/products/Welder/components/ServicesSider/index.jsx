import React from "react";
import './styles.scss';
import configs from "../../assets/configs";
import {Nav, NavDropdown} from "react-bootstrap";
import {useSelector} from "react-redux";
import {selectLead} from "../../../../reducers/leadDataManager";
import {useParams} from "react-router-dom";

const ServicesSider = () => {
    const lead = useSelector(selectLead);
    const leadInfo = lead[0];

    const { leadId } = useParams();
    const urlBase = `/${leadId}`;
    return (
      <div className="section-service-sider">
          <div className="services-sider-wrap">
              <h2>Services</h2>
              <ul>
                                <li><Nav.Link href={`${urlBase}/services/aluminium`}>Aluminium Welding</Nav.Link></li>
                                <li><Nav.Link href={`${urlBase}/services/laser`}>Laser Welding</Nav.Link></li>
                                <li><Nav.Link href={`${urlBase}/services/mobile`}>Mobile Welding</Nav.Link></li>
                                <li><Nav.Link href={`${urlBase}/services/plasma`}>Plasma Cutting</Nav.Link></li>
                                <li><Nav.Link href={`${urlBase}/services/stainless`}>Stainless Steel Welding</Nav.Link></li>
                                <li><Nav.Link href={`${urlBase}/services/welding`}>Welding and Fabrication Services</Nav.Link></li>
              </ul>
          </div>
          <a className="call-now" href={`tel:${leadInfo.phone_number}`}><strong><big>{leadInfo.phone_number}</big></strong></a>
          <a className="get-a-quote" href={`${urlBase}/get-a-quote`}>GET A QUOTE</a>
      </div>
    )
};

export default ServicesSider;

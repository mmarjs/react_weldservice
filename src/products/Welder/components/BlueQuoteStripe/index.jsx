import React from "react";

import './styles.scss';
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import {useParams} from "react-router-dom";

const BlueQuoteStripe = () => {

    const { leadId } = useParams();
    const urlBase = `/${leadId}`;

    return (
        <div className="blue-quote-stripe">
            <Container className="text-center">
                <Row>
                    <Col>
                        <Fade left>
                            <p>Get general contracting services!</p>
                        </Fade>
                    </Col>
                    <Col>
                        <Fade right>
                            <div className="button-white">
                                <a href={`${urlBase}/get-a-quote`}>Get A Quote</a>
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BlueQuoteStripe

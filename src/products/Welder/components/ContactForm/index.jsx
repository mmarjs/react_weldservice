import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Row, Col} from 'react-bootstrap';
import NearMeIcon from '@material-ui/icons/NearMe';

import swal from 'sweetalert';
import axios from 'axios';

import './styles.scss';
import {useSelector} from "react-redux";
import {selectLead} from "../../../../reducers/leadDataManager";
import {useParams} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

const ContactForm = () => {
    const lead = useSelector(selectLead);
    const leadInfo = lead[0];
    const { leadId } = useParams();

    const classes = useStyles();

    const [fullName, setFullName] = useState('');
    const onFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const [email, setEmail] = useState('');
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const [phone, setPhone] = useState('');
    const onPhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const [company, setCompany] = useState('');
    const onCompanyChange = (e) => {
        setCompany(e.target.value);
    };

    const [message, setMessage] = useState('');
    const onMessageChange = (e) => {
        setMessage(e.target.value);
    };


    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [companyError, setCompanyError] = useState(false);
    const [messageError, setMessageError] = useState(false);


    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        let objData = {
            name: fullName,
            email: email,
            phone: phone,
            company: company,
            message: message
        };

        let errorsValidator = validate(objData);

        errorsValidator.name ? setNameError(false) : setNameError(true);
        errorsValidator.email ? setEmailError(false) : setEmailError(true);
        errorsValidator.phone ? setPhoneError(false) : setPhoneError(true);
        errorsValidator.company ? setCompanyError(false) : setCompanyError(true);
        errorsValidator.message ? setMessageError(false) : setMessageError(true);

        if(
            errorsValidator.name && errorsValidator.email && errorsValidator.phone &&
            (errorsValidator.company || company === '') &&
            (errorsValidator.message || message === '')
        ) {

            axios.post(`/api/welder/contact.php`, objData)
                .then(response => {
                    //console.log("contextApi got it", response);
                    swal("Good job!", "The information is on the way!", "success");
                    resetValues();
                }).catch(error => {
                console.log("contextApi error.response", error.response);
                swal("Oups!", "We have some error here!", "error");
            });

        }
    };

    const validate = (data) => {
        var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s]{0,1}[0-9]{3}[-\s]{0,1}[0-9]{4}$/;
        // var emailRGEX = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        var emailRGEX = /^.{1,}@.{2,}\..{2,}/;
        var nameRGEX = /^[a-zA-Z ]+$/;
        var txtRGEX = /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/;

        var phoneResult = phoneRGEX.test(data.phone.trim());
        var emailResult = emailRGEX.test(data.email.trim());
        var nameResult = nameRGEX.test(data.name.trim());
        var companyResult = txtRGEX.test(data.company.trim());
        var messageResult = txtRGEX.test(data.message.trim());

        return {
            name : nameResult,
            phone : phoneResult,
            email : emailResult,
            company: companyResult,
            message: messageResult
        }
    };

    const resetValues = () => {
        setNameError(false);
        setEmailError(false);
        setPhoneError(false);
        setCompanyError(false);
        setMessageError(false);

        setFullName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setMessage('');
    };

    return (
        <div className={'form-wrap'}>
            <form className={classes.root} noValidate autoComplete="off">
                <Row>
                    <Col sm={12} md={6}>
                        <TextField label="Your Name" value={fullName} onChange={onFullNameChange} fullWidth error={nameError} required/>
                    </Col>
                    <Col sm={12} md={6}>
                        <TextField label="Email Address" value={email} onChange={onEmailChange} fullWidth error={emailError} required/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <TextField label="Phone" value={phone} onChange={onPhoneChange} fullWidth error={phoneError} required/>
                    </Col>
                    <Col sm={12} md={6}>
                        <TextField label="Company"  value={company} onChange={onCompanyChange} fullWidth error={companyError}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TextField multiline rows={6} fullWidth label="Message" value={message} onChange={onMessageChange} error={messageError}/>
                        <div className="btn-submit-form" onClick={handleSubmit}><NearMeIcon/></div>
                    </Col>
                </Row>
            </form>
        </div>
    )
};

export default ContactForm;

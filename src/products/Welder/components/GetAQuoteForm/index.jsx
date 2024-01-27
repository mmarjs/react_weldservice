import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Row, Col, Nav} from 'react-bootstrap';
import NearMeIcon from '@material-ui/icons/NearMe';


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './styles.scss';


import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import axios from "axios";
import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const services = [
    'Aluminium Welding',
    'Laser Welding',
    'Mobile Welding',
    'Plasma Cutting',
    'Stainless Steel Welding',
    'Welding and Fabrication Services',
    'Other'
];

const GetAQuoteForm = () => {
    const classes = useStyles();

    const [firstName, setFirstName] = useState('');
    const onFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const [lastName, setLastName] = useState('');
    const onLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const [phone, setPhone] = useState('');
    const onPhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const [email, setEmail] = useState('');
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const [address, setAddress] = useState('');
    const onAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const [city, setCity] = useState('');
    const onCityChange = (e) => {
        setCity(e.target.value);
    };

    const [apt, setApt] = useState('');
    const onAptChange = (e) => {
        setApt(e.target.value);
    };

    const [state, setState] = useState('');
    const onStateChange = (e) => {
        setState(e.target.value);
    };

    const [zip, setZip] = useState('');
    const handleZipChange = (e) => {
        setZip(e.target.value);
    };

    const [serviceName, setServiceName] = React.useState([]);
    const handleServicesChange = (event) => {
        setServiceName(event.target.value);
    };

    const [whenToServe, setWhenToServe] = React.useState('');
    const handleWhenToServeChange = (event) => {
        setWhenToServe(event.target.value);
    };

    const [serviceType, setServiceType] = React.useState('');
    const handleServiceTypeChange = (event) => {
        setServiceType(event.target.value);
    };

    const [leadChannel, setLeadChannel] = React.useState('');
    const handleLeadChannelChange = (event) => {
        setLeadChannel(event.target.value);
    };

    const [budget, setBudget] = React.useState('');
    const handleBudgetChange = (event) => {
        setBudget(event.target.value);
    };

    const [message, setMessage] = useState('');
    const onMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [aptError, setAptError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [stateError, setStateError] = useState(false);
    const [zipError, setZipError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const [budgetError, setBudgetError] = useState(false);
    const [serviceNameError, setServiceNameError] = useState(false);
    const [whenToServeError, setWhenToServeError] = useState(false);
    const [serviceTypeError, setServiceTypeError] = useState(false);
    const [leadChannelError, setLeadChannelError] = useState(false);


    const handleSubmit = (e) => {

        e.preventDefault();

        let errorsValidator = validate();

        errorsValidator.firstName       ? setFirstNameError(false) : setFirstNameError(true);
        errorsValidator.lastName        ? setLastNameError(false) : setLastNameError(true);
        errorsValidator.phone           ? setPhoneError(false) : setPhoneError(true);
        errorsValidator.email           ? setEmailError(false) : setEmailError(true);
        errorsValidator.address         ? setAddressError(false) : setAddressError(true);
        errorsValidator.apt             ? setAptError(false) : setAptError(true);
        errorsValidator.city            ? setCityError(false) : setCityError(true);
        errorsValidator.state           ? setStateError(false) : setStateError(true);
        errorsValidator.zip             ? setZipError(false) : setZipError(true);
        errorsValidator.serviceName     ? setServiceNameError(false) : setServiceNameError(true);
        errorsValidator.whenToServe     ? setWhenToServeError(false) : setWhenToServeError(true);
        errorsValidator.serviceType     ? setServiceTypeError(false) : setServiceTypeError(true);
        errorsValidator.leadChannel     ? setLeadChannelError(false) : setLeadChannelError(true);
        errorsValidator.budget          ? setBudgetError(false) : setBudgetError(true);
        errorsValidator.message         ? setMessageError(false) : setMessageError(true);


        const objData = {
            firstName : firstName,
            lastName : lastName,
            phone : phone,
            email : email,
            address : address,
            apt : apt,
            city : city,
            state : state,
            zip : zip,
            serviceName : serviceName.join(', '),
            whenToServe : whenToServe,
            serviceType : serviceType,
            leadChannel : leadChannel,
            budget : budget,
            message : message,
        };
        if(
            errorsValidator.firstName && errorsValidator.email && errorsValidator.phone &&
            (errorsValidator.message || message === '')
        ) {

            console.log(objData);

            axios.post(`/api/welder/quote.php`, objData)
                .then(response => {
                    swal("Good job!", "The quote is on the way!", "success");
                    resetValues();
                }).catch(error => {
                console.log("contextApi error.response", error.response);
                swal("Oups!", "We have some error here!", "error");
            });
        }

    };

    const validate = () => {
        const phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s]{0,1}[0-9]{3}[-\s]{0,1}[0-9]{4}$/;
        // var emailRGEX = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        const emailRGEX = /^.{1,}@.{2,}\..{2,}/;
        const nameRGEX = /^[a-zA-Z ]+$/;
        const txtRGEX = /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/;
        const addressRGEX = /^[#.0-9a-zA-Z\s,-]+$/;
        const customRGEX = /^[a-zA-Z]([\w -]*[a-zA-Z])?$/;
        const zipRGEX = /(^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$)|(^\d{5}(-\d{4})?$)/;
        const aptRGEX = /^[0-9]*$/;
        const budgetRGEX = /([A-Za-z0-9_-]+)/;
        /*
        customRGEX
        abc, abc def, abc123, ab_cd, ab-cd
         */

        return {
            firstName: nameRGEX.test(firstName.trim()),
            lastName: nameRGEX.test(lastName.trim()),
            phone: phoneRGEX.test(phone.trim()),
            email: emailRGEX.test(email.trim()),
            address: addressRGEX.test(address.trim()),
            city: customRGEX.test(city.trim()),
            apt: aptRGEX.test(apt.trim()),
            state: customRGEX.test(state.trim()),
            zip: zipRGEX.test(zip.trim()),
            serviceName: serviceName.length > 0 ,
            whenToServe: customRGEX.test(whenToServe.trim()),
            serviceType: customRGEX.test(serviceType.trim()),
            leadChannel: customRGEX.test(leadChannel.trim()),
            budget: budgetRGEX.test(budget.trim()),
            message: txtRGEX.test(message.trim())
        }
    };

    const resetValues = () => {

        setFirstName('');
        setLastName('');
        setPhone('');
        setEmail('');

        setAddress('');
        setCity('');
        setState('');
        setZip('');

        setServiceName([]);
        setWhenToServe('');
        setServiceType('');
        setLeadChannel('');
        setBudget('');

        setMessage('');


        setFirstNameError(false);
        setLastNameError(false);
        setPhoneError(false);
        setEmailError(false);
        setAddressError(false);
        setCityError(false);
        setStateError(false);
        setZipError(false);
        setMessageError(false);
        setServiceNameError(false);
        setWhenToServeError(false);
        setServiceTypeError(false);
        setLeadChannelError(false);
    };

    return (
        <div className={'form-wrap'}>
            <form className={classes.root} noValidate autoComplete="off">
                <Row>
                    <Col sm={12} md={6}>
                        <TextField label="First Name" value={firstName} fullWidth error={firstNameError} required onChange={onFirstNameChange} name={'firstName'}/>
                    </Col>
                    <Col sm={12} md={6}>
                        <TextField label="Last Address" value={lastName} fullWidth error={lastNameError} required onChange={onLastNameChange} name={'lastName'}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <TextField label="Phone Number" value={phone} fullWidth error={phoneError} required onChange={onPhoneChange} name={'phoneNumber'}/>
                    </Col>
                    <Col sm={12} md={6}>
                        <TextField label="Email Address" value={email} fullWidth error={emailError} required onChange={onEmailChange} name={'emailError'}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12}>
                        <TextField label="Address" value={address} fullWidth error={addressError} required onChange={onAddressChange} name={'address'}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <TextField label="Apt" value={apt} fullWidth error={aptError} onChange={onAptChange} name={'apt'}/>
                    </Col>
                    <Col sm={12} md={6}>
                        <TextField label="City" value={city} fullWidth error={cityError} required onChange={onCityChange} name={'city'}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <TextField label="State" value={state} fullWidth error={stateError} required onChange={onStateChange} name={'state'}/>
                    </Col>
                    <Col sm={12} md={6}>
                        <TextField label="Zip" value={zip} fullWidth error={zipError} required onChange={handleZipChange} name={'zip'}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormControl className={classes.formControl} fullWidth  error={serviceNameError} required>
                            <InputLabel id="demo-mutiple-checkbox-label2">
                                What services are you interested in?
                            </InputLabel>
                            <Select
                                name={'serviceName'}
                                labelId="demo-mutiple-checkbox-label2"
                                multiple
                                value={serviceName}
                                onChange={handleServicesChange}
                                input={<Input />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {services.map((service) => (
                                    <MenuItem key={service} value={service}>
                                        <Checkbox checked={serviceName.indexOf(service) > -1} />
                                        <ListItemText primary={service} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Col>
                    <Col>
                        <FormControl className={classes.formControl} fullWidth error={whenToServeError} required>
                            <InputLabel id="demo-simple-select-label">
                                When do you need this service?
                            </InputLabel>
                            <Select
                                name={'whenToServe'}
                                labelId="demo-simple-select-label"
                                value={whenToServe}
                                onChange={handleWhenToServeChange}
                            >
                                <MenuItem value={'Emergency service'}>Emergency service</MenuItem>
                                <MenuItem value={'As soon as possible'}>As soon as possible</MenuItem>
                                <MenuItem value={'At a later date'}>At a later date</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormControl component="fieldset" fullWidth error={serviceTypeError} required>
                            <FormLabel component="legend">
                                Is this for commercial or residential services?
                            </FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                name="serviceType"
                                value={serviceType}
                                onChange={handleServiceTypeChange}
                                row
                            >
                                <FormControlLabel value="commercial" control={<Radio />} label="Commercial" />
                                <FormControlLabel value="residential" control={<Radio />} label="Residential" />
                            </RadioGroup>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormControl className={classes.formControl} fullWidth error={leadChannelError} required>
                            <InputLabel id="demo-simple-select-label3">
                                How did you hear about us?
                            </InputLabel>
                            <Select
                                name={'leadChannel'}
                                labelId="demo-simple-select-label3"
                                value={leadChannel}
                                onChange={handleLeadChannelChange}
                            >
                                <MenuItem value={'referral'}>Referral</MenuItem>
                                <MenuItem value={'google'}>Google</MenuItem>
                                <MenuItem value={'facebook'}>Facebook</MenuItem>
                                <MenuItem value={'radio'}>Radio</MenuItem>
                                <MenuItem value={'magazine'}>Magazine</MenuItem>
                                <MenuItem value={'other'}>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                    <Col>
                        <FormControl className={classes.formControl} fullWidth error={budgetError} required>
                            <InputLabel id="demo-simple-select-label4">
                                What is your budget?
                            </InputLabel>
                            <Select
                                name={'budget'}
                                labelId="demo-simple-select-label4"
                                value={budget}
                                onChange={handleBudgetChange}
                            >
                                <MenuItem value={'$0 - $100'}>$0 - $100</MenuItem>
                                <MenuItem value={'$100 - $500'}>$100 - $500</MenuItem>
                                <MenuItem value={'$500 +'}>$500 +</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TextField
                            name={'message'}
                            multiline
                            rows={6}
                            fullWidth
                            label="Additional Details"
                            value={message}
                            onChange={onMessageChange}
                            error={messageError}
                        />
                        <div className="btn-submit-form" onClick={handleSubmit}><NearMeIcon/></div>
                    </Col>
                </Row>
            </form>
        </div>
    )
};

export default GetAQuoteForm;

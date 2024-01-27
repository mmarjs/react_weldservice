import React, {Suspense, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    selectLead,
    getLeadAsync
} from '../reducers/leadDataManager';
import {
    Switch,
    Route
} from "react-router-dom";

import {
    RoutesWelder,
} from './routesConfig';

import { CircularProgress } from '@material-ui/core';

export function Test(props) {
    const lead = useSelector(selectLead);
    const dispatch = useDispatch();

    const [routes, setRoutes] = useState(null);
    const leadId = props.history.location.pathname.split('/')[1];

    useEffect(() => {
        dispatch(getLeadAsync(leadId))
    }, []);

    useEffect(() => {
        setRoutes(RoutesWelder);
    }, [lead]);

    return lead && routes ?  (
           <Suspense fallback={<CircularProgress color="secondary" />}>
               <Switch>
                   {routes.map((route, i) =>
                       <Route history={props.history} key={i} path={route.path} exact={route.exact} component={route.component} />
                   )}
               </Switch>
           </Suspense>
    ) :  <CircularProgress/>;
}

export default Test;

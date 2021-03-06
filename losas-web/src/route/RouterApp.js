import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {CSSTransition, TransitionGroup} from "react-transition-group";
import PageIndex from "../component/PageIndex";
import PageHome from "../component/PageHome";
import FragmentHome from "../component/FragmentHome";
import FragmentCarga from "../component/FragmentCarga";
import FragmentHistorial from "../component/FragmentHistorial";
import FragmentVerConsulta from "../component/FragmentVerConsulta";
import {ROUTE_HOME, ROUTE_HOME_DIAGNOSTICO, ROUTE_HOME_HISTORIAL, ROUTE_HOME_VER_DIAGNOSTICO, ROUTE_ROOT} from "../util/URLUtil";

export const RouterRoot = () => (
    <Route render={({ location }) =>
        <TransitionGroup>
            <CSSTransition key={location.pathname.split('/')[1]} classNames="fade" timeout={{ enter: 500, exit: 300 }} mountOnEnter={true} unmountOnExit={true}>
                <Switch  location={location}>
                    <Route exact path={ROUTE_ROOT} component={ PageIndex }/>
                    <Route path={ROUTE_HOME} component={ PageHome }/>
                    <Route component={PageIndex}/>
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    } />
);

export const RouterApp = () => {
    return (
        <Switch>
            <Route exact path={ROUTE_HOME} component={ FragmentHome }/>
            <Route exact path={ROUTE_HOME_DIAGNOSTICO} component={ FragmentCarga }/>
            <Route exact path={ROUTE_HOME_HISTORIAL} component={ FragmentHistorial }/>
            <Route path={ROUTE_HOME_VER_DIAGNOSTICO} component={ FragmentVerConsulta }/>
            <Route component={FragmentHome}/>
        </Switch>
    );
};
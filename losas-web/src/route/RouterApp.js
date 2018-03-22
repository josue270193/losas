import React from 'react';
import {Route} from 'react-router-dom'
import PageHome from "../component/PageHome";

const Fragment = React.Fragment;
const RouterApp = () => (
    <Fragment>
        <Route exact path="/" component={ PageHome }/>
        <Route path="/accion1" component={ PageHome }/>
        <Route path="/accion2" component={ PageHome }/>
    </Fragment>
);
export default RouterApp;

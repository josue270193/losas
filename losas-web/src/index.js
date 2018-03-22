import "babel-polyfill"
import 'typeface-roboto'

import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from "react-router-dom/BrowserRouter";
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import {activarCache} from './data/CacheApp'

ReactDOM.render(
    <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
        <App />
    </BrowserRouter>
    ,
    document.getElementById('root')
);
activarCache();
registerServiceWorker();


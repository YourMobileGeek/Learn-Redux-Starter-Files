import React from 'react';

import {
    render
} from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import main from './components/main';
import single from './components/single';
import photogrid from './components/photogrid';

//Import react router deps 
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; 

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={main}>
            <IndexRoute component={photogrid}></IndexRoute>
            <Route path="/view/:postId" component={single}></Route>
        </Route>
    </Router>
)

render(router, document.getElementById('root'));
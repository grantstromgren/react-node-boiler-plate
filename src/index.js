/* Globals */

/* Imports */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { introduction } from './components/lib';
import axios from 'axios';
import './js/prototypes';

/* Polyfills */
import 'core-js/es6/map';
import 'core-js/es6/set';
import ES6Promise from 'es6-promise';
ES6Promise.polyfill();
import './js/polyfills';

/* Components */
import ExampleComponent from './components/ExampleComponent';

/* Init React */
window.React = React;

const style = {
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='content'>
                {introduction}
                <ExampleComponent />
            </div>
        )
    }
}

// Creates the App JSX and attaches it to app id
ReactDOM.render(
    <App />,
    document.getElementById('app')
);

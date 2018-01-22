import React, {Component} from 'react';
import '../css/ui.scss';
import axios from 'axios';

export default class ExampleComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    
    componentDidMount() {
        alert('Component mounted!');
    }

    render() {
        return (
            <div className='row'>
                <div className='col-sm-12'>
                    <h2 className='title'>Example Component</h2>
                    <p className='lead'>Lead in text</p>
                    <p>Some example text</p>
                </div>
            </div>
        )
    }
}
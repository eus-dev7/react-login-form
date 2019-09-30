import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    
    render() {
        return (
            <div className="home-container">
                <h1>Home</h1>
            </div>
        );
    }
}

export default withRouter(Home);
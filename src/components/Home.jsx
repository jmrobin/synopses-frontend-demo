// /src/components/Home.jsx

import React from 'react';
import { Jumbotron } from 'reactstrap';

class Home extends React.Component {
    render () {
        return (
            <Jumbotron>
                <p className="lead">Welcome to the Synopses demo version 0.7.0</p>
            </Jumbotron>
        );
    }
}

export default Home;
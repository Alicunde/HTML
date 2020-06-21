import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div role="alert">That is a simple alert</div>
                <div role="alert" className="warning">That is a warning alert</div>
                <div role="alert" className="success">That is a success alert</div>
                <div role="alert" className="information">That is a information alert</div>
                <div role="alert" className="danger">That is a danger alert</div>
                <div role="alert" className="disabled">That is a disabled alert</div>
            </React.Fragment>
        );
    }
}

export default Module;

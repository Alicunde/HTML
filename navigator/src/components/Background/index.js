import React, { Component } from 'react';

class Module extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Background" title="This is a pseudo-element"></div>
                <div className="Background"></div>
            </React.Fragment>
        );
    }
}

export default Module;
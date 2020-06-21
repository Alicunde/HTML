import React, { Component } from 'react';

class Module extends Component {
    render() {
        return (
            <p>
                {this.props.children}
            </p>
        );
    }
}
export default Module;

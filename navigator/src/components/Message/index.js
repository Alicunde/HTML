import React, { Component } from 'react';
class Module extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Message">
                    <del>Alert</del>
                    <span>My perfect description</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <code></code>
                </div>
                <div className="Message">
                    <strong>Sucess</strong>
                    <span>My perfect description</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <code></code>
                </div>
            </React.Fragment>
        );
    }
}
export default Module;

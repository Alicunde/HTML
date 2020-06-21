import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <div className="Space">
                <div data-tip="Hello!... i am tooltip!">Static tooltip</div>
                <div data-tooltip="Hello!... i am tooltip!">Hover tooltip</div>
                <p>
                    That is a text with <b data-tip="Hello!!">small tooltip</b> and maybe you want a <b data-tooltip="Hello!!">hover tooltip</b>.
                </p>
            </div>
        );
    }
}

export default Module;

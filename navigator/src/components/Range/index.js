import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <div className="Range">
                <input type="range" defaultValue="5" min="0" max="10" step="1" />
            </div>
        );
    }
}
export default Module;

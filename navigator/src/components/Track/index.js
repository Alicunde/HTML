import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="Track">
                    <input type="range"  defaultValue="0" min="0" max="1000" step="1" />
                </div>
            </React.Fragment>
           
        );
    }
}
export default Module;

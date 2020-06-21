import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <div className="Checkbox">
                <input type="checkbox" name="example" id="example" />
                <label for="example">I have a bike</label>
            </div>
        );
    }
}
export default Module;

import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <div class="Number">
                <button></button>
                <input max="10" min="0" value="1" type="number" />
                <button></button>
            </div>
        );
    }
}
export default Module;

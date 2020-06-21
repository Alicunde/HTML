import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <div className="Autocomplete">
                <input placeholder={(this.props.placeholder)?'Hola':''} type={'text'} />
            </div>
        );
    }
}
export default Module;

import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <div className="Input">
                <input maxlength="20" readOnly={this.props.readOnly} placeholder={(this.props.placeholder)?'That is a placeholder':'My name is Salbatore'} type={'text'} />
                <em>20</em>
            </div>
        );
    }
}
export default Module;

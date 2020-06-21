import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <div className="Input">
                <input readOnly={this.props.readOnly} placeholder={(this.props.placeholder)?'That is a placeholder':'My name is Salbatore'} type={'text'} />
                {(this.props.label)?<label >Name</label>:false}
            </div>
        );
    }
}
export default Module;

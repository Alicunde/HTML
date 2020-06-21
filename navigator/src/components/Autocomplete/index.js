import React, { Component } from 'react';

class Module extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
            <div className="Autocomplete">
                <input data-url={'/components/Autocomplete/data.json'} placeholder={(this.props.placeholder)?'Select your country...':''} type={'text'} />
                <ul>
                    
                </ul>
            </div>
            <div className="Autocomplete-placeholder"></div>
            </React.Fragment>
        );
    }
}
export default Module;

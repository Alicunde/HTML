import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="Grid">
                    <div tablet="10" phone="90" ></div>
                    <div tablet="90" phone="10" ></div>
                    <div tablet="20" phone="80" ></div>
                    <div tablet="80" phone="20" ></div>
                    <div tablet="30" phone="70" ></div>
                    <div tablet="70" phone="30" ></div>
                    <div tablet="40" phone="60" ></div>
                    <div tablet="60" phone="40" ></div>
                    <div  screen="50" ></div>
                    <div  screen="50" ></div>
                    <div tablet="100" phone="100" ></div>
                </div> 

               
                
            </React.Fragment>
        );
    }
}

export default Module;

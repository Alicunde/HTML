import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <div className="Space">
                <div className="Clearfix" style={{background:'blue'}}>
                    <div style={{float:'left',height:100,width:100}}>Hi</div>
                    <div  style={{float:'left',height:100,width:100}}>bye</div>
                </div>
                
            </div>
        );
    }
}

export default Module;

import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            item:[
                {"legend":"Name",'type':'text','icon':'home'},
            
            ]
        }
    }

    render() {

        return (
            <div className="Progress">
               {(this.props.name)?<b>File Name</b>:false}
               {(this.props.size)?<span>23.40 KB</span>:false}
               <progress value="70" max="100"></progress>
            </div>
        );
    }
}
export default Module;

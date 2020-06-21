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
        let cancel = false;
        let size = false;
        let title = false;
        let status = false;

        return (
            <div className="Progress">
               {(title)?<b>Title</b>:false}
               {(size)?<b>23.40 KB</b>:false}
               {(cancel)?<i></i>:false}
               {(status)?<em>Uploading</em>:false}
               <div style={{width:'50%'}}>50%</div>

            </div>
        );
    }
}
export default Module;

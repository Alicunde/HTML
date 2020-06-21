import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <div className="Modal-space">
                <a href="#modal">Open Modal</a>
           
            <div className="Modal" id="modal">
                <div>
                <div>
                    {(this.props.title)?<div>
                        {(this.props.icons)?<i className={'la la-dog'}></i>:false}
                        <strong>Title</strong>
                        {(this.props.description)?<p>One description ramdom</p>:false}
                    </div>:false}
                    {(this.props.close)?<a href="#close">x</a>:false}
                    
                </div>
                <div className="Placeholder"></div>
                </div>
            </div>
            </div>
        );
    }
}

export default Module;

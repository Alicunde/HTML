import React, { Component } from 'react';

class Module extends Component {
    
    render() {

        return (
            <div className="Counter">
                <ul>
                    <li>{(this.props.icons)?<i class={'las la-dog'}></i>:false}<b>232</b>{(this.props.descriptions)?<span>Clients</span>:false}</li>
                    <li>{(this.props.icons)?<i class={'las la-fish'}></i>:false}<b>344</b> {(this.props.descriptions)?<span>Projects</span>:false}</li>
                    <li>{(this.props.icons)?<i class={'las la-dove'}></i>:false}<b>55</b> {(this.props.descriptions)?<span>Employers</span>:false}</li>
                    <li>{(this.props.icons)?<i class={'las la-horse'}></i>:false}<b>555</b> {(this.props.descriptions)?<span>User</span>:false}</li>
                </ul>
            </div>
        );
    }
}

export default Module;

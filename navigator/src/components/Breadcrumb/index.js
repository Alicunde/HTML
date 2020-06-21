import React, { Component } from 'react';

class Module extends Component {
    
    render() {

        return (
            <p role="navigation">
                {(this.props.logotype)?<strong><a href="/">Logotype</a></strong>:false}
                <a href="/">Home</a>
                <a href="/">Products</a>
                {(this.props.icons && this.props.detail)?<span>I love Pepsi</span>:false}

            </p>
        );
    }
}
export default Module;

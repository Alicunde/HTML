import React, { Component } from 'react';

class Module extends Component {
    
    render() {
   
        return (
            <div className="Article">
                                {(this.props.picture)?<img alt="hola" src="/components/Article/images/header.jpg" />:false}

                {(this.props.title)?<h1>Excepteur sint occaecat</h1>:false}
                {(this.props.description)?<h2>Lorem ipsum dolor sit amet</h2>:false}
                <time>August 8th 2018</time>
                {(this.props.tags)?<ol><li><a href="#css">CSS</a></li><li><a href="#css">Bootstrap</a></li><li><a href="#css">Studio</a></li></ol>:false}
                {(this.props.author)?<strong><span></span><i>Salbatore Munuera</i><em>@salbatore</em></strong>:false}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               
            </div>
        );
    }
}
export default Module;

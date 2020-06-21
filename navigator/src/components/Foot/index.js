import React, { Component } from 'react';

class Module extends Component {
    
    render() {
    
        return (
            <div className="Foot">
                {(this.props.logotype)?<strong><a href="/">Logo</a></strong>:false}
                {(this.props.description)?<p>Esto es una prueba desagradable</p>:false}
                {(this.props.newsletter)?<form>
                    <b>Añade tu email</b>
                    <input type="text" />
                    <input type="submit" value="Subscribe" />
                </form>:false}
                
                <ul>
                    <li><a href="/">asd</a></li>
                    <li><a href="/">asd</a></li>
                    <li><a href="/">asd</a></li>
                    <li><a href="/">asd</a></li>
                </ul>
                {(this.props.legal)?<em>texto legal</em>:false}

            </div>
        );
    }
}

export default Module;

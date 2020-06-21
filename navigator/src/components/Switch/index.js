import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <div className="Switch">
                <input type="checkbox" name="Switch" id="Switch" value="True" />
                <label for="Switch"> I have a bike {(this.props.description)?<b>Hola prueba</b>:false}</label>
            </div>
        );
    }
}
export default Module;

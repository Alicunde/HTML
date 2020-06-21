import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        
        return (
            <div className="Radio">
                <input type="radio" id="male" name="gender" value="male"/>
                <label for="male">Male {(this.props.description)?<b>Hola prueba</b>:false}</label>
                <input type="radio" id="female" name="gender" value="female" />
                <label for="female">Female {(this.props.description)?<b>Hola prueba</b>:false}</label>
            </div>
        );
    }
}
export default Module;

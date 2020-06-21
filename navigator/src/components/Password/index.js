import React, { Component } from 'react';

class Module extends Component {
    
    render() {

        return (
            <div className="Password">
               
                    <input autocomplete="off" placeholder = {(this.props.placeholder)?'Escribe tu clave':''} autoComplete={'off'} type={'password'} />
                    {(this.props.viewer)?<React.Fragment><i></i></React.Fragment>:false}
                
                {(this.props.quality)?<React.Fragment>
                    <p>A lowercase letter</p>
                    <p>A capital letter</p>
                    <p>A number</p>
                    <p>Minimum 8 characters</p>
                </React.Fragment>:false}
            </div>
        );
    }
}
export default Module;

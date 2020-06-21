import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        
        return (
            <div className="Choice">
                <ul>
                    <li>
                        <input type="radio" checked name="gender" />
                        Picasso
                    </li>
                    <li>
                        <input type="radio"name="gender"/>
                        Velázquez
                    </li>
                    <li>
                        <input type="radio"name="gender" />
                        Zurbaran
                    </li>
                </ul>
            </div>
        );
    }
}
export default Module;

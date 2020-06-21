import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <div className="Helper">
                <a href="tel:934934923">123823</a>
                <a href="mailto:info@example.com">info@example.com</a>
                <span>
                    <a href="#en">EN</a>
                    <a href="#en">ES</a>
                    <a href="#en">FR</a>
                    <a href="#en">DE</a>
                </span>
            </div>
        );
    }
}

export default Module;

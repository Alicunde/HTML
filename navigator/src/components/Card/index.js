import React, { Component } from 'react';

class Module extends Component {
    
    render() {

        return (
            <div className="Card">
                <fieldset>
                    <legend>Number Card</legend>
                    <input type="text" />
                </fieldset>
                <fieldset>
                    <fieldset>
                        <legend>Year</legend>
                        <input type="text" />
                    </fieldset>
                    <fieldset>
                        <legend>Month</legend>
                        <input type="text" />
                    </fieldset>
                    <fieldset>
                        <legend>CVC</legend>
                        <input type="text" />
                    </fieldset>
                </fieldset>
            </div>
        );
    }
}
export default Module;

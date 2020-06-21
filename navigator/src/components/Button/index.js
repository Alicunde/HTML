import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        
        return (
            <div className="Space">
               <button type="button" >Basic</button>

               <button type="button" class="cancel">Cancel</button>
                <button type="button" class="success">Success</button>
                <button type="button" class="warning">Warning</button>
                <a href="#button" class="Button">Link</a>
                <a href="#button" class="Button link">Link with icon</a>
                <button type="button" class="information">Information</button>
                <button type="button" class="danger">Danger</button>
                <button type="button" class="back">Back</button>

                <button type="button" class="next">Next</button>
            
            </div>
        );
    }
}
export default Module;

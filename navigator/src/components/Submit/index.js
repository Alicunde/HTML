import React, { Component } from 'react';

class Module extends Component {
    
    render() {
  
        return (
            <div className="Submit">
                <button type="submit">Send</button>
                {(this.props.delete)?<a href="cancel">Delete</a>:false}
                {(this.props.reset)?<button type="reset">Reset</button>:false}
            </div>
        );
    }
}
export default Module;

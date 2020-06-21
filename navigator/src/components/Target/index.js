import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <React.Fragment>
                <a className="Target" href="#one" id="one">One Section</a>
                <div>
                    <div className="Placeholder">

                    </div>
                </div>
                <a className="Target" href="#two" id="two">Two Section</a>
                <div>
                    <div className="Placeholder">

                    </div>
                </div>
                <a className="Target" href="#three" id="three">Three Section</a>
                <div>
                    <div className="Placeholder">

                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Module;

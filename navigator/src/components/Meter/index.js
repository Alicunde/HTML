import React, { Component } from 'react';

class Module extends Component {
    
    render() {

        return (
            <div className="Meter">
               <p>Macintosh HD <span class="free-space">50.22 GB free out of 110.10 GB</span></p>
            <ul>
                <li>
                    <u style={{width:'20%'}}></u>
                    <span>Audio</span><b>460.5 MB</b></li>
                <li><u style={{width:'15%'}}></u><span>Movies</span><b>330.5 MB</b></li>
                <li><u style={{width:'10%'}}></u><span>Photos</span><b>210.5 MB</b></li>
                <li><u style={{width:'5%'}}></u><span>Apps</span><b>112.5 MB</b></li>
            </ul>

            </div>
        );
    }
}

export default Module;

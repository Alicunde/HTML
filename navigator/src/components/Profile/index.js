import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <div className="Profile">
                <div></div>
                <div></div>
                <strong>Salbatore Munuera</strong>
                <i>@salbatore</i>
                <p>I work in Alicunde Systems and I love programming.</p>
                <ol>
                    <li><a href="/message">&nbsp;</a></li>
                    <li><del></del></li>
                </ol>
                <ul>

                    <li><b>985</b> Following</li>
                    <li><b>18.6K</b> Followers</li>
                </ul>
            </div>
        );
    }
}
export default Module;

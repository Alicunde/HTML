import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
                <div className="Dropdown">
                    <input type="checkbox" id="dropdown" />
                    <label for="dropdown">You have a pet?</label>
                    <ul>
                        <li><input type="radio" id="dog" name="pet" value="dog" /><label data-title="Yes, I have a dog" for="dog"> Dog</label> </li>
                        <li><input type="radio" id="cat" name="pet" value="cat" /><label data-title="Yes, I have a cat" for="cat"> Cat</label> </li>
                        <li><input type="radio" id="fish" name="pet" value="fish" /><label data-title="Yes, I have a fish" for="fish"> Fish</label> </li>
                        <li></li>
                        <li><a href="#test">That is a Link</a></li>
                        <li><a href="#test">That is a Link</a></li>
                        <li></li>
                        <li><label for="name">Name</label><input type="text" id="name" placeholder="This is a text!" /></li>
                        <li><label for="color">Age</label><input type="text" id="color" placeholder="This is a text!" /></li>
                        <li><input type="text" id="two" placeholder="This is a text!" /></li>
                    </ul>
                </div>
        );
    }
}
export default Module;

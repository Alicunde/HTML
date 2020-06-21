import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <React.Fragment>
                <form method="post" >
<div className="x">
<input type="number" min="0" max="15" step="1" />
<b>123</b>
</div>
<input type="checked" id="asd" name="asd" />
<select name="jeje" size="3">
<option value="1"></option>
<option value="2"></option>
<option value="3"></option>
<option value="4"></option>
<option value="5"></option>
<option value="6"></option>
<option value="6"></option>
<option value="6"></option>
</select>
<input type="submit"></input>
</form>
<div class="container">
    
    <input type="range" orient='circular' defaultValue="5" min="-5" max="5" step="1" /></div>
<div className="Track">
                <input type="range"  defaultValue="0" min="0" max="1000" step="1" />
            </div>
            </React.Fragment>
           
        );
    }
}
export default Module;

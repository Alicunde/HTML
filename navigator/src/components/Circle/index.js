import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        var rows = [];
        for (var i = 0; i <19; i++) {
            if(i===18){
                rows.push(<option defaultChecked="checked" checked="checked" value={19-i} />);
            }
            else {
                rows.push(<option value={19-i} />);
            }
        }
        return (
            <div className="Circle">
                <select size="3" defaultValue='1'>
                    {rows}
                </select>
                <select size="3" defaultValue='10'>
                    {rows}
                </select>
                <select size="3" defaultValue='14'>
                    {rows}
                </select>
            </div>
        );
    }
}
export default Module;

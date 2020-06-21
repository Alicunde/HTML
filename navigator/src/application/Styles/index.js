import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            item:[
                {"text":"Basic","theme":"basic"},
                {"text":"Elegant","theme":"elegant"},
                {"text":"Hack","theme":"hack"},
                {"text":"Data","theme":"data"},
                {"text":"Old","theme":"old"},
                {"text":"Dark","theme":"dark"},
                {"text":"Glossy","theme":"glossy"},
                {"text":"Block","theme":"block"},
            ]
        }
    }
    renderItems(items){
        return(<ul>
            {items.map((a, index) => {
                return (
                    <li key={"theme-"+index} className={(this.props.theme===a.theme)?"active":''} onClick={()=>{this.props.setTheme(a.theme)}}>
                        <div>{a.text}</div>
                    </li>
                );
            })}
        </ul>)
    }
    render() {
        return (
            <div className="Styles">
                {this.renderItems(this.state.item)}
            </div>
        );
    }
}
export default Module;

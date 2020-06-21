import React, { Component } from 'react';
import './index.css';
let Data = require('./data.json');

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            item:Data
        }
    }
    renderText(t){
        let newText = t.split('\n').map((item, i) => {
            return <p key={i}>{item}</p>;
        });
        return newText;
    }
    renderItems(items){
        return(<ul>
            {items.map((a, index) => {
                
                return (
                    <li>
                        <strong>#{a.id}</strong>
                        <h3>{a.title}</h3>
                        <h4>{a.description}</h4>
                        <p>{a.text}</p>
                    </li>
                );
            })}
        </ul>)
    }
    render() {
        return (
            <div className="Rules">
                {this.renderItems(this.state.item)}
            </div>
        );
    }
}
export default Module;

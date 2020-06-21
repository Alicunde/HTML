import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            item:[
                {status:'read',"nick":"Elon Musk","message":"¿Cómo estas Salbatore?","date":"11:37"},
                {me:true,status:'read',"nick":"Salbatore Munuera","message":"Estoy estresado, intento dejar de fumar, pero soy incapaz","date":"16:23"},
                {status:'read',"nick":"Elon Musk","message":"Hola","date":"16:24"},
                {status:'read',"nick":"Elon Musk","message":"Hola","date":"20:44"},
                {me:true,status:'read',"nick":"Salbatore Munuera","message":"Elon, dejame en paz","date":"23:00"},

            ]
        }
    }
    renderItems(items){
       
        return(<ul>
            {items.map((a, index) => {
                return (
                    <li>
                        {(a.me)?<p>
                        {(this.props.options)?<i></i>:false}
                            {(this.props.nicks)?<b>{a.nick}</b>:false}

                            
                            <span>{a.message}</span>
                            {(this.props.hours)?<em>{a.date}</em>:false}
                            {(this.props.ticks)?<i></i>:false}
                        </p>:<u>
                        {(this.props.options)?<i></i>:false}
                            {(this.props.nicks)?<b>{a.nick}</b>:false}

                            
                            <span>{a.message}</span>
                            {(this.props.hours)?<em>{a.date}</em>:false}
                            {(this.props.ticks)?<i></i>:false}
                        </u>}
                    </li>
                );
            })}
        </ul>)
    }
    render() {

        return (
            <div className="Cart">
                {(this.props.dates)?<strong>23 July 2020</strong>:false}
                {this.renderItems(this.state.item)}
            </div>
        );
    }
}
export default Module;

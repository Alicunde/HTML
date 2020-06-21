import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            item:[
                {"date":"1 months","username":"Consectetur adipis cing","name":"Salbatore Munuera",},
                {"date":"2 months","username":"Sed do eiusmod tempor","name":"Miguel de Cervantes"},
                {"date":"3 months","username":"Ut enim ad minim veniam","name":"Pablo Neruda"},
                {"date":"4 months","username":"Aliquip ex ea commodo","name":"J. D. Salinger"},
            ]
        }
    }
    renderItems(items){
     

        return(<ul>
            {items.map((a, index) => {
                return (
                    <li >
                        <picture title="2 days ago"><img alt="Test" src={"/components/Articles/images/"+(index+1)+'.jpg'} /></picture>

                        <h3>{a.username}</h3>
                        <strong>{a.name}</strong>
                        {<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>}
                        {<a href="/">Read more</a>}
                    </li>
                );
            })}
        </ul>)
    }
    render() {
        return (
            <div className="Articles">
                {this.renderItems(this.state.item)}
            </div>
        );
    }
}
export default Module;

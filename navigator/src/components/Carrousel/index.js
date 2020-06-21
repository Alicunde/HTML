import React, { Component } from 'react';
class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            items:[
                {"name":"Picasso","description":"1923","image":"/components/Carrousel/images/1.jpg"},
                {"name":"Édouard","description":"1923","image":"/components/Carrousel/images/2.jpg"},
                {"name":"Gustave","description":"1923","image":"/components/Carrousel/images/3.jpg"},
                {"name":"René","description":"1923","image":"/components/Carrousel/images/4.jpg"},
                {"name":"Salvador","description":"1923","image":"/components/Carrousel/images/5.jpg"},
                {"name":"Edgar","description":"1923","image":"/components/Carrousel/images/6.jpg"},
                {"name":"Edward","description":"1923","image":"/components/Carrousel/images/7.jpg"},
                {"name":"Wassily","description":"1923","image":"/components/Carrousel/images/1.jpg"},
                {"name":"Dalí","description":"1923","image":"/components/Carrousel/images/2.jpg"},
                {"name":"Zurbaran","description":"1923","image":"/components/Carrousel/images/3.jpg"},
                {"name":"Freud","description":"1923","image":"/components/Carrousel/images/4.jpg"},
                {"name":"Bacon","description":"1923","image":"/components/Carrousel/images/5.jpg"},
                
            ]
        }
    }
    
    render() {
        return (
            <div className="Carrousel">
                <ul>
                    {this.state.items.map((a, index) => {
                        return (
                            <li>
                                <a  href="#test">
                                    <img alt="Test" src={a.image} />
                                    <b>{a.name}</b>
                                    <em>{a.description}</em>
                                </a>
                            </li>
                        );
                    })}
                    
                </ul>
            </div>
        );
    }
}

export default Module;

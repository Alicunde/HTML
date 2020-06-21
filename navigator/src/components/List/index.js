import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            item:[
                {"icon":"cat","name":"Cats","description":"I want a cat!",badge:23},
                {"icon":"frog",'url':'/example','name':'Link',"description":"Animales que saltan","child":[
                    {"name":"Animal without icon","description":"No me quemes"},
                    {"icon":"horse","name":"Horses","surname":"Musk",badge:23,"child":[
                        
                        {"icon":"apple-alt","name":"Apples"},
                    ]},
                    {"icon":"dragon","name":"Dragon",badge:23},

                ]},
                {"icon":"dove","name":"Dove","content":true},
                {"icon":"fish","name":"Fish","description":"in the water"},]}
        
    }
    renderItem(a){
        return(<React.Fragment>
            {(a.icon && this.props.icons)?<i className={'las la-'+a.icon}></i>:false}
            {(a.name)?<React.Fragment>{a.name} {(a.description && this.props.descriptions)?<u>{a.description}</u>:false}</React.Fragment>:false}
            {(a.badge && this.props.badges)?<b>{a.badge}</b>:false}
        </React.Fragment>)
    }
    renderItems(items){
       

        return(<div className="List"><ul>
            {items.map((a, index) => {
                return (
                    <li>
                        {(a.url)?<a href={a.url}>{this.renderItem(a)}</a>:<p>{this.renderItem(a)}</p>}
                        {(a.content && this.props.contents)?<div><div className="Placeholder"></div></div>:false}
                        {(a.child && a.child.length && this.props.childs)?this.renderItems(a.child):''}
                    </li>
                );
            })}
        </ul></div>)
    }
    render() {
        return (
            <React.Fragment>
                {this.renderItems(this.state.item)}
            </React.Fragment>
        );
    }
}
export default Module;

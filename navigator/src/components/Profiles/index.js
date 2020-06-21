import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            item:[
                {"username":"linux","verify":true,"name":"Linus","surname":"Torvalds"},
                {"username":"web","name":"Tim","surname":"Berners-Lee"},
                {"username":"c","name":"Dennis","surname":"Ritchie"},
            ]
        }
    }
    renderVertical(items){
        return(<ol>
            {this.renderItems(items)}            
        </ol>)
    }
    renderHorizontal(items){
        return(<ul>
            {this.renderItems(items)}            
        </ul>)
    }
    renderItems(items){
        return(<React.Fragment>
            {items.map((a, index) => {
                return (
                    <li>
                        <a  href="/#test">
                        {(this.props.verifications && a.verify)?<s style={{backgroundImage:'url(/components/Profiles/images/'+(index+1)+'.jpg)'}}></s>:false}
                        {((!a.verify || !this.props.verifications))?<u style={{backgroundImage:'url(/components/Profiles/images/'+(index+1)+'.jpg)'}}></u>:false}
                            <b>
                                {a.name} {a.surname}
                            </b>
                            <span>@{a.username}</span>
                        </a>
                    </li>
                );
            })}
        </React.Fragment>)
    }
    render() {
        return (
            <div className="Profiles">
                {(this.props.vertical)?this.renderVertical(this.state.item):this.renderHorizontal(this.state.item)}
            </div>
        );
    }
}
export default Module;

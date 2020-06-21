import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            item:[
                {"name":"First",active:true,"detail":"My life"},
                {"name":"Second","detail":"My work"}
            ]
        }
    }
    
    renderMenu(items){

        return(<ul>
            {items.map((a, index) => {
                return (
                    <li className={(a.active)?'active':''}>
                        {(this.props.icons)?<i className={'la la-home'}></i>:false}
                        <b>{a.name}</b>
                        {(this.props.descriptions)?<p>Lorem ipsum dolor sit amet</p>:false}
                    </li>
                );
            })}
        </ul>)
    }
    renderContent(items){
        return(<React.Fragment>
            {items.map((a, index) => {
                return (
                    <div className={(a.active)?'active':''}>
                       <div className="Placeholder"></div>
                    </div>
                );
            })}
        </React.Fragment>)
    }
    render() {
        return (
           <div className="Space-dialog">
                <div className="Dialog-open">Abrir</div>
                <ul className="Dialog">
                    <li>
                        <h3>¿Quieres casarte conmigo?</h3>
                        <h4>¿Quieres casarte conmigo?</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button class="cancel">Accept</button> <button class="next">Accept</button>
                    </li>
                    <li>
                        <h3>¿Quieres casarte conmigo?</h3>
                        <h4>¿Quieres casarte conmigo?</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button class="cancel">Accept</button> <button class="next">Accept</button>
                    </li>
                    <li>
                        <h3>¿Quieres casarte conmigo?</h3>
                        <h4>¿Quieres casarte conmigo?</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button class="cancel">Accept</button> <button class="next">Accept</button>
                    </li>
                </ul>
           </div>
        );
    }
}
export default Module;

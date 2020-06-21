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
           
            <div className="Color">
                <input type="color" defaultValue="#ffffff" />
                <div></div>
                <span>rgb(255, 255, 255)</span>
        
        <input class="inp" type="range" id="inp1" min="0" max="360" value="331" draggable="false" />
        <input class="inp" type="range" id="inp2" min="0" max="100" value="100" draggable="false" />
        <input class="inp" type="range" id="inp3" min="0" max="100" value="50" draggable="false" />
   
</div>
        );
    }
}
export default Module;

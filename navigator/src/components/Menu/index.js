import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            item:[
                {"text":"Logotype",'type':'logotype'},
                {"text":"Home",'icon':'home'},
                {"text":"Components",'icon':'newspaper',"child":[
                    {"text":"Home",'icon':'home'},
                    {"text":"About",'icon':'home'},
                    {"text":"Contact",'icon':'home'},
                ]}
            ]
        }
    }
    
    renderVertical(items){
        return(<ol>
            {this.renderItems(items,'vertical')}            
        </ol>)
    }
    renderHorizontal(items){
        return(<ul>
            {this.renderItems(items,'horizontal')}            
        </ul>)
    }
    renderItems(items,mode){
        return(<React.Fragment>
            {items.map((a, index) => {
                if(a.type && a.type === 'logotype')   {
                    if(this.props.logotype){
                        return (
                            <li>
                                <h1><a href="#test">{a.text}</a></h1>
                             </li>
                         );
                    }
                    else return false
                    
                }
                else{
                    return (
                        <li>
                            <a href="#test">
                                {(a.icon && this.props.icons)?<i className={"las la-"+a.icon}></i>:false} {a.text} {(this.props.arrows)?<i className={"las la-angle-right"}></i>:false}
                            </a>
                            {(a.child && a.child.length && mode === 'vertical')?this.renderVertical(a.child,mode):''}
                            {(a.child && a.child.length && mode === 'horizontal')?this.renderHorizontal(a.child,mode):''}
                         </li>
                     );
                }
            })}
        </React.Fragment>)
    }
    render() {
        return (
            <React.Fragment>
                <nav role="navigation" className="Menu">
                    {(this.props.vertical)?this.renderVertical(this.state.item):this.renderHorizontal(this.state.item)}
                    {(this.props.vertical || this.props.constructor)?false:<div className="Placeholder"></div>}
                </nav>
                <div className="Placeholder"></div>
            </React.Fragment>
        );
    }
}
export default Module;

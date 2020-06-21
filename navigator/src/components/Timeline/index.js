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
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "/script/Tabs.js";
        script.async = true;
    
        document.body.appendChild(script);
        script.onload = function() {
            window.Tabs();
          };
        
    }
    renderMenu(items){
       

        return(<React.Fragment>
            {items.map((a, index) => {
                return (<React.Fragment>
                    <input type="radio" id={'radio-'+index} checked={(a.active)?'checked':''} name={'tab'}  value={index} />
                    <label for={'radio-'+index}>
                        {(this.props.icons)?<i className={'la la-home'}></i>:false}
                        <b>{a.name}</b>
                        {(this.props.descriptions)?<p>Lorem ipsum dolor sit amet</p>:false}
                    </label>
                    <div>
                        <div className="Placeholder"></div>
                    </div>
                    </React.Fragment>
                );
            })}
        </React.Fragment>)
    }
    render() {
        return (
            <div className="Tabs">
                {this.renderMenu(this.state.item)}
            </div>
        );
    }
}
export default Module;

import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            item:[
                {"name":"Account",active:true,"detail":"Personal Data","icon":"user-circle"},
                {"name":"Links","detail":"Social Profiles","icon":"external-link-square-alt"}
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
                        {(this.props.icons)?<i className={'la la-'+a.icon}></i>:false}
                        <b>{a.name}</b>
                        {(this.props.descriptions)?<p>{a.detail}</p>:false}
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

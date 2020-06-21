import React, { Component } from 'react';

class Module extends Component {
    constructor(props){
        super(props);
        this.state={options : this.props.item.option}
    }

    render() {
        let options = this.state.options;
        return (
            <div className="Options">
                 {
                    Object.keys(options).map((key, index) => (
                        <span key={this.props.item.path+'-'+index} className={(options[key] === true)?'Component-options-active':''} onClick={()=>{
                            let r = options;
                            if(options[key] instanceof Object){
                            return false;
                            }
                            else {
                                if(options[key] === true){options[key]=false}else{options[key]=true}
                            }
                            this.setState({options:r});
                            this.props.setOptions(r);
                        }}>{(options[key] instanceof Object)?<React.Fragment>
                            {
                                Object.keys(options[key]).map((s, g) => (
                                <b className={(options[key][s])?'Component-options-active':false} onClick={()=>{
                                    let rs = options;
                                    Object.keys(options[key]).map((s, g) => {
                                        options[key][s] = false;
                                        return false;
                                    });
                                    
                                    options[key][s] = true;
                                    this.setState({options:rs});
                                }}>{s}</b>
                                ))
                            }
                        </React.Fragment>:key}</span>))}
            </div>
        );
    }
}
export default Module;
import React, { Component } from 'react';

class Module extends Component {
    constructor(props){
        super(props);
        this.state={filter:'normal'}
    }
    counter(version) {
        let items = this.props.items;
        if(!items)return 0;
        if (version === 'all' && items) {
            return items.length;
        }
        else if (version && items) {
            let counter = 0;
            items.filter((item) => {
                if(item['version'] && item['version'].substring(0, 1) === version){
                    counter++;
                }
                return true;
            });
            return counter;
        } else {
            return 0;
        }
    }
    setFilter(f){
        let b = document.body;
        if(b.filter)document.body.classList.remove(b.filter);
        let c = 'filter-'+f;
        this.setState({filter:f})
        b.filter = c;
        b.classList.add(c);
    }
    render() {
        return (
            <React.Fragment>
                
                <s>Components selected <b>0</b></s>
                <div class="filters">
                <div className={(this.state.filter==='invert')?'active':''} onClick={()=>{this.setFilter('invert');}}>BLACK</div>
                <div className={(this.state.filter==='hacker')?'active':''} onClick={()=>{this.setFilter('hacker');}}>HACKER</div>
                <div className={(this.state.filter==='antiq')?'active':''} onClick={()=>{this.setFilter('antiq');}}>ANTIQ</div>
                <div className={(this.state.filter==='horror')?'active':''} onClick={()=>{this.setFilter('horror');}}>HORROR</div>
                <div className={(this.state.filter==='destroy')?'active':''} onClick={()=>{this.setFilter('destroy');}}>DESTROY</div>
                <div className={(this.state.filter==='normal')?'active':''} onClick={()=>{this.setFilter('normal');}}>NORMAL</div>
                </div>
                <p>Do you want to add an amazing component? ... create an issue in the github repository.</p>
                <p>by <b>Salbatore Munuera</b> in 2020 in Madrid, Spain.<br/><br/>License: none (public domain)</p>
                <p style={{color:'#000'}}>We translate the design into HTML in a simplified way. This is a beta system built in June 2020.</p>
               
            </React.Fragment>
        );
    }
}
export default Module;

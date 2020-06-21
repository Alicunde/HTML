import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            item:[
                {"text":"Pablo","description":"Picasso","value":"basic",check:true},
                {"text":"Édouard","description":"Manet","value":"elegant"},
                {"text":"Gustave","description":"Caillebotte","value":"hack"},
                {"text":"René","description":"Magritte","value":"data"},
                {"text":"Salvador","description":"Dalí","value":"old"},
                {"text":"Edgar","description":"Degas","value":"dark"},
                {"text":"Edward","description":"Hopper","value":"glossy"},
                {"text":"Wassily","description":"Kandinsky","value":"block"},
            ]
        }
    }
    renderItems(items){
        return(<React.Fragment>
            {items.map((a, index) => {
                return (
                        <input type="radio" title={a.text} checked={(a.check)?'true':false} name="selector" />
                );
            })}
        </React.Fragment>)
    }
    renderItemsBackgrounds(items){
        return(<React.Fragment>
            {items.map((a, index) => {
                return (
                     <input type="radio" style={{backgroundImage:'url(/components/Selector/images/'+index+'.jpg)'}} title={a.text} checked={(a.check)?'true':false} name="selector" />
                );
            })}
        </React.Fragment>)
    }
    render() {
        return (
            <div className="Selector">
                {(this.props.images)?this.renderItemsBackgrounds(this.state.item):this.renderItems(this.state.item)}
            </div>
        );
    }
}
export default Module;

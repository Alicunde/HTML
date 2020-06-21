import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            item:[
                {"name":"Spain","detail":"46.791.000 inhabitants"},
                {"name":"France","detail":"65.236.000 inhabitants"},
                {"name":"Germany","detail":"83.082.000 inhabitants"}
            ]
        }
    }
    componentWillReceiveProps(){
        console.log('props accordion');
    }
    renderItems(items){
        return(<ul>
            {items.map((a, index) => {
                return (
                    <li key={'Accordion-'+index}>
                        <input type="checkbox" id={'accordion-'+index} />
                        <label htmlFor={'accordion-'+index}>
                            {a.name} {(this.props.descriptions)?<i>{a.detail}</i>:false}
                            {(this.props.links)?<a href="/">Read more</a>:false}
                        </label>
                        <div>
                            <div className="Placeholder" />
                        </div>
                    </li>
                );
            })}
        </ul>)
    }
    render() {
        console.log('Render Accordion');
        console.log(this.props);
        return (
            <div className="Accordion">
                {this.renderItems(this.state.item)}
            </div>
        );
    }
}
export default Module;

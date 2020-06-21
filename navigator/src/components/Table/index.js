import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            items:[
                {"id":"23","name":"Maria Prado","price":"23.00"},
                {"id":"23","name":"Maria Prado","price":"23.00"},
                {"id":"23","name":"Maria Prado","price":"23.00"},
                {"id":"23","name":"Maria Prado","price":"23.00"},
                {"id":"23","name":"Maria Prado","price":"23.00"}
            ]
        }
    }
    render() {
        
        let cols = 0;
        if(this.props.id)cols++;
        if(this.props.price)cols++;
        if(this.props.trash)cols++;
        if(this.props.edit)cols++;
        return (
            <div className="Table">
                <table cellSpacing={'0'}>
                    {(this.props.head)?
                    <thead>
                    <tr>
                        {(this.props.id)?<th>ID</th>:false}
                        {(this.props.edit)?<th><i className={'pencil'}></i></th>:false}
                        {(this.props.trash)?<th><i className={'trash'}></i></th>:false}
                        <th>Name</th>
                        {(this.props.price)?<th>Price</th>:false}
                    </tr>
                    </thead>:false}
                    <tbody>
                    {this.state.items.map((a, index) => {
                        return (
                            <tr>
                                {(this.props.id)?<td style={{width:'1%'}}><strong>#{a.id}</strong></td>:false}
                                {(this.props.edit)?<td style={{width:'1%'}}><a href="/#test"><i class="las la-pencil-alt"></i></a></td>:false}
                                {(this.props.trash)?<td style={{width:'1%'}}><del><a href="/#test"><i className={'las la-trash'}></i></a></del></td>:false}
                                <td style={{width:'auto'}}><span>{a.name}</span></td>
                                {(this.props.price)?<td style={{width:'1%'}}><em>{a.price} €</em></td>:false}
                            </tr>
                        );
                    })}
                    </tbody>
                    {(this.props.footer)?<tfoot>
                        <tr>
                            <th colSpan={cols}><span>Total</span></th>
                            <th><em>23.400 €</em></th>
                        </tr>
                    </tfoot>:false}
                </table>
            </div>
        );
    }
}
export default Module;

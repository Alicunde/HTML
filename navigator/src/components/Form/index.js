import React, { Component } from 'react';
import Input from './../Input';
import Textarea from './../Textarea';
import Select from './../Select';
import Selector from './../Selector';
import Checkbox from './../Checkbox';
import Radio from './../Radio';
import Password from './../Password';
import Search from './../Search';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            item:[
                {"legend":"Name",'type':'name','icon':'home'},
                {"legend":"Name",'type':'input','icon':'home'},
                {"legend":"Name",'type':'textarea','icon':'home'},
                {"legend":"Name",'type':'select','icon':'home'},
                {"legend":"Name",'type':'selector','icon':'home'},
                {"legend":"Name",'type':'checkbox','icon':'home'},
                {"legend":"Name",'type':'radio','icon':'home'},
                {"legend":"Name",'type':'password','icon':'home'},
                {"legend":"Name",'type':'search','icon':'home'},
            
            ]
        }
    }

    render() {
  
        return (
            <div className="Profiles">
                <form>
                    {this.state.item.map((a, index) => {
                    
                        return (
                            <React.Fragment>
                                {(a.type ==='input')?<Input legend={(this.props.legends)?a.legend:false} />:false}
                                {(a.type ==='name')?<div><Input legend={(this.props.legends)?'Name':false}  /><Input legend={(this.props.legends)?'Surname':false}  /></div>:false}
                                {(a.type ==='textarea')?<Textarea />:false}
                                {(a.type ==='select')?<Select />:false}
                                {(a.type ==='selector')?<Selector />:false}
                                {(a.type ==='checkbox')?<Checkbox />:false}
                                {(a.type ==='radio')?<Radio />:false}
                                {(a.type ==='password')?<Password />:false}
                                {(a.type ==='search')?<Search />:false}
                                
                                </React.Fragment>
                        )
                })}
                    
                </form>
            </div>
        );
    }
}
export default Module;

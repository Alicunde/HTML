import React, { Component } from 'react';
import './index.css';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { NavLink } from "react-router-dom";
    

class Module extends Component {
    constructor(props) {
        super(props);
       
    }
    renderText(t){
        let newText = t.split('\n').map((item, i) => {
            return <p key={i}>{item}</p>;
        });
        return newText;
    }
    renderItems(items){
        return(<ul>
            {items.map((a, index) => {
                
                return (
                    (a.path)?<li>
                        <NavLink  to={'/constructor/'+a.path}>
                            <img src={'/modules/'+a.path+'/cover.jpg'} />
                            <b>{a.title}</b>
                        </NavLink>
                    </li>:false
                );
            })}
        </ul>)
    }
    render() {
        return (
            <React.Fragment>
             
<div className="Gallery">
                {(this.props.items)?this.renderItems(this.props.items):false}
            </div>
            </React.Fragment>
           
        );
    }
}
export default Module;

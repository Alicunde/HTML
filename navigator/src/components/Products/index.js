import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            items:[
                {"price":"2383.30","discount":"10","total":"1723.30","name":"Kensington","description":"2 colors"},
                {"price":"2383.30","discount":"10","total":"1723.30","video":true,"name":"Heritage","description":"1 color"},
                {"price":"2383.30","discount":"10","total":"1723.30","name":"Coat Camden","description":"6 colors"},
                {"price":"2383.30","discount":"10","total":"1723.30","name":"Wimbledon","description":"4 colors"},
            ]
        }
    }
    render() {
       

        return (
            <div className="Products">
                <ul>
                    {this.state.items.map((a, index) => {
                    return (
                        <li>
                            <a href="#test">
                                <picture title={a.discount}>
                                <img alt="Test" src={'/components/Products/images/'+(index+1)+'.jpg'} />
                                {(a.video)?<video   playsinline="playsinline" loop autoPlay muted="muted">
                                    <source src={'/components/Products/videos/2.mp4'} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                                    Video not supported.
                                </video>:false}
                                </picture>
                                {(this.props.brands)?<h4>Burberry</h4>:false}
                                {(this.props.titles)?<h3>{a.name}</h3>:false}
                                {(this.props.descriptions)?<p>{a.description}</p>:false}

                                {(this.props.prices)?<p>{(this.props.discounts)?<del>{a.price}</del>:false} {a.total} €</p>:false}
                            </a>
                    </li>
                    
                    );
                })}
                   
                </ul>
            </div>
        );
    }
}

export default Module;

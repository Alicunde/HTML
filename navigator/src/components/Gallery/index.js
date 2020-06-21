import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            items:[
                {"username":"Elon Musk","name":"Elon","img":"/images/Gallery/1"},
                {"username":"Elon Musk","name":"Elon","img":"https://images.unsplash.com/photo-1590114282882-f1400a1e5d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80"},
                {"username":"Elon Musk","name":"Elon","img":"https://images.unsplash.com/photo-1588774210246-a1dc467758df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3134&q=80"},
                {"username":"Elon Musk","name":"Elon","img":"https://images.unsplash.com/photo-1590114282882-f1400a1e5d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80"},
                {"username":"Elon Musk","name":"Elon","img":"https://images.unsplash.com/photo-1588774210246-a1dc467758df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3134&q=80"},
            ]
        }
    }
    render() {
        return (
            <div className="Gallery">
                <ul>
                    {this.state.items.map((a, index) => {
                        return (
                            <li>
                                {(this.props.zoom)?<i class="las la-expand"></i>:false}
                                <img alt="Test" src={'/components/Gallery/images/'+(index+1)+'.jpg'} />
                                {(this.props.title)?<b>Title</b>:false}
                                {(this.props.description)?<span>Description</span>:false}
                                {(this.props.link)?<a href="#test">Read more</a>:false}
                        </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Module;
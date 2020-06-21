import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            items:[
                {"name":"Document PDF","url":"/example.pdf"},
                {"name":"Image JPG","url":"/example.jpg"},
                {"name":"Document DOC","url":"/example.doc"},
                {"name":"Document EXCEL","url":"/example.excel"},
            ]
        }
    }
    render() {
        return (
            <div className="Space">
                {this.state.items.map((a, index) => {
                    return (
                        <a href={a.url}>{a.name}</a>
                    );
                })}
            </div>
        );
    }
}

export default Module;

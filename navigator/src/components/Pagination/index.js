import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        let empty = '';
        return (
            <div className="Pagination">
                {(this.props.counter)?<strong>10 pages</strong>:false}
                {(this.props.controls)?<a href="/#1">{empty}</a>:false}
                <a href="/#1">1</a>
                <a href="/#2" className="active">2</a>
                <a href="/#3">3</a>
                {(this.props.dots)?<span></span>:false}
                <a href="/#10">10</a>
                {(this.props.controls)?<a href="/#3">{empty}</a>:false}
            </div>
        );
    }
}

export default Module;

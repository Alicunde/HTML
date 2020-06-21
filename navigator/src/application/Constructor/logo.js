import React, { Component } from 'react';

class Module extends Component {
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
    render() {
        return (
            <React.Fragment>
                <s>Components selected <b>0</b></s>
                <p>by <b>Alicunde Systems</b> in 2020 in Madrid, Spain.<br/><br/>License: none (public domain)</p>
                <p style={{color:'#000'}}>We translate the design into HTML in a simplified way. This is a beta system built in June 2020.</p>
            </React.Fragment>
        );
    }
}
export default Module;

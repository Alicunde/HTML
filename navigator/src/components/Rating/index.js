import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            item:[
                {"legend":"Name",'type':'text','icon':'home'},
            
            ]
        }
    }

    render() {

        return (
            <div className="Rating">
                <b>Rating</b>
                <label for="rating-1">★</label>
                <input id="rating-1" name="rating" value="1"  type={'radio'} />
                <label for="rating-2">★</label>
                <input id="rating-2" name="rating" value="2"type={'radio'} />
                <label for="rating-3">★</label>
                <input id="rating-3" name="rating" value="3" checked type={'radio'} />
                <label for="rating-4">★</label>
                <input id="rating-4" name="rating" value="4" type={'radio'} />
                <label for="rating-5">★</label>
                <input id="rating-5" name="rating" value="5"type={'radio'} />
                <span></span>
            </div>
        );
    }
}
export default Module;

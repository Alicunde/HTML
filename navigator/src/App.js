// General
import React, { Component } from 'react';
// Router
import { Switch, Route as Rout } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

// Parts
import Styles from "./application/Styles";

// Sections
import Constructor from "./application/Constructor";
import Readme from "./application/Readme";

// Components
    let Form = require('./data/form.json');
    let Layout = require('./data/layout.json');
    let Graphic = require('./data/graphic.json');
    let List = require('./data/list.json');
    let Navigation = require('./data/navigation.json');
    let Data = require('./data/data.json');
    let Utilities = require('./data/utilities.json');
    let Experiments = require('./data/experiment.json');

class Apper extends Component {
    constructor(props) {
        super(props);
        let components = [];
        let Special = [
            {
                "title": "Special Mention"
            }];
         
        components = components.concat(Form,Graphic,List,Navigation,Data,Utilities,Layout,Experiments);
        components.map((a, index) => {
            if(a.special){
                var s = Object.assign({}, a);
                s.path = s.path+'-special';
                s.specialize = true;
                Special.push(s);
            }
            return false;
        });
        components = Special.concat(components);

        this.state = {
            theme: "basic",
            search: false,
            items: components
        };
    }
    render() {
        return (
            <div className="App">
                <Router history={createBrowserHistory}>
                    <Switch>
                        <Rout path="/readme">
                            <Readme items={this.state.items} />
                        </Rout>
                        <Rout>
                            <Styles theme={this.state.theme} setTheme={(e)=>{this.setState({theme:e})}}/>
                            <Constructor theme={this.state.theme} items={this.state.items} />
                        </Rout>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Apper;

import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <a style={{display:'block',position:'relative',overflow:'hidden', background:'#000'}} href="/components/Div/index.html" target="_blank" rel="noopener noreferrer">
                <img  alt="God Div" style={{width:'100%',opacity:'0.5'}} src="/components/Div/presentation.jpg" />
                <b style={{ color:'#000',background:'#fff', padding:'10px 20px',right:'0', position:'absolute',top:'50%'}}>OPEN COMPONENT</b>
            </a>
        );
    }
}

export default Module;

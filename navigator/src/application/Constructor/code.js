import React, { Component } from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
var beautify = require('js-beautify').html;

class Module extends Component {
    constructor(props) {
        super(props);
        this.state = {js:false,css:false,html:false}
    }
    async getFile(file,type) {
        try {
            file = file.replace("-special", "");

          const response =  await fetch(file);
          const text =  await response.text();
          console.log(text);
          if(type==='js')this.setState({js:text});
          if(type==='css')this.setState({css:text});
        } catch (error) {

        }
    }
    componentDidMount(){
        if(this.props.item.property.js){
            this.getFile('/components/'+this.props.item.path+'/script.js','js');
        }
        if(this.props.item.property.css){
            this.getFile('/components/'+this.props.item.path+'/style.css','css');
        }
        if(document.getElementById(this.props.item.path+'-iframe') && document.getElementById(this.props.item.path+'-iframe').contentWindow.document.getElementById('Component')){

        
        let html = document.getElementById(this.props.item.path+'-iframe').contentWindow.document.getElementById('Component').innerHTML;
        let html_string = beautify(html, {  inline:[],indent_size: 4, space_in_empty_paren: true });

        this.setState({html:html_string});
        }
    }
    render() {
        return (
            <div className="Code">
                {(this.state.html)?<p>HTML</p>:''}
                {(this.state.html)?<AceEditor
            markers={[{ startRow: 0, startCol: 2, endRow: 1, endCol: 20, className: 'error-marker', type: 'background' }]}
                mode="html"
                value={this.state.html}
                theme="monokai"
                fontSize={12}
                wrapEnabled={true}
                highlightActiveLine= {false}
                showGutter ={true}
                maxLines={1000000000}
                style={{width:'100%'}}

            />:''}
                {(this.state.css)?<p>CSS</p>:''}
                {(this.state.css)? <AceEditor
                mode="css"
                value={this.state.css}
                theme="monokai"
                fontSize={12}
                wrapEnabled={false}
                highlightActiveLine= {false}
                showGutter ={true}
                maxLines={1000000000}
                style={{width:'100%'}}

            />:''}
                {(this.state.js)?<p>JavaScript</p>:''}
                {(this.state.javascript)?<AceEditor
                mode="javascript"
                value={this.state.js}
                theme="monokai"
                fontSize={12}
                wrapEnabled={true}
                highlightActiveLine= {false}
                showGutter ={true}
                maxLines={1000000000}
                style={{width:'100%'}}

            />:''}
            </div>
        );
    }
}
export default Module;

import React, { Component } from 'react';
import Logo from './logo'
// Download
import JSZip from "jszip"
import { saveAs } from 'file-saver';
var beautify = require('js-beautify').html;

class Module extends Component {
    bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
     }
     
    async getFile(file) {
        try {
            file = file.replace("-special", "");
          const response = await fetch(file);
          const text = await response.text();
          return text
        } catch (error) {
          alert("error");
        }
    }
    download(){
        var zip = new JSZip();
        // let html = '<h1>23</h1>';
        // let html_size = this.bytesToSize(new Blob([html]).size);
        // console.log(html_size);
        let readme = this.getFile('/readme.md');
        zip.file("readme.md", readme);
        let i = 0;
        let all_html = '';
        let all_css ='';
        let all_js ='';
        
        while(i < this.props.selected.length){

            let x = this.props.selected[i];
            let css = this.getFile('/components/'+x.path+'/style.css');
            let html_structure = '<!DOCTYPE html><html><head><meta charset="utf-8" /><title>'+x.path+'</title>  <link rel="stylesheet" href="style.css"></head><body>'+x.html;
            if(x.property && x.property.js){
                all_js += '<script src="'+x.path+'/script.js"></script>';
                html_structure += '<script src="script.js"></script>';
            }
            html_structure += '</body></html>';
            let html_string = beautify(html_structure, {extra_liners:[],indent_inner_html:true,inline:[],indent_size: 4, space_in_empty_paren: true });
            all_html += '<li><h2>'+x.path+'</h2>'+x.html+'</li>';
            all_css += '<link rel="stylesheet" href="'+x.path+'/style.css">';
            zip.folder(x.path).file("index.html", html_string);
            zip.folder(x.path).file("style.css", css);
            if(x.property && x.property.js){
                let script = this.getFile('/components/'+x.path+'/script.js');
                zip.folder(x.path).file("script.js", script);
            }
            i++;
        }
        all_html = '<ul>'+all_html+'</ul>';
        let total = '<!DOCTYPE html><html><head><meta charset="utf-8" /><title>HTML</title>'+all_css+'<link rel="stylesheet" href="style.css">'+all_js+'</head><body>'+all_html+'</body></html>';

        let all_html_string = beautify(total, {extra_liners:[],indent_inner_html:true,inline:[],indent_size: 4, space_in_empty_paren: true });
        let render_css =  this.getFile('/styles/render.css');
        zip.file("style.css", render_css);
        zip.file("index.html", all_html_string);
        console.log(zip);
        zip.generateAsync({type:"blob"}).then(function(content) {
            // see FileSaver.js
            saveAs(content, "HTML.zip");
        });
    }
    unselectAdd(path){
        this.props.items.map((a, index) => {
            if(a.path === path){
                a.add = false;
            }
            if(a.path === path+'-special'){
                a.add = false;
            }
            return true;
        });
    }
    render() {
        return (
            <ol>
                {this.props.selected.map((a, index) => {
                    return (
                        <li key={'selected-'+index}>
                            <b>{a.name}
                             <span>HTML</span>
                             {(a.property && a.property.css)?<span>CSS</span>:''}
                             {(a.property && a.property.js)?<span>JS</span>:''}
                             </b>
                            
                            <del onClick={()=>{ let x = this.props.selected; this.unselectAdd(x[index].path); delete(x[index]);console.log(x);
                            var xx = x.filter(function (el) {
  return el != null;
}); this.props.setSelected(xx); }}></del>
                           
                        </li>
                    );
                })}
                {(this.props.selected && this.props.selected.length >0)?<li><span onClick={()=>{this.download()}}>Download</span></li>:<li><Logo items={this.props.items}/></li>}
            </ol>
        );
    }
}
export default Module;

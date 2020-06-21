import React, { Component } from 'react';
const ReactMarkdown = require('react-markdown')

// Download
class Module extends Component {
   constructor(props){
       super(props);
       this.state={readme:''}
   }
   async getReadme(file) {
    try {
      const response = await fetch(file);
      const text = await response.text();
      this.setState({readme:text});
    } catch (error) {
      alert("error");
    }
}

componentDidMount(){
        this.getReadme('/components/'+this.props.item.path.replace("-special", "")+'/README.md');
       
}
    render() {
        return (
            <div>
                <div>
                    <ReactMarkdown source={this.state.readme} />
                </div>
                {(this.props.item.screenshot)?<div className="Screenshots">
                    <b>Screenshots</b>
                    {(this.props.item.screenshot.chrome)?<p><b>Chrome</b><img alt="Chrome" src={'/components/'+this.props.item.path.replace("-special", "")+'/screenshots/chrome.png'} /></p>:false}
                    {(this.props.item.screenshot.firefox)?<p><b>Firefox</b><img alt="Firefox" src={'/components/'+this.props.item.path.replace("-special", "")+'/screenshots/firefox.png'} /></p>:false}
                    {(this.props.item.screenshot.opera)?<p><b>Opera</b><img alt="Opera" src={'/components/'+this.props.item.path.replace("-special", "")+'/screenshots/opera.png'} /></p>:false}
                    {(this.props.item.screenshot.safari)?<p><b>Safari</b><img alt="Safari" src={'/components/'+this.props.item.path.replace("-special", "")+'/screenshots/safari.png'} /></p>:false}
                </div>:false}
            </div>
        );
    }
}
export default Module;

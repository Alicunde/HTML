
import React from 'react'
import ReactDOM from 'react-dom';
import { iframeResizer as iframeResizerLib } from 'iframe-resizer';
const ReactDOMServer = require('react-dom/server');

class IframeResizer extends React.Component {

  componentDidMount() {
    // can't update until we have a mounted iframe
    this.updateIframe(this.props);
    this.resizeIframe(this.props);
  }
  componentWillUnmount() {
    // React will remove the iframe, however we need to manually
    // call iframe-resizer to stop its listeners
    const iframeResizer = document.getElementById(this.props.component.path+'-iframe').iFrameResizer
    iframeResizer && iframeResizer.removeListeners();
  }
  componentWillReceiveProps(nextProps) {
    // can replace content if we got new props
    console.log(nextProps);
    // this.updateIframe(nextProps);
    // this.resizeIframe(nextProps);
  }
  updateIframe = (props) => {
    // has src - no injected content
    if (props.src) return;
    // do we have content to inject (content or children)
    const content = ReactDOMServer.renderToStaticMarkup(props.children);
    ;
    if (!content) return;
    // get frame to inject into
    const frame = document.getElementById(this.props.component.path+'-iframe');
    
    if (!frame) return;
    
    // verify frame document access
    // Due to browser security, this will fail with the following error
    //   Uncaught DOMException: Failed to read the 'contentDocument' property from 'HTMLIFrameElement':
    //   Blocked a frame with origin "http://<hostname>" from accessing a cross-origin frame.
    // resolve this by loading documents from the same domain name,
    // or injecting HTML `content` vs. loading via `src`
    const doc = frame.contentDocument;
    if (!doc) return;
    // replace iframe document content
    if (typeof content === 'string') {
      // assume this is a HTML block
      //   we could send this in via REACT dangerously set HTML
      //   but we are in an iframe anyway, already a red-headed step-child.
      doc.open();
      doc.write(content);
      doc.close();
    } else {
      // assume this is a REACT component
      doc.open();
      doc.write('<div id="iframe-root"></div>');
      doc.close();
      ReactDOM.render(content, doc.getElementById('iframe-root'));
      this.insertScriptIntoHead();
    }
  }
   insertScriptIntoHead= () =>{
     return false;
    // const frame = this.refs.frame;
    // var head = frame.contentDocument.getElementsByTagName('head')[0];
    // var script = frame.contentDocument.createElement('script');
    // script.src = '/script/'+this.props.component.path+'.js';
    // script.type = 'text/javascript';
    // head.appendChild(script);
}
  // inject the iframe resizer "content window" script
  injectIframeResizerUrl = () => {
      console.log("hola");
    if (!this.props.iframeResizerUrl) return;
    const frame = document.getElementById(this.props.component.path+'-iframe');
    if (!frame) return;
    console.log("hola1");
    // verify frame document access
    // Due to browser security, this will fail with the following error
    //   Uncaught DOMException: Failed to read the 'contentDocument' property from 'HTMLIFrameElement':
    //   Blocked a frame with origin "http://<hostname>" from accessing a cross-origin frame.
    // resolve this by loading documents from the same domain name,
    // or injecting HTML `content` vs. loading via `src`
    const doc = frame.contentDocument;
    if (!doc) return;
    console.log("hola3");
    // where can we insert into? (fail into whatever we can find)
    let injectTarget = null;
    ['head', 'HEAD', 'body', 'BODY', 'div', 'DIV'].forEach(tagName => {
      if (injectTarget) return;
      const found = doc.getElementsByTagName(tagName);
      if (!(found && found.length)) return;
      injectTarget = found[0];
    });
    if (!injectTarget) {
        console.log("hola5");
      console.error('Unable to inject iframe resizer script');
      return;
    }
    const resizerScriptElement = document.createElement('script');
    resizerScriptElement.type = 'text/javascript';
    resizerScriptElement.src = this.props.iframeResizerUrl;
    injectTarget.appendChild(resizerScriptElement);
  }
  onLoad = () => {
    this.injectIframeResizerUrl();
    console.log(this.s);
    if(document.getElementById(this.props.component.path+'-iframe'))document.getElementById(this.props.component.path+'-iframe').iFrameResizer.resize();
    setTimeout(() => {
      if(document.getElementById(this.props.component.path+'-iframe')){
      let space = document.getElementById(this.props.component.path+'-iframe').contentWindow.document.getElementById('Component');
      if(space){
        let x = {childs:space.getElementsByTagName('*').length-1}
        this.props.setLoading(x);
      }
      else{
        this.props.setLoading(false);
      }
    }
      
    }, 1000);
    
   
    
      return false;
    
   
    
    // DISABLED because it's causing a loading loop :(
    // if (this.props.onIframeLoaded) this.props.onIframeLoaded();
    
  }
  resizeIframe = (props) => {
    const frame = document.getElementById(this.props.component.path+'-iframe');
    if (!frame) return;
    if (props.iframeResizerEnable) {
      this.s = iframeResizerLib({
        log: false, autoResize: true, checkOrigin: false, resizeFrom: 'parent', heightCalculationMethod: 'taggedElement'
       
        // initCallback: () => { console.log('ready!'); },
        // resizedCallback: () => { console.log('resized!'); },
      }, frame);
    }
  }
  resizeOut = (props) => {
      console.log(4);
      document.getElementById(this.props.component.path+'-iframe').iFrameResizer.resize();
  }
  getBody = (props) => {
      console.log(this.s[0].contentDocument);
    return document.getElementById(this.props.component.path+'-iframe').contentDocument.getElementById('Component');
}
printer = (props) => {
    document.getElementById("Iframe-Alert").contentWindow.print();


}

  render() {
    const { src,  frameBorder, className, style } = this.props;
    return (
      <iframe
        id={this.props.component.path+'-iframe'}
        title="s"

        src={src}
        layout="responsive"
        frameBorder={frameBorder}
        className={className}
        style={style}
        onLoad={this.onLoad}
      />
    );
  }
}

IframeResizer.defaultProps = {
  // resize iframe
  iframeResizerEnable: true,
  iframeResizerOptions: {
    log: true,
    // autoResize: true,
    // checkOrigin: false,
    // resizeFrom: 'parent',
    heightCalculationMethod: 'max',
    // initCallback: () => { console.log('ready!'); },
    // resizedCallback: () => { console.log('resized!'); },
  },
  iframeResizerUrl: 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.8/iframeResizer.contentWindow.min.js',
  // misc props to pass through to iframe
  frameBorder: 0,
  style: {
    opacity:1,
    width: '100%',
  },
};

export default IframeResizer;
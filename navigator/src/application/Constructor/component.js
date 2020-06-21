// General
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
// Functions
import Split from 'react-split'
import Iframe from './iframe'
// Parts
import Code from './code'
import Options from './options'
import Readme from './readme'

// Navigation


import Track from '../../components/Track'
import Progress from '../../components/Progress'
import Dropdown from '../../components/Dropdown'
import Selector from '../../components/Selector'
import Select from '../../components/Select'
import Checkbox from '../../components/Checkbox'
import Rating from '../../components/Rating'
import Autocomplete from '../../components/Autocomplete'
import Textarea from '../../components/Textarea'
import Input from '../../components/Input'
import Color from '../../components/Color'
import Submit from '../../components/Submit'
import Radio from '../../components/Radio'
import Range from '../../components/Range'
import Limit from '../../components/Limit'
import Ranges from '../../components/Ranges'
import Opter from '../../components/Opter'
import Danger from '../../components/Danger'
import Switch from '../../components/Switch'
import Explorer from '../../components/Explorer'
import Colored from '../../components/Colored'
import Number from '../../components/Number'
import Password from '../../components/Password'
import Search from '../../components/Search'
import Grid from '../../components/Grid'
import Alert from '../../components/Alert'
import Message from '../../components/Message'
import Slogan from '../../components/Slogan'
import Tooltip from '../../components/Tooltip'
import Loader from '../../components/Loader'
import Shadows from '../../components/Shadows'
import Blur from '../../components/Blur'
import Background from '../../components/Background'
import Filterable from '../../components/Filterable'
import List from '../../components/List'
import Comments from '../../components/Comments'
import Gallery from '../../components/Gallery'
import Bricks from '../../components/Bricks'
import Articles from '../../components/Articles'
import Products from '../../components/Products'
import Timeline from '../../components/Timeline'
import Profiles from '../../components/Profiles'
import Table from '../../components/Table'
import Chat from '../../components/Chat'
import Button from '../../components/Button'
import Target from '../../components/Target'
import Tabs from '../../components/Tabs'
import Accordion from '../../components/Accordion'
import Modal from '../../components/Modal'
import Choice from '../../components/Choice'
import Cart from '../../components/Cart'

import Carrousel from '../../components/Carrousel'
import Slide from '../../components/Slide'
import Foot from '../../components/Foot'
import Pagination from '../../components/Pagination'
import Menu from '../../components/Menu'
import Breadcrumb from '../../components/Breadcrumb'
import Buttons from '../../components/Buttons'
import Text from '../../components/Text'
import Article from '../../components/Article'
import Product from '../../components/Product'
import Profile from '../../components/Profile'
import Card from '../../components/Card'
import Prices from '../../components/Prices'
import Meter from '../../components/Meter'
import Counter from '../../components/Counter'
import Steps from '../../components/Steps'
import Clearfix from '../../components/Clearfix'
import Hover from '../../components/Hover'
import Pixelate from '../../components/Pixelate'
import Circle from '../../components/Circle'
import Layout from '../../components/Layout'

const components = {Layout,Pixelate,Circle,Track,Hover,Steps,Cart,Choice,Progress,Dropdown,Selector,Select,Checkbox,Rating,Autocomplete,Textarea,Input,Color,Submit,Radio,Range,Limit,Ranges,Opter,Danger,Switch,Explorer,Colored,Number,Password,Search,Grid,Alert,Message,Slogan,Tooltip,Loader,Shadows,Blur,Background,Filterable,List,Comments,Gallery,Bricks,Articles,Products,Timeline,Profiles,Table,Chat,Button,Target,Tabs,Accordion,Modal,Carrousel,Slide,Foot,Pagination,Menu,Breadcrumb,Buttons,Text,Article,Product,Profile,Card,Prices,Meter,Counter,Clearfix,}; 
class Module extends Component {
    constructor(props) {
        super(props);
        this.addRef = React.createRef();
        
        this.myRef = React.createRef();
        this.state={readme:'',status:false,changes:0,options:this.props.item.option,section:'information'}
    }
   
    
    componentDidMount(){
        let that= this;
       let t = (this.props.location.pathname === "/"+this.props.item.path);
       
        if(this.props.item.path === 'Selector-special' && (this.props.location.pathname ==='/' || this.props.location.pathname===''))t = 1;
        else if(this.props.item.specialize)return false;
        if(t){
            
            setTimeout(() => {

                that.setState({status:true});
                if(t === 1)return false;
                    const yOffset = -70; 
                    const element = document.getElementById('component-'+this.props.item.path);
                    if(element && window){
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({top: y, behavior: 'smooth'});
                    }
            }, 400);
        }
    }

    resizeFinish(){
       this.myRef.current.resizeOut();
        let item = this.props.item;
        let x = document.getElementById('Resize-space-'+item.path).offsetWidth;
        document.getElementById('Resize-width-'+item.path).innerHTML=''+x+'<b>PX</b>';
    }

    render() {
        const font = "body{font-family:'"+this.props.font+"', sans-serif }";
        let Rendering = false;
        let item = this.props.item;
        if(components[item.path.replace("-special", "")]) Rendering = components[item.path.replace("-special", "")] 
        return (
            <div id={'component-'+item.path} className={(this.state.status)?'active':''}>
                <p onClick={()=>{    if(this.state.status){this.props.history.push('/');}else{this.props.history.push('/'+item.path.replace("-special", ""));} this.setState(prevState => ({loading:true,status: !prevState.status}));}}>
                    <b><strong><b>{item.name}</b></strong> <u title={(item.version)?item.version:0}>{(item.version)?item.version:0}</u></b>
                    <em title={(item.rules)?Object.keys(item.rules).length:0}><b>{(item.rules)?Object.keys(item.rules).length:0}</b> rules</em>
                    <em title={(item.option)?Object.keys(item.option).length:0}><b >{(item.option)?Object.keys(item.option).length:0}</b> options</em>
                    <span>
                        {(item.property && item.property.icon)?<b>Icon</b>:<i>Icon</i>}
                        {(item.property && item.property.js)?<b>JS</b>:<i>JS</i>}
                        {(item.property && item.property.css)?<b>CSS</b>:<i>CSS</i>}
                        {(item.property && item.property.print)?<b>Print</b>:<i>Print</i>}
                        {(item.property && item.property.responsive)?<b>Responsive</b>:<i>Responsive</i>}
                    </span>
                </p>
                {(this.state.status  && this.state.loading === false)?<strong ref={this.addRef} className={(this.state.addDuplicate)?'Add Add-duplicate':'Add'} onClick={(e)=>{ 
                    if(item.add){
                        this.setState({addDuplicate:true});
                        setTimeout(() => {
                            this.setState({addDuplicate:false});

                        }, 2000);
                        return false;
                    }
                    
                    e.stopPropagation();
                        let html = document.getElementById(item.path+'-iframe').contentWindow.document.getElementById('Component').innerHTML;
                        item.theme=this.props.theme;
                        var item_clone = Object.assign({}, item);
                        item_clone.html=html;
                        item_clone.path = item_clone.path.replace("-special", "")

                        

                        this.props.addComponent(item_clone)
                    }}></strong>:false}
                {(this.state.status && item.option)?<Options setOptions = {(e)=>{ console.log(e); let c = this.state.changes+1; this.setState({loading:true,options:e,changes:c}); }} item = {item} />:false}
                {(this.state.status && this.state.loading === true)?<div className="loading">Rendering</div>:false}
                {(this.state.status)?<div style={{display:(this.state.loading)?'none':'block'}}>
                    <div>
                        <div id={'Resize-width-'+item.path} className={'Resize-width'}>100<b>%</b></div>
                        <div className="Resize-line"></div>
                        <div className={'Resize'}>
                            <Split className="flex" sizes={[100, 0]} minSize={0} expandToMin={false} gutterSize={20} gutterAlign="center" snapOffset={0} dragInterval={1} onDrag={()=>{ this.resizeFinish()}} direction="horizontal" cursor="col-resize">
                                <div style={{padding:10,backgroundColor:'#fff'}}>
                                    <div style={{borderWidth:1,borderStyle:'dashed',borderColor:'#ddd'}} key={item.path+'-'+this.state.changes} id={'Resize-space-'+item.path}>
                                        <Iframe setLoading={(e)=>{ this.setState({loading:false,childs:e.childs})}} id={'Iframe-'+item.path} name={'Iframe-'+item.path}  ref={this.myRef} component={item} >
                                            <html>
                                                <head>
                                                    <title>{item.name}</title>
                                                    <link href={"/components/Reset/style.css"} rel="stylesheet" />
                                                    <link href={"/components/"+item.path.replace("-special", "")+"/style.css"} rel="stylesheet" />
                                                    {(this.props.theme==='basic')?'':<link href={"/components/"+item.path.replace("-special", "")+"/style.css"} rel="stylesheet" />}
                                                    {(this.props.fontx === 'Roboto')?<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>:''}
                                                    {(this.props.fontx === 'Martel')?<link href="https://fonts.googleapis.com/css2?family=Martel:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet"></link>:''}
                                                    {(this.props.fontx === 'Raleway')?<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>:''}
                                                    {(this.props.fontx === 'Quicksand')?<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>:''}
                                                    {(this.props.fontx === 'Montserrat')?<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>:''}
                                                    {(this.props.fontx === 'Open Sans')?<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>:''}
                                                    {(item.property && item.property.js)?<script type="text/javascript" src={'/components/'+item.path.replace("-special", "")+'/script.js'}></script>:''}
                                                    {(item.property && item.property.icon)?<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />:''}
                                                   
                                                    {(item.css)? Object.keys(item.css).map((a, index) => {
                                
                                return (
                                    <link href={"/components/"+a+"/basic.css"} rel="stylesheet" />
                                );
                            }):false}
                                                         <style dangerouslySetInnerHTML={{ __html: font }} />
                                                    {(item.property && item.property.placeholder)?<link href={"/components/"+item.path.replace("-special", "")+"/placeholder.css"} rel="stylesheet" />:''}

                                                </head>
                                                <body>
                                                    <div id="Component">
                                                        {(Rendering)?<Rendering {...this.state.options} />:false}
                                                    </div>
                                                    <div data-iframe-height={'true'}></div>
                                                </body>
                                            </html>
                                        </Iframe>
                                    </div>
                                </div>
                                <div></div>
                            </Split>
                        </div>
                    </div>
                    <p className="Detail"><span><b>Iframe</b> with responsive properties</span> · <b>{this.state.childs}</b> HTML CHILDS</p>
                    <ol>
                        <li onClick={()=>{ this.setState({section:'information'});}} className={(this.state.section==='information')?'active':''}><b>Information</b></li>
                        <li onClick={()=>{ this.setState({section:'code'});;}} className={(this.state.section==='code')?'active':''}><b>Code</b></li>
                        <li onClick={()=>{  document.getElementById(item.path+'-iframe').focus(); document.getElementById(item.path+'-iframe').contentWindow.print(); }} className={(this.state.section==='print')?'active':''}><b>Print</b></li>
                        <li style={{display:'none'}}  className={(this.state.section==='bug')?'active':''}><a href="https://github.com/Alicunde/html/issues/new" target="_blank" rel="noopener noreferrer">Bug ?</a></li>
                        <li style={{display:'none'}} ><a href="https://github.com/Alicunde/html/" target="_blank" rel="noopener noreferrer">Github</a></li>
                    </ol>
                    <div>
                        {(this.state.section==='code')?<Code theme={this.props.theme} item={item}/>:<div className="Information"><Readme item={item} /></div>}
                    </div>
                </div>:false}
            </div>
        );
    }
}
export default withRouter(Module)
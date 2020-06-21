// General
import React, { Component } from 'react';
import StickyBox from "react-sticky-box";

// Parts
import Title from './title'
import Line from './component'
import Download from './download'


class Module extends Component {
    constructor(props) {
        super(props);
        this.myInput = React.createRef()

        this.state = {stars:0,font:'Open Sans',constructor:true,js:true,stable:false,updater:[],options:[],search:'',items:this.props.items,selected:[]}
    }
    getStars(){
        var xmlhttp = new XMLHttpRequest(),url = ["https://api.github.com/repos/alicunde/html"]

		let that = this;
		xmlhttp.open("GET", url.join("/"));
        xmlhttp.setRequestHeader("Accept", "application/vnd.github.v3+json");
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                let response = JSON.parse(xmlhttp.responseText);

                if (!(response instanceof Array)) {
                    response = [response];
                }
                var stars = 0;
    
                for (var i in response) {
                    stars += parseInt(response[i].stargazers_count);
                }
    
                that.setState({stars:stars});
            }
        }

		xmlhttp.send();
    }
    componentDidMount(){
        this.getStars();
        this.searchInput.focus();
    }
    filter(search, items) {
        if (search && items) {
            const lowercasedFilter = search.toLowerCase();
            let data = items.filter((item) => {
                if(item['title'])return true;
                else if(item['status']===10)return false;
                else if(this.state.stable && ((item['path'] && item['path'].startsWith("4.")) || ! item['path']))return false;
                else if(this.state.js === false && ((item['property'] && item['property']['js'])))return false;

                else if(item['specialize'])return false;
                else if (typeof (item['name'] === "string") && item['name'] != null) {
                    return item['name']
                        .toString()
                        .toLowerCase()
                        .includes(lowercasedFilter);
                } else return false;
            });
            return data;
        } else {
            let data = items.filter((item) => {
                if(item['title'])return true;
                else if(item['status']===10)return false;
                else if(this.state.js === false && ((item['property'] && item['property']['js'])))return false;
                else if(this.state.stable && ((item['version'] && !item['version'].startsWith("4.")) || !item['version']))return false;
                else return true;
            });
            return data;
        }
    }
    render() {
        console.log('Render Constructor');
        let items = this.filter(this.state.search, this.state.items);
        let o = 0 ;
        let all = '';
        let imports = '';
        while(items.length > o){
            if(items[o].path){
                all = all +items[o].path+',';
                imports = imports +"\n import "+items[o].path+" from '../../components/"+items[o].path+"'";
                

            }
            o++;
        }
        all = imports+'\nconst components = {'+all+'}; ';
        return (
            <React.Fragment>
                <div className="Search">
                <a href="/">H</a>
                    <form method="post" action="/form" autoComplete="off">
                    <div className="Filters">
                            <label htmlFor="js">JS</label> <input  id="js" type="checkbox"  onChange={()=>{this.setState({js: !this.state.js})}}  checked={this.state.js} />
                            <label htmlFor="stable">STABLE</label> <input id="stable" type="checkbox" onChange={()=>{this.setState({stable: !this.state.stable})}}  checked={this.state.stable}  />
                        </div>
                        
                        <input ref={(input) => { this.searchInput = input; }}  onClick={()=>{window.scrollTo({top: 0, behavior: 'smooth'});}} autoComplete={'off'} onChange={(e) => { this.setState({ search: e.target.value }); if( document.getElementById('Search-reset')){document.getElementById('Search-reset').style.left = this.myInput.current.offsetWidth+'px';document.getElementById('Search-reset').style.display = 'block';} }} type="text" value={this.state.search} placeholder="Search component..." />
                        <strong ref={this.myInput}>{(this.state.search)?this.state.search:'Search component...'}</strong>
                        <span onClick={()=>{ this.searchInput.focus(); this.setState({ search: '' }); }} className={(this.state.search)?'active':''} id="Search-reset"></span>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Alicunde/html">GITHUB PROJECT <b>{this.state.stars}</b></a>
                    </form>
                </div>
                <div className="Constructor">
                    <div className="List">
                        {(items.length>8)?'':<div className="Empty"><b>Sin resultados</b><i>Si crees que falta un componente esencial no dudes en escribirme al github.</i><a href="https://github.com/Alicunde/html">Gibhub.com</a></div>}
                        <ul>
                            {items.map((a, index) => {
                                let options = a.option;
                                if(this.state.options[a.path]){
                                    
                                    options = this.state.options[a.path];
                                    console.log(options);
                                }
                                return (
                                    <li key={'constructor-'+index}>
                                        {(a.path)?<Line setOptions={(o)=>{
                                            let itemsx = items;
                                            itemsx[index].option = o;
                                            this.setState({items:itemsx});
                                           
                                        }} addComponent={(c)=>{ 
                                            
                                            this.props.items.map((ax, xx) => {
                                                if(ax.path === c.path){
                                                    ax.add = true;
                                                }
                                                if(ax.path === c.path+'-special'){
                                                    ax.add = true;
                                                }
                                                return true;
                                            });

                                            let x = this.state.selected; x[x.length] = c; this.setState({selected:x});}} item={a} theme={this.props.theme} font={this.state.font}></Line>:(items[index+1] && items[index+1].path)?<Title>{a.title}</Title>:false}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <StickyBox offsetTop={20} className="Sticky"  style={{width:'25%'}} >
                        <div className="Bar">
                            <select style={{display:"none"}} onChange={(e)=>{this.setState({font: e.target.value});}} value={this.state.font}>
                                <option value="Open Sans">Open Sans</option>
                                <option value="Roboto">Roboto</option>
                                <option value="Martel">Martel</option>
                                <option value="Raleway">Raleway</option>
                                <option value="Quicksand">Quicksand</option>
                                <option value="Montserrat">Montserrat</option>
                            </select>
                            <Download items={this.state.items} selected={this.state.selected} setSelected={(x)=>{this.setState({selected:x});}} />
                        </div>
                    </StickyBox>
                </div>
                {/* <textarea defaultValue={all} />
                <textarea defaultValue={imports} /> */}
                </React.Fragment>
        );
    }
}
export default Module;

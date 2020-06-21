import React, { Component } from 'react';
class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            items:[
                {
                    "active":true,
                    "title":"El arte de la maravillosa china meridional",
                    "subtitle":"Nikita Jrushchov",
                    "information":"La vida es maravillosa",
                    "description":"Moscow, Russia"
                },
                {
                    "title":"El arte de la maravillosa china meridional",
                    "subtitle":"Nikita Jrushchov",
                    "information":"La vida es maravillosa",
                    "description":"Madrid, Spain",
                    "link":"/example",
                    "video":"/components/Slide/videos/1.mp4"

                },
                {
                    "title":"El arte de la maravillosa china meridional",
                    "subtitle":"Nikita Jrushchov",
                    "information":"La vida es maravillosa",
                    "description":"Paris, France"

                }
            ]
        }
    }
    componentDidMount () {
        
        
    }
    render() {

        
        return (
            <div className="Slide">
                    
                    
                    {
                        this.state.items.map((a, index) => {
                            let x = index;
                        return (
                            <React.Fragment>
                                <a id={x} href={'#'+x}>{index}</a>
                                
                                <div >
                                <div>
                                    {(a.video && this.props.video)?<video  playsinline="playsinline" loop autoPlay muted="muted" >
                                        <source src={a.video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                                        Video not supported.
                                    </video>:false}
                                    {(a.title && this.props.titles)?<h2 screen="five">{a.title}</h2>:false}
                                    {(a.subtitle && this.props.subtitles)?<h3>{a.subtitle}</h3>:false}
                                    {(a.description && this.props.descriptions)?<p>{a.description}</p>:false}
                                    {(this.props.links && a.link)?<a className="Button" href={'#text'}>Read more</a>:''}
                                    </div>
                                    </div>
                               
                                </React.Fragment>
                        );
                    })}
            </div>
        );
    }
}

export default Module;

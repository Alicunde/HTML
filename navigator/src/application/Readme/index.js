import React, { Component } from 'react';

// Download
class Module extends Component {
   constructor(props){
       super(props);
       this.state={readme:''}
   }
   async getFirstReadme() {
    
         try {
             const response = await fetch('/README.md');
             const text = await response.text();
             let readme = this.state.readme;
             readme = readme +''+ text;
             this.setState({readme:readme});
             this.getReadme(0);
         } catch (error) {
             alert("error");
         }
    }
    async getCompatibility() {
    
        try {
            const response = await fetch('/Compatibility.md');
            const text = await response.text();
            let readme = this.state.readme;
            readme = readme +'\n\n'+ text;
            this.setState({readme:readme});
        } catch (error) {
            alert("error");
        }
   }

   async getReadme(i) {
       if(this.state.items[i]){

       
       if(this.state.items[i].path){
           if(this.state.items[i].path.includes("special")){

           }
           else if(this.state.items[i].status && this.state.items[i].status === 10){

        }
           else{
            try {
                const response = await fetch('/components/'+this.state.items[i].path+'/README.md');
                let text = await response.text();
                let readme = this.state.readme;
                text = text.replace(/\n```/, '\n![alt text](navigator/public/components/'+this.state.items[i].path+'/presentation.jpg)\n```')

                readme = readme + '\n\n' + text;
                
                this.setState({readme:readme});
            } catch (error) {
                alert("error");
            }
        }
       }
       this.getReadme(i+1);
    }
    else{
        this.getCompatibility();
    }
}
sortFunction(a, b) {
    if (!a['importance']) {
        return 0;
    }
    else if (a['importance'] === b['importance']) {
        return 0;
    }
    else {
        return (a['importance'] > b['importance']) ? -1 : 1;
    }
}
componentDidMount(){
    let t = this.props.items;
    t = t.sort(function(a, b) {
        if(!a['importance'])a['importance'] = 100;
        if(!b['importance'])b['importance'] = 100;
        return a['importance'] - b['importance'];
      })
    console.log(t);
    this.setState({items:t});
    setTimeout(() => {
        this.getFirstReadme();
    }, 1000);
        
       
}
    render() {
        return (
            <pre>
                {this.state.readme}
            </pre>
        );
    }
}
export default Module;

import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            item:[
                {"legend":"Name",'type':'text','icon':'home'},
            
            ]
        }
    }

    render() {
       
        return (
            <div className="Prices">
	<ul>

		<li>
			<h3>Basic</h3>
			<p>Perfect for individuals</p>

			<em>$60<span> / month</span></em>
			<a  href="/#test">Try out!</a>
			<ul>
				<li>10 GB <b>storage</b></li>
				<li>1 domain <b>included</b></li>
				<li>25 GB <b>monthly transfer</b></li>
				<li>Databases <b>ilimited</b></li>
				<li>Emails <b>ilimited</b></li>
				<li>CPanel <b>included</b></li>
			</ul>
				
		</li>
		
		<li>
			<h3 >Premium</h3>
			<p>Recommended for larger teams</p>

			<em>$100<span> / month</span></em>
			<a  href="/#test">Try out!</a>
			<ul >
				<li>35 GB <b>storage</b></li>
				<li>5 Dominios <b>incluidos</b></li>
				<li>100 GB <b>De transferencia mensual</b></li>
				<li>Base de datos <b >ilimitadas</b></li>
				<li>Emails <b>ilimitadas</b></li>
				<li>CPanel <b>included</b></li>
			</ul>
			

		</li>
	</ul>

            </div>
        );
    }
}
export default Module;

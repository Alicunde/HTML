import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            item:[
                {
					selfie:'/components/Comments/images/1.jpg',
					author:'Salbatore Munuera',
					comment:"Espero que te parece insteresante este respositorio, lo he creado con amor y gratuitamente.",
					date:"23 minutes",
					item:[
						{
							selfie:'/components/Comments/images/2.jpg',
							author:'Bill Gates',
							comment:"Lo siento Salbatore, pero este repositorio es una mierda y no das nada nuevo al HTML",
							date:"20 minutes"
						},{
							selfie:'/components/Comments/images/1.jpg',

							author:'Salbatore Munuera',
							comment:"Tienes razón Bill, soy un iluso.",
							date:"18 minutes"
						}
					]
				},
				{
					selfie:'/components/Comments/images/3.jpg',
					author:'Elon Musk',
					comment:"Pienso lo mismo que Bill, esto es una mierda de repositorio.",
					date:"15 minutes"
				},
            ]
        }
    }
    renderItems(items){
    
        return(<ul>
            {items.map((a, index) => {
                return (
                    <li>
						<img src={a.selfie} alt={a.author} />
						<a href="#test">{a.author}</a>
						<time>{a.date}</time>
						<p>
							{a.comment}
						</p>
                        {(a.item)?this.renderItems(a.item):false}
                    </li>
                );
            })}
        </ul>)
    }
    render() {
        return (
            <div className="Comments">

               {this.renderItems(this.state.item)}
            </div>
        );
    }
}
export default Module;

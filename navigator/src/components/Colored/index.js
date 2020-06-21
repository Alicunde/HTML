import React, { Component } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state={
            item:[
                {
                  color: "Primrose Yellow",
                  hex: "#f6d258",
                  year: "2017",
                  season: "Spring"
                },
                {
                  color: "Pale Dogwood",
                  hex: "#efcec5",
                  year: "2017",
                  season: "Spring"
                },
                {
                  color: "Hazelwood",
                  hex: "#d1af94",
                  year: "2017",
                  season: "Spring"
                },
                {
                  color: "Island Paradise",
                  hex: "#97d5e0",
                  year: "2017",
                  season: "Spring"
                },
                {
                  color: "Greenery",
                  hex: "#88b14b",
                  year: "2017",
                  season: "Spring"
                },
                {
                  color: "Flame",
                  hex: "#ef562d",
                  year: "2017",
                  season: "Spring"
                },
                {
                  color: "Pink Yarrow",
                  hex: "#d13076",
                  year: "2017",
                  season: "Spring"
                },
                {
                  color: "Niagra",
                  hex: "#5587a2",
                  year: "2017",
                  season: "Spring"
                },
                {
                  color: "Kale",
                  hex: "#5c7148",
                  year: "2017",
                  season: "Spring"
                },
                {
                  color: "Lapis Blue",
                  hex: "#0c4c8a",
                  year: "2017",
                  season: "Spring"
                },
                {
                  color: "Riverside",
                  hex: "#4c6a92",
                  year: "2016",
                  season: "Fall"
                },
                {
                  color: "Airy Blue",
                  hex: "#92b6d5",
                  year: "2016",
                  season: "Fall"
                },
                {
                  color: "Shark Skin",
                  hex: "#838487",
                  year: "2016",
                  season: "Fall"
                }]
        }
    }
    renderItems(items){

        return(<React.Fragment>
            {items.map((a, index) => {
                return (
                        <input  type="radio" style={{backgroundColor:a.hex}} value={a.id} name="color"  />
                  
                 
                );
            })}
        </React.Fragment>)
    }
    render() {
        return (
            <div className="Colored">
                {this.renderItems(this.state.item)}
            </div>
        );
    }
}
export default Module;

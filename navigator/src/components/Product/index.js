import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        
        return (
            <div className="Product">
                {(this.props.gallery)?<React.Fragment>
                
                <ol>
                    <li><input type="radio" checked name="picture" id="product-1" /><img alt="Test" src="/components/Product/images/1.jpg" /></li>
                    <li><input type="radio" name="picture" id="product-2" /><img alt="Test" src="/components/Product/images/2.jpg" /></li>
                    <li><input type="radio" name="picture" id="product-3" /><img alt="Test" src="/components/Product/images/3.jpg" /></li>
                </ol>
                {(this.props.thumbnails)?<ul>
                    <li><label htmlFor="product-1"><img alt="Test" src="/components/Product/images/1.jpg" /></label></li>
                    <li><label htmlFor="product-2"><img alt="Test" src="/components/Product/images/2.jpg" /></label></li>
                    <li><label htmlFor="product-3"><img alt="Test" src="/components/Product/images/3.jpg" /></label></li>
                </ul>:false}
                </React.Fragment>:false}
                <div>
                {(this.props.brand)?<h3>Calvin Klein</h3>:false}
                <h1>Gray Shirt</h1>
                {(this.props.slogan)?<h2>High quality cotton</h2>:false}
                {(this.props.price)?<em>{(this.props.discount)?<del>200.00</del>:false} 160.00€</em>:false}

                {(this.props.sales)?<strong>20</strong>:false}
                {(this.props.description)?<p>Vivamus consequat nisl diam. Vestibulum porttitor tempor neque vitae condimentum. </p>:false}
                {(this.props.form)?<form>
                    {(this.props.selector)?<select>
                        <option>L</option>
                    </select>:false}

                    <input type="submit" />
                </form>:false}
                </div>
            </div>
        );
    }
}

export default Module;

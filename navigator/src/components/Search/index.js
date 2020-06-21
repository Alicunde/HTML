import React, { Component } from 'react';

class Module extends Component {
    render() {
        return (
            <div className="Search">
                <form method="get" action="#test">
                    <input name="q" required type="search" placeholder={(this.props.placeholder)?'Search...':''} />
                    <p>
                        {(this.props.reset)?<button type={'reset'}>{(this.props.icons)?<i class="las la-times"></i>:'reset'}</button>:false}
                        {(this.props.submit)?<button type={'submit'}>{(this.props.icons)?<i class="las la-search"></i>:'Search'}</button>:false}
                    </p>
                </form>
            </div>
        );
    }
}
export default Module;

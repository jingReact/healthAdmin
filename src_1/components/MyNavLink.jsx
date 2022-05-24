import {Link} from 'react-router-dom'
import React, { Component } from 'react';

class MyNavLink extends Component {
    render() {
       
        return (
            <div >
                 <Link  {...this.props} ></Link>
            </div>
        );
    }
}

export default MyNavLink
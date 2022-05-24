import React, { Component } from 'react';

import store from '../../store'

class About extends Component {
    // componentDidMount() {
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }
    render() {
         console.log(this.props,123)
        return (
            <div>
                {/* <div>{store.getState()}</div> */}
            </div>
        );
    }
}

export default About
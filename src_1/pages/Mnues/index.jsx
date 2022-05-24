import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        people:state.people
    };
}
class Mnues extends Component {
    render() {
        return (
            <div>
               <div>
                   {
                    this.props.people.map(i=>{
                        return (
                            <div key={i.name}>{i.name}--{i.age}</div>
                        )
                    })
                   }
               </div>
            </div>
        );
    }
}
export default connect(
    mapStateToProps,
)(Mnues);
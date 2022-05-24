import React, { Component } from 'react';
import {connect} from 'react-redux'
import PeonleAction from '../../store/Actions/people';
class Peoples extends Component {
    addPeople=()=>{
        const {xNode,ageNode}=this
        let perLonst={name:xNode.value,age:ageNode.value}
        this.props.addpeople(perLonst)
        console.log(this.props,999)
    }
    render() {
        return (
            <div>
                  <input ref={c=>this.xNode=c} placeholder='请输入姓名'></input>
                  <input  ref={c=>this.ageNode=c}  placeholder='请输入年龄'></input>
                  <button onClick={this.addPeople}>添加</button>
                  <ul>
                      {
                          this.props.peopleS.map(i=>{
                              return (
                                  <li key={i.name}>{i.name}--{i.age}</li>
                              )
                          })
                      }
                  </ul>
            </div>
        );
    }
}

export default connect(
    state=>({peopleS:state.people}),
    {addpeople:PeonleAction,}
)(Peoples)
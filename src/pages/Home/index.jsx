import React, { Component } from 'react'
export class Home extends Component {
    componentWillUnmount() {
       
    }
    
  add=()=>{
    
  }
   incream=()=>{
  }
  yibujian=()=>{
  }
  render() {
    return (
      <div>
        <button onClick={this.add}> 点我加+</button>
        <button onClick={this.incream}>点我减-</button>
        <button onClick={this.yibujian}>异步加</button>
      </div>
      
    )
  }
}



export default Home
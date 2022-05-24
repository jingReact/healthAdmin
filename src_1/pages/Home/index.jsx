import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add, incream, yibujian } from '../../store/Actions/cont'
class Home extends Component {
  state={a:1}
  cLICKs=()=>{
    let {a}=this.state
    //对象setState
    // this.setState({a:a+1},()=>{
    //   console.log(this.state.a,88)
    // })
    //函数试
    this.setState((state,props)=>{
      console.log(props,99)
      return {a:state.a+props.n}
    })

  }
  add = () => {
    this.props.add(1)
  }
  incream = () => {
    this.props.incream(1)
  }
  yibujian = () => {
    this.props.yibujian(1, 500)
  }
  render() {
    console.log(this.props, 667788)
    return (
      <div>
      <h1>{this.state.a}</h1>
        <button onClick={this.cLICKs}>点位试一试</button>
        <h1>当前值为：{this.props.n}</h1>
        <button onClick={this.add}> 点我加+</button>
        <button onClick={this.incream}>点我减-</button>
        <button onClick={this.yibujian}>异步加</button>
      </div>

    )
  }
}
export default connect(
  state => ({ n: state.connt }),
  {
    add,
    incream,
    yibujian

  }
)(Home)
//容器组件 UI组件
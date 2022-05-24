import './App.css';
// import Home from './pages/Home';
// import About from './pages/About';
// import Mnues from './pages/Mnues';
import {Component,lazy,Suspense} from 'react'
import {Route,NavLink,Switch,Redirect,withRouter } from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import Peoples from './pages/Peoples';
import store from './store'
const Home=lazy(()=>import ('./pages/Home'))
const About=lazy(()=>import ('./pages/About'))
const Mnues=lazy(()=>import ('./pages/Mnues'))
const Car=lazy(()=>import('./pages/Car'))
class App extends Component {
pushc=()=>{
  // console.log(this,444)
  this.props.history.push('/about',{id:111,tittle:2222})
}
replaceS=()=>{
  // console.log(this)
  this.props.history.push('/home',{id:111,tittle:2222})
}
  render() {
    return (
      <div className="App">
      <Car></Car>
      <Mnues></Mnues>
    <Peoples> </Peoples>
    <button onClick={this.pushc}>push跳转</button>
    <button onClick={this.replaceS}>replace跳转</button>
      <NavLink to='/Car'>Car</NavLink>
     {/* <NavLink to='/About'>About</NavLink> */}
     {/* <MyNavLink to='/About'>About</MyNavLink>
     <MyNavLink to='/home'>home</MyNavLink> */}
     <Switch>
     <Suspense fallback={<h1>加载中...</h1>}>
            <Route path='/home' component={Home} {...store}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/Car' component={Car}></Route>
            <Redirect to='/about'></Redirect>
            </Suspense>
      </Switch>
    </div>
    );
  }
}
export default withRouter(App);

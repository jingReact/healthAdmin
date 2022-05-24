import './App.css';
// import Home from './pages/Home';
// import About from './pages/About';
import Login from './pages/Login';
import {Component} from 'react'
import {Route,NavLink,Switch,Redirect,withRouter } from 'react-router-dom'
// import MyNavLink from './components/MyNavLink'
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Login></Login>
    </div>
    );
  }
}
export default withRouter(App);

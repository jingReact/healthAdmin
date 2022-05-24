import './App.css';
import routers from './router'
import { useRoutes } from "react-router";

import './App.css';
function App () {
   const element = useRoutes(routers);
  return (
    <div className="App">{element}</div>
  )
}
export default App;

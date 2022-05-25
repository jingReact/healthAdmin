import './App.css';
import routers from './router'
import { useRoutes,Outlet } from "react-router";

import './App.css';
function App () {
   const element = useRoutes(routers);
  return (
    <div className="App">{element}
    {/* <Outlet></Outlet> */}
    </div>
  )
}
export default App;

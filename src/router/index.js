import { Navigate } from 'react-router-dom'
import Login from '../pages/Login';
import Home from '../pages/Home';
import About from '../pages/About';
import  Dingdan1 from '../pages/dingdan/dingdan1.jsx'
import  Dingdan2 from '../pages/dingdan/dingdan2.jsx'
import  Dingdan3 from '../pages/dingdan/dingdan3.jsx'
import  Zfjy from '../pages/zfjy/zfjy.jsx'
import  Zfjy2 from '../pages/zfjy/zfjy2.jsx'
import  Zfjy3 from '../pages/zfjy/zfjy3.jsx'
const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      { path: "list", element: <About /> },
      {
        path: "dingdan1",
        element: <Dingdan1 />,
      },
      {
        path: "dingdan2",
        element: <Dingdan2 />,
      },
      {
        path: "dingdan3",
        element: <Dingdan3 />,
      },
      {
        path: "zhifu1",
        element: <Zfjy />,
      },
      {
        path: "zhifu2",
        element: <Zfjy2 />,
      },
      {
        path: "zhifu3",
        element: <Zfjy3 />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
];
export default routes;
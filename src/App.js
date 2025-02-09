import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Jonghwan from "./jonghwan/jonghwan";
import Yunji from "./yunji/yunji";
import Home from './home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/yunji",
    element: <Yunji />,
  },
  {
    path: "/jonghwan",
    element: <Jonghwan />,
  },
]);

function App(){
  return <RouterProvider router = {router}/>;
}

export default App;
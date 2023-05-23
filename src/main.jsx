import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./global.css";
import Principal from './Home-componet/Principal.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CheckIn from './CheckIn.jsx';
import Home from './Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Principal/>,
  },
  {
    path: "/CheckIn",
    element: <CheckIn/>,
   
  },
  {
    path: "/Game",
    element: <App/>,
   
  },
  {
    path: "/Home",
    element: <Home/>,
   
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)

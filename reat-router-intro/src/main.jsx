import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About.jsx';
import Mainpage from './component/MainPage/Mainpage.jsx';
import Hero from './home/Hero.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/main",
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users	`),
        element: <Mainpage></Mainpage>
      }, {
        path: "/joy",
        element: <Hero></Hero>
      }

    ]
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

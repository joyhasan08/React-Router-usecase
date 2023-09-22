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
import UserDetails from './component/MainPage/UserDetails.jsx';
import Blogs from './component/Blog/Blogs.jsx';
import Test from './component/MainPage/Test.jsx';

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
      },
      {
        path: "users/:userId",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}	`),
        element: <UserDetails></UserDetails>
      },
      {
        path: "/joy",
        element: <Hero></Hero>
      },
      {
        path: "/blog",
        loader: ({ params }) => fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts`),
        element: <Blogs></Blogs>
      },
      {
        path: "/blog/:blogId",
        loader: ({ params }) => fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${params.blogId}`),
        element: <Test></Test>

      }

    ]
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

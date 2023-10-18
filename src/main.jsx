import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import LandingPage from './components/LandingPage/LandingPage'
import AddCoffee from './components/AddCoffee/AddCoffee'

// Create Router 

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[
      {
        path:"/",
        element:<LandingPage/>,
        loader:()=>fetch("http://localhost:5000/coffee")
      },
      {
        path:"/add-coffee",
        element:<AddCoffee/>,
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import LandingPage from './components/LandingPage/LandingPage'
import AddCoffee from './components/AddCoffee/AddCoffee'
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee'

// Create Router 

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[
      {
        path:"/",
        element:<LandingPage/>,
        loader:()=>fetch("https://coffee-hub-server.vercel.app/coffee")
      },
      {
        path:"/add-coffee/",
        element:<AddCoffee/>,
      },
      {
        path:"/update-coffee/:id",
        element:<UpdateCoffee/>,
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

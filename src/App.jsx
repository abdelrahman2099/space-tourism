import './App.css'
import Home from "./components/Home.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import Destination from "./components/Destination.jsx";
import Crew from "./components/Crew.jsx";
import Technology from "./components/Technology.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element:<RootLayout/>,
        children: [
            {path:'/',element:<Home/>},
            {path:'/home',element:<Home/>},
            {path:'/destination',element:<Destination/>},
            {path:'/crew',element:<Crew/>},
            {path:'/technology',element:<Technology/>}
        ]
    },
]);
function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App

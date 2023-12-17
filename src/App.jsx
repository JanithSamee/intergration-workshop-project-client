import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/UserLogin';
import Home from './pages/Home';
import { MantineProvider } from '@mantine/core';

export default function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },{
    path:"/login",
    element:<Login></Login>
  }
]);
  return (
    <MantineProvider>
        <RouterProvider router={router} />
    </MantineProvider>
  )
}


import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main/Main';
import Home from './Pages/Home/Home/Home';
import AllToys from './Pages/AllToys/AllToys';
import MyToys from './Pages/MyToys/MyToys';
import AddToy from './Pages/AddToy/AddToy';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './provider/AuthProvider';
import ViewDetails from './Pages/ViewDetails/ViewDetails';
import { fetchSignInMethodsForEmail } from 'firebase/auth';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>,
        loader : ()=> fetch('http://localhost:5000/toys')
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
       
      },
      {
        path: '/addToy',
        element: <AddToy></AddToy>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: "/toy/:id",
        element: <ViewDetails></ViewDetails>,
        loader : ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <AuthProvider>
      <div className='max-w-screen-xl mx-auto'>

        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)

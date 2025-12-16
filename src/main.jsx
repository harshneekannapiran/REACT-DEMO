import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login.jsx';
import  Home  from './Home.jsx';
import NotFound from './NotFound.jsx';
import Counter from './Counter.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


const router=createBrowserRouter([
  {
   path:'/',
   element:<Home/>,
   errorElement:<NotFound/>
  },
   {
    path:'/login',
    element:<Login/>,
  },
  {
    path:'/count',
    element:<Counter/>,
  }

]);

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>

)

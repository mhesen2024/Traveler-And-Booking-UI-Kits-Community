import './App.css'

import { RouterProvider } from 'react-router-dom';
import  router  from '../src/components/router';
import CheckOut from './components/views/CheckOut';





export default function App() {
  return (
    <>

      

      <RouterProvider router={router} />
      <CheckOut />
      </>
);
}


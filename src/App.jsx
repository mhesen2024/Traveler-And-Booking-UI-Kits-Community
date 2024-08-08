import './App.css'

import { RouterProvider } from 'react-router-dom';
import  router  from '../src/components/router';






export default function App() {
  return (
    <>

      

      <RouterProvider router={router} />

      </>
);
}


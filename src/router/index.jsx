import { createBrowserRouter } from 'react-router-dom';
import About from '../views/About';
import Home from '../views/Home';
import Activities from '../views/Activities';
import Contact from '../views/Contact';
import Discover from '../views/Discover';
import RootLayout from '../views/Layout';
import NotFound from '../views/NotFound';
import Register from '../views/Register';
import SignIn from '../views/SignIn';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'activities',
        element: <Activities />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'discover',
        element: <Discover />
      },

      {
        path: '*',
        element: <NotFound />
      },
     
      
    ]
  },
  {
    path: 'register',
    element: <Register />
  },

  {
    path: 'SignIn',
    element: <SignIn />
  },
]);

export default router;

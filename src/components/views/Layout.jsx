import { Outlet } from 'react-router-dom';
import Navbar from '../organisem/Navbar.jsx';

export default function RootLayout() {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  );
}

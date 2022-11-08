import './App.scss';
import { useContext } from 'react'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom'
import Home from './components/Dashboard/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import VerifyEmail from './components/VerifyEmail/VerifyEmail';
import { AuthContext } from './context/context';
import Navbar from './components/Navbar/Navbar';



function App() {


  const { currentUser } = useContext(AuthContext)

  const currUser = false;

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div className="main">
          <Outlet />
        </div>
      </div>
    )
  };

  const ProtectedRoute = ({ children }) => {
    if (!currUser) {
      return (
        <Navigate to="/login" />
      )
    }

    return children
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (<ProtectedRoute><Layout /></ProtectedRoute>),
      children: [
        {
          path: '/',
          element: <Home />
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/users/:id/verify/:token',
      element: <VerifyEmail />
    }
  ])


  return (
    <div className="App">

      <RouterProvider router={router} />

    </div>
  );
}

export default App;

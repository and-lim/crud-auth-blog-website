import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/Home';
import RegisterPage from './Pages/Register';
import LoginPage from './Pages/Login';
import FormInput from './Pages/Form';
import BlogDetail from './Pages/BlogDetail';
import BlogList from './Pages/Blog';


export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/register',
      element: <RegisterPage/>,
    },
    {
      path: '/login',
      element: <LoginPage/>,
    },
    {
      path: '/form',
      element: <FormInput/>,
    },
    {
      path :'/blog',
      element: <BlogList/>
    },
    {
      path: '/details',
      element: <BlogDetail/>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import ErrorLayout from "../layouts/ErrorLayout/ErrorLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorLayout></ErrorLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => {
          return fetch('https://hero-chef-server-delta.vercel.app/chefs');
        }
      },
      {
        path: '/chefs/:id',
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({ params }) => {
          return fetch(`https://hero-chef-server-delta.vercel.app/chefs/${params.id}`)
        }
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

export default router;
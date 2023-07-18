import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./style.scss";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Write from "./pages/Write";
import SingleBlog from "./pages/SingleBlog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/authContext";
const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/write",
        element:<Write/>
      },
      {
        path:"/post/:id",
        element:<SingleBlog/>
      }
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
      <RouterProvider router={router}/>
      </div>
    </div>
  )
}

export default App;

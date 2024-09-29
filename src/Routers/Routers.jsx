import App from '../App'
import About from '../pages/About'
import Contact from '../pages/Contact'

import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from '../pages/ErrorPage';
const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>
    },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

export default Routers
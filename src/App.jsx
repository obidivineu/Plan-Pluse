import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLogin from "./pages/user-login-page/UserLogin";
import ForgotPassword from "./pages/forgot-password-page/ForgotPassword";
import Userdashboard from "./pages/user-dashboard/Userdashboard";
import EmailValidation from "./pages/emailvalidation/EmailValidation";
import Createmember from "./pages/creatememember/Createmember";

//creating my router
const router = createBrowserRouter([
  {
    path: "/user-login",
    element: <UserLogin />,
  },

  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "/user-dashboard",
    element: <Userdashboard />,
  },
  {
    path: "/email-validation",
    element: <EmailValidation />,
  },
  {
    path: "/Create-member",
    element: <Createmember />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

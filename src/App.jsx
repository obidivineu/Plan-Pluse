import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLogin from "./pages/user-login-page/UserLogin";
import ForgotPassword from "./pages/forgot-password-page/ForgotPassword";
import EmailValidation from "./pages/emailvalidation/EmailValidation";
import Createmember from "./Pages/creatememember/Createmember";
import DecisionPage from "../src/Pages/decisionpage/DecisionReset"
import Landingpage from "../src/Pages/landing-page/HomeScreen/HomeScreen"
import Failedtransfer from "../src/Pages/failedtransfer/Failedtransfer"
import Successful from "../src/Pages/sucessfullpassword/Sucessfulpassword"
import Successfultransfer from "../src/Pages/sucessfultransferpage/Sucessfultransfer"

//creating my router
const router = createBrowserRouter([
  {
    path: "/user-login",
    element: <UserLogin />,
  },
  {
    path: "/failed",
    element: <Failedtransfer/>,
  },
  {
    path: "/successful",
    element: <Successful/>,
  },
  {
    path: "/successtransfer",
    element: <Successfultransfer />,
  },
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },


  {
    path: "/email-validation",
    element: <EmailValidation />,
  },
  {
    path: "/decision-page",
    element: <DecisionPage />,
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

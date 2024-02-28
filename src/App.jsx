import "./App.css";
import { createBrowserRouter, HashRouter, Route, RouterProvider, Routes } from "react-router-dom";
import UserLogin from "../src/Pages/user-login-page/UserLogin";
import ForgotPassword from "../src/Pages/forgot-password-page/ForgotPassword";
import EmailValidation from "../src/Pages/emailvalidation/EmailValidation";
import Createmember from "../src/Pages/creatememember/Createmember";
import DecisionPage from "../src/Pages/decisionpage/DecisionReset"
import Landingpage from "../src/Pages/landing-page/HomeScreen/HomeScreen"
import Failedtransfer from "../src/Pages/failedtransfer/Failedtransfer"
import Successful from "../src/Pages/sucessfullpassword/Sucessfulpassword"
import Successfultransfer from "../src/Pages/sucessfultransferpage/Sucessfultransfer"

//creating my router
// const router = createBrowserRouter([

//   {
//     path: "/failed",
//     element: <Failedtransfer/>,
//   },
//   {
//     path: "/successful",
//     element: <Successful/>,
//   },
//   {
//     path: "/successtransfer",
//     element: <Successfultransfer />,
//   },

//   {
//     path: "/forgot-password",
//     element: <ForgotPassword />,
//   },


//   {
//     path: "/email-validation",
//     element: <EmailValidation />,
//   },
//   {
//     path: "/decision-page",
//     element: <DecisionPage />,
//   },

//   {
//     path: "/Create-member",
//     element: <Createmember />,
//   },

// ]);

const App = () => {
  return (
    <>
<HashRouter>
  <Routes>
    <Route path='/' element={<Landingpage/>}/>
    <Route path='/user-login' element={<UserLogin/>}/>
  </Routes>
</HashRouter>
    </>
  );
};

export default App;

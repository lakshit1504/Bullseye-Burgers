import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "protected-route-react";
import { loadUser } from "./redux/actions/user";
import { useEffect } from "react";
import "./styles/app.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/founder.scss"
import "./styles/menu.scss"
import "./styles/contact.scss"
import "./styles/cart.scss"
import "./styles/shipping.scss"
import "./styles/confirmorder.scss"
import "./styles/paymentsuccess.scss"
import "./styles/login.scss"
import "./styles/profile.scss"
import "./styles/table.scss"
import "./styles/orderdetails.scss"
import "./styles/dashboard.scss"
import "./styles/about.scss"

import Home from "./components/Home/Home";
import Header from "./components/Layout/Header";
import Menu from "./components/Home/Menu";
import Contact from "./components/contact/Contact";
import Footer from "./components/Layout/Footer"
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import Paymentsuccess from "./components/cart/Paymentsuccess.jsx";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Myorders from "./components/myorders/Myorders";
// import ConfirmOrder from "./components/cart/ConfirmOrder"
import OrderDetails from "./components/myorders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import About from "./components/About/About";
import NotFound from "./components/Layout/NotFound";

function App() {

  const dispatch = useDispatch();
  const { error, message, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
  }, [dispatch, error, message]);


  return ( 
    <Router>
      <Header isAuthenticated={isAuthenticated}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/paymentsuccess" element={<Paymentsuccess/>}/>
        {/* <Route path="/confirmorder" element={<ConfirmOrder/>}/> */}
        <Route path="/menu" element={<Menu/>}/>

        <Route
          path="/login"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
              <Login />
            </ProtectedRoute>
          }
        />

        < Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/shipping" element={<Shipping/>}/>
        <Route path="/myorders" element={<Myorders/>}/>
        <Route path="/me" element={<Profile/>}/>
        <Route path="/order/:id" element={<OrderDetails/>}/>
        </Route>


        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user && user.role === "admin"}
              redirectAdmin="/profile"
            />
          }
        >

        <Route path="/admin/users" element={<Users/>}/>
        <Route path="/admin/orders" element={<Orders/>}/>

        </Route>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
      <Toaster/>
    </Router>
  );
}

export default App;

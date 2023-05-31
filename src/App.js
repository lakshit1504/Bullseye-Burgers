import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
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
import Confirmorder from "./components/cart/Confirmorder";
import Paymentsuccess from "./components/cart/Paymentsuccess.jsx";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Myorders from "./components/myorders/Myorders";
import OrderDetails from "./components/myorders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import About from "./components/About/About";
import NotFound from "./components/Layout/NotFound";

function App() {
  return ( 
    <Router>
      <Header isAuthenticated={true}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/shipping" element={<Shipping/>}/>
        <Route path="/confirmorder" element={<Confirmorder/>}/>
        <Route path="/paymentsuccess" element={<Paymentsuccess/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/myorders" element={<Myorders/>}/>
        <Route path="/order/:id" element={<OrderDetails/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/users" element={<Users/>}/>
        <Route path="/admin/orders" element={<Orders/>}/>
        <Route path="/about" element={<About/>}/>


        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

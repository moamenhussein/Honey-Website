import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./pages/home/about/About";
import Shop from "./pages/shop/Shop";
import Sale from "./pages/home/sale/Sale";
import Form from "./pages/home/sale/form/Form";
import Error from "./pages/error/Error";
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <>
    <ScrollToTop smooth />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/contact" element={<Form />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

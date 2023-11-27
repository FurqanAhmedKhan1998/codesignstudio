import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contact";
import Pricing from "./pages/pricing";
import StreetPhotoGraphy from "./pages/streetPhotography";
import ModelPhotoGraphy from "./pages/modelPhotography";
import FoodPhotoGraphy from "./pages/foodPhotography";
import ProductPhotoGraphy from "./pages/productPhotography";
// import FloatingIconBar from "./components/floatingIconBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/streetPhotography" element={<StreetPhotoGraphy />} />
          <Route path="/modelPhotography" element={<ModelPhotoGraphy />} />
          <Route path="/foodPhotography" element={<FoodPhotoGraphy />} />
          <Route path="/productPhotography" element={<ProductPhotoGraphy />} />
        </Routes>
        {/* <FloatingIconBar /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { Home } from "./components/Home";
import { Allproducts } from "./components/Allproducts";
import { Productdetails } from "./components/Productdetails";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Allproducts />}></Route>
        <Route path="/products/:id" element={<Productdetails />}></Route>
        <Route path="*" element={<div>404 Page Not Found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;

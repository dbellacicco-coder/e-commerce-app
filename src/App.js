import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import ContactForm from "./Components/Assets/ContactForm";
import CartContainer from "./Components/Cart/CartContainer";


function App() {
  const [product, setProduct] = useState({});
  const [countItem, setCountItem] = useState(0);

  console.log(countItem);

  return (
    <div>
      <BrowserRouter>
        <NavigationBar countItem={countItem} />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer setProduct={setProduct} />}
          />
          <Route
            path="/about"
            element={
              <About />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactForm />
            }
          />

          <Route
            path="/category/:id"
            element={<ItemListContainer setProduct={setProduct} />}
          />
          <Route
            path="/item/:id"
            element={
              <ItemDetailContainer
                countItem={countItem}
                setCountItem={setCountItem}
                product={product}
              />
            }
          />
          <Route path="/cart/*" element={<CartContainer/>} >
            <Route path="cartDetail" element={<h1>Desde acar detail</h1>} />
            <Route path="orderForm" element={<h1> DESDE ORDER FORM</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
// import User from "./User";
// import Product from "./Product";
import { RouterProvider } from "react-router-dom";
import { myRouter } from "./router";

// let products = [
//   { id: 1, name: "Apple", price: 1200 },
//   { id: 2, name: "Samsung", price: 1110 },
//   { id: 3, name: "Xiaomi", price: 900 },
//   { id: 4, name: "Honor", price: 1000 }
// ];

function App() {
  return (
    <>
      {/* <User
        title="Nurik"
        age={23}
        image="https://www.shutterstock.com/image-vector/creative-modern-img-letter-logo-260nw-1780496255.jpg"
      />
      <User title="nyyy" age={11} />
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))} */}

      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;

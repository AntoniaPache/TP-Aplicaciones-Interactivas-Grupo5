import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import products from "./data/products.json";
import Home from './views/Home';
import Hombre from './views/Hombre'
import Mujer from './views/Mujer'
import Accesorios from './views/Unisex.jsx'
import Sale from './views/Sale'
import PublicarProductoView from './views/PublicarProductoView'
import MainVendedor from './views/MainVendedor' 
import EditarProductoView from './views/EditarProductoView'
import ProductoView from './views/ProductoView';
import Header from "./components/Header";
import Footer from "./components/Footer"; // Asegúrate de importar ProductoView si no lo has hecho
import CheckOut from './views/CheckOut';
import Carrito from './views/Carrito';
import Pay from './views/Pay';
import { Provider } from 'react-redux'
import { storeCarrito } from './Redux/storeCarrito.js'
import InicioSesion from "./views/InicioSesion.jsx"
import CrearUser from "./views/CrearUser.jsx"
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [productos, setProductos] = useState([]);

  // useEffect para obtener los productos una vez al cargar el componente
  useEffect(() => {
      axios.get('http://localhost:4002/productos')
          .then(response => {
              setProductos(response.data);
              console.log(response.data); // Aquí obtienes los datos de los productos en formato json
          })
          .catch(error => {
              console.error('Error al obtener productos', error);
          });
  }, []); // El array vacío [] como segundo argumento asegura que se ejecute solo una vez


  const routes = [
    { path: "/", element: <Home /> },
    { path: "/hombre", element: <Hombre /> },
    { path: "/mujer", element: <Mujer /> },
    { path: "/unisex", element: <Accesorios /> },
    { path: "/sale", element: <Sale /> },
    { path: "/vendedor/publicar", element: <PublicarProductoView /> },
    { path: "/vendedor", element: <MainVendedor /> },
    { path: "/checkout", element: <CheckOut/>},
    { path: "/checkout/pay", element: <Pay/>},
    { path: "/carrito", element: <Carrito/>},
    { path: "/login", element: <InicioSesion/>},
    { path: "/register", element: <CrearUser/>}
  ];

  productos.forEach((p) => {
    console.log(p.name);
    routes.push({
      path: "/vendedor/" + p.name,
      element: <EditarProductoView p={p} />
    },
    {path: "/hombre/" + p.name,
    element: <ProductoView p={p} />
     },
     {
      path: "/mujer/" + p.name,
      element: <ProductoView p={p} />
    },
    {
      path: "/unisex/" + p.name,
      element: <ProductoView p={p} />
    },
    {
      path: "/sale/" + p.name,
      element: <ProductoView p={p} />
    });
  });
  return (
    <>
      <Provider store={storeCarrito}>
      <Router>
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
        <Footer />
      </Router>
      </Provider>
    </>
  )
}

export default App;


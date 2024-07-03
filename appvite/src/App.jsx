// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { useSelector } from 'react-redux';
import ProductLoader from './Redux/ProductLoader.jsx';

function App() {

  const productos = useSelector((state) => state.catalogo.items); // Usa la clave "catalogo"
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/hombre", element: <Hombre /> },
    { path: "/mujer", element: <Mujer /> },
    { path: "/unisex", element: <Accesorios /> },
    { path: "/sale", element: <Sale /> },
    { path: "/vendedor/publicar", element: <PublicarProductoView /> },
    { path: "/vendedor", element: <MainVendedor /> },
    { path: "/checkout", element: <CheckOut /> },
    { path: "/checkout/pay", element: <Pay /> },
    { path: "/carrito", element: <Carrito /> },
    { path: "/login", element: <InicioSesion /> },
    { path: "/register", element: <CrearUser /> },
  ];

  productos.forEach((p) => {
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
    <Provider store={storeCarrito}>
      <Router>
        <Header />
        <ProductLoader>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Routes>
        </ProductLoader>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;

 


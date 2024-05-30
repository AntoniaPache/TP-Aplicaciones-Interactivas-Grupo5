import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Hombre from './views/Hombre'
import Mujer from './views/Mujer'
import Accesorios from './views/Accesorios'
import Sale from './views/Sale'
import PublicarProductoView from './views/PublicarProductoView'
import MainVendedor from './views/MainVendedor' 
import EditarProductoView from './views/EditarProductoView'
import ProductoView from './views/ProductoView';
import Header from "./components/Header";
import Footer from "./components/Footer"; // Asegúrate de importar ProductoView si no lo has hecho
import CheckOut from './views/CheckOut';
import products from "./data/products.json";
import Carrito from './views/Carrito';
import Pay from './views/Pay';
import { Provider } from 'react-redux'
import { storeCarrito } from './Redux/storeCarrito.js'
//import products from "./data/products.json";

function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/hombre", element: <Hombre /> },
    { path: "/mujer", element: <Mujer /> },
    { path: "/accesorios", element: <Accesorios /> },
    { path: "/sale", element: <Sale /> },
    { path: "/vendedor/publicar", element: <PublicarProductoView /> },
    { path: "/vendedor", element: <MainVendedor /> },
    { path: "/checkout", element: <CheckOut/>},
    { path: "/checkout/pay", element: <Pay/>},
    { path: "/carrito", element: <Carrito/>}
  ];
  products.forEach((p) => {
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
      path: "/accesorios/" + p.name,
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


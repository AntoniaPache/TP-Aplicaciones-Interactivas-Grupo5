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
  ];
/*
  products.forEach((p) => {
    routes.push({
      path: "/vendedor/" + p.name,
      element: <EditarProductoView p={p} />
    });
  });
  
  products.forEach((p) => {
    routes.push({
      path: "/hombre/" + p.name,
      element: <ProductoView p={p} />
    });
  });
  
  products.forEach((p) => {
    routes.push({
      path: "/mujer/" + p.name,
      element: <ProductoView p={p} />
    });
  });
  
  products.forEach((p) => {
    routes.push({
      path: "/accesorios/" + p.name,
      element: <ProductoView p={p} />
    });
  });
  
  products.forEach((p) => {
    routes.push({
      path: "/sale/" + p.name,
      element: <ProductoView p={p} />
    });
  });
*/
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;

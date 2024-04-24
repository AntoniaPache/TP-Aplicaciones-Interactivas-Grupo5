import Hombre from "./views/Hombre";
import Home from "./views/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mujer from "./views/Mujer";
import Accesorios from "./views/Accesorios";
import Sale from "./views/Sale";
import MainVendedor from "./views/MainVendedor";
import PublicarProductoView from "./views/PublicarProductoView";
import EditarProductoView from "./views/EditarProductoView";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
      
      <Header vendedor={false}/>

      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/hombre" exact Component={Hombre}/>
        <Route path="/mujer" exact Component={Mujer}/>
        <Route path="/accesorios" exact Component={Accesorios}/>
        <Route path="/sale" exact Component={Sale}/>
        <Route path="/vendedor" exact Component={MainVendedor}/>
        <Route path="/vendedor/publicar" exact Component={PublicarProductoView}/>
        <Route path="/vendedor/EditarProductoView" exact Component={EditarProductoView}/>
      </Routes>

      <Footer/>
    </Router>
    
    </>
  )
}

export default App

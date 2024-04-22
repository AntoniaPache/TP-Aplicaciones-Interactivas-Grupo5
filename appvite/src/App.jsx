import Hombre from "./views/Hombre";
import Home from "./views/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mujer from "./views/Mujer";
import Accesorios from "./views/Accesorios";
import Sale from "./views/Sale";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
    <Router>
    <Header/>

      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/hombre" exact Component={Hombre}/>
        <Route path="/mujer" exact Component={Mujer}/>
        <Route path="/accesorios" exact Component={Accesorios}/>
        <Route path="/sale" exact Component={Sale}/>
      </Routes>

      <Footer/>
    </Router>
    

    </>
  )
}

export default App

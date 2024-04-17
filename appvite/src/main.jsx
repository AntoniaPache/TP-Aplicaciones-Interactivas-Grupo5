import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import products from './data/products.js'
import EditarProductoView from './views/EditarProductoView.jsx'
import PublicarProductoView from './views/PublicarProductoView.jsx'
import MainVendedor from './views/MainVendedor.jsx'


const routes = [

  {
      path: "/",
      element: <App></App>
  },
  {
      path: "/publicar",
      element: <PublicarProductoView></PublicarProductoView>
  },
  {
    path: "/vendedor",
    element: <MainVendedor/>
  }
];

products.forEach((p) =>{
  routes.push(
    {
      path: p.name,
      element: <EditarProductoView p={p}/>
    }
  );
});

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
import React from 'react'
import Card from '../components/Card'
import products from '../data/products'
import NavBar from '../components/NavBarVendedor'
import "./MainVendedor.css"
import NavBarVendedor from '../components/NavBarVendedor'

function MainVendedor() {
    const productList = products.map(p => {
        return <Card img = {p.img} name = {p.name} price = {p.price}/>
      })
    
      return (
        <div className='App'>

          <NavBarVendedor/>
    
    
          <div className = "conteiner">
            {productList}
          </div>
    
        </div>
      )
}

export default MainVendedor
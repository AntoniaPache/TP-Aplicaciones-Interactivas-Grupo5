import React from 'react'
import Card from '../components/Card'
import products from '../data/products'
import NavBarVendedor from '../components/NavbarVendedor'


function MainVendedor() {
  const productList = products.map((p) => {
    return <Card img={p.img} name={p.name} price={p.price} />;
  });

  return (
    <div className="">

      <div className="flex flex-wrap justify-center gap-10 mt-20">
        {productList}
      </div>

    </div>
  );
}

export default MainVendedor;

import React from 'react'
import products from '../data/buzosMujer.json'
import ProductCard from '../components/ProductCard';


function MainVendedor() {
  const productList = products.map((p) => {
    return ProductCard({ product: p });
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

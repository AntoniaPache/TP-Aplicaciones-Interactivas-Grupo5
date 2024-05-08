import React from 'react'
import ProductCard from '../components/ProductCard';
import products from '../data/products.json'


function MainVendedor() {
  const productList = products.map((p) => {
    return <ProductCard product={p} />;
  });

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-4 justify-center w-1/2 gap-10 mt-20">
        {productList}
      </div>

    </div>
  );
}

export default MainVendedor;
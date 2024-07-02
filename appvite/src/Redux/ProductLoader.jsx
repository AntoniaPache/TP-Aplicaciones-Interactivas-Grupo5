import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './catalogoRedux';

const ProductLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {children}
    </>
  );
};

export default ProductLoader;
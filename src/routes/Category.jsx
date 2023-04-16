//! Test Route: Not in use 
import React, { useState } from 'react';
import { useNavigate, useLoaderData, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../api';

export function loader() {
  return getProducts();
}

export default function Category() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const products = useLoaderData();

  const [sortedProducts, setSortedProducts] = useState(products);
  const categoryFilter = searchParams.get('category');


  const displayedProducts = categoryFilter
    ? products.filter((product) => product.category === categoryFilter)
    : products;

  const allProductElement = displayedProducts.map((item) => {
    return (<ProductCard
      key={item.id}
      item={item}
    />)
  })
  return (
    <div className='all-products'>
      {allProductElement}
    </div>
  )
}

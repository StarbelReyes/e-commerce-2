import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem'; // Make sure this component is imported

const LatestCollection = () => {
  const { products } = useContext(ShopContext); // Ensure products is available from context
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length) {
      setLatestProducts(products.slice(0, 10)); // Slice products if it exists
    }
  }, [products]); // Re-run when products changes

  return (
    <div className='my-12'>
      <div className='text-center py-10'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 lg:w-1/2 m-auto text-sm sm:text-base md:text-lg text-blue-400 mt-4 leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tenetur laudantium consectetur, temporibus, est dolor blanditiis quaerat explicabo rem totam atque cumque amet ex. Rerum ipsum sunt sequi doloremque pariatur!
        </p>
      </div>

      {/* RENDERING PRODUCTS */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        }
      </div>
    </div>
  );
};

export default LatestCollection;


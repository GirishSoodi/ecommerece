import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts,setLatestProducts] = useState([]);

  useEffect(()=>{
       setLatestProducts(products.slice(0,10));

  },[products])
  



  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3x1'>
        <Title text1={'LATEST'}  text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Discover our latest collections, where timeless elegance meets modern flair. Curated with care and crafted for style, each piece is designed to elevate your look and keep you ahead of the trends. From bold new arrivals to subtle classics reimagined, this season’s collection brings a fresh perspective to your wardrobe. Explore now and find your next must-have.
        </p>
      </div>
       {/*rendering products*/}
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
       </div>
         
      
    </div>
  );
};

export default LatestCollection;

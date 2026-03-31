import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 justify-between pl-6 pr-6'>
      <img className="w-20 sm:w-24 md:w-28 lg:w-32" src={assets.logo} alt="Logo"/>
      <button onClick={()=>setToken('')} className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">Logout</button>
    </div>
  )
}

export default Navbar

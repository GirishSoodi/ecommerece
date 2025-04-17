import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets';

const Sidebar = () => {
    return (
        <div className='w-[10%] min-h-screen border-r-2 '>
            <div className='flex flex-col gap-4 mt-8 text-sm sm:text-base'>

                <NavLink
                    to="/add"
                    className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-md hover:bg-gray-100 transition'
                >
                    <img className='w-5 h-5' src={assets.add_icon} alt="Add" />
                    <p className="hidden sm:block">Add Items</p>
                </NavLink>


                <NavLink
                    to="/list"
                    className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1'
                >
                    <img className='w-5 h-5' src={assets.order_icon} alt="List" />
                    <p className="hidden md:block">List Items</p>
                </NavLink>

                <NavLink
                    to="/orders"
                    className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-md hover:bg-gray-100 transition'
                >
                    <img className='w-5 h-5' src={assets.order_icon} alt="Orders" />
                    <p className="hidden md:block">Orders</p>
                </NavLink>

            </div>
        </div>
    )
}

export default Sidebar;

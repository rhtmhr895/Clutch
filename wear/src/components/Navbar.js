import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/wearrit.jpg';
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md'

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-between items-center py-1 shadow-md sticky top-0 bg-white z-10'>
    <div className="logo mx-3">
        <Link to={'/'}><img src={img} alt='logo' width={70} height={30} /></Link>
            
      
    </div>
    <div className="nav">
        <ul className="flex items-center space-x-4 font-medium md:text-md">
            <Link to={'/Tshirts'}><li className='hover:text-red-500'>Tshirts</li></Link>
            <Link to={'/Jeans'}><li className='hover:text-red-500'>Jeans</li></Link>
            <Link to={'/Kids'}><li className='hover:text-red-500'>Kids</li></Link>
            <Link to={'/Home_living'}><li className='hover:text-red-500'>Home & Living</li></Link>
            <Link to={'/Beauty'}><li className='hover:text-red-500'>Beauty</li></Link>
        </ul>
    </div>
    <div className=" cursor-pointer cart absolute right-0 top-4 mx-5 flex ">
               <Link to={'/login'}><MdAccountCircle className='text-xl md:text-2xl mx-2' /></Link>
               <Link to={'/Checkout'}><AiOutlineShoppingCart className='text-xl md:text-2xl' /></Link>
            </div>
   
  </div>




    
  )
}

export default Navbar
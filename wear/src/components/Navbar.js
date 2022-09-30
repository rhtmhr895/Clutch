import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/wearrit.jpg';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { MdAccountCircle } from 'react-icons/md'


const Navbar = () => {
//   const ref = useRef()
//   const toggleCart = () => {
//     if (ref.current.classList.contains('translate-x-full')) {
//         ref.current.classList.remove('translate-x-full')
//         ref.current.classList.add('translate-x-0')
//     }
//     else if (ref.current.classList.contains('translate-x-0')) {
//         ref.current.classList.remove('translate-x-0')
//         ref.current.classList.add('translate-x-full')
//     }
// }
// const cart =()=>{

// }
// const clearCart =()=>{

// }
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-between items-center py-1 shadow-md sticky top-0 bg-white z-10'>
    <div className="logo mx-3">
        <Link to={'/'}><img src={img} alt='logo' width={70} height={30} /></Link>
            
      
    </div>
    <div className="nav">
        <ul className="flex items-center space-x-4 font-medium md:text-md">
            <Link to={`/Tshirts?category=${'tshirt'}`}><li className='hover:text-red-500'>Tshirts</li></Link>
            <Link to={`/Jeans?category=${'jeans'}`}><li className='hover:text-red-500'>Jeans</li></Link>
            <Link to={'/Men'}><li className='hover:text-red-500'>Kids</li></Link>
            <Link to={'/Home_living'}><li className='hover:text-red-500'>Home & Living</li></Link>
            <Link to={'/Beauty'}><li className='hover:text-red-500'>Beauty</li></Link>
        </ul>
    </div>
    <div className=" cursor-pointer cart absolute right-0 top-4 mx-5 flex ">
               <Link to={'/login'}><MdAccountCircle className='text-xl md:text-2xl mx-2' /></Link>
              <Link to={'/Checkout'}><AiOutlineShoppingCart className='text-xl md:text-2xl' /></Link> 
            </div>
            {/* <div ref={ref} className={` w-72 h-[100vh] sidecart overflow-y-scroll absolute top-0 right-0 bg-red-300 py-10 px-8 transform transition-transform 'translate-x-0' 'translate-x-full'}`}>
                <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
                <span onClick={toggleCart} className="absolute top-2 right-2 cursor-pointer text-2xl text-red-500"><AiFillCloseCircle /></span>
                <ol className='list-decimal font-semibold'>
                 
                        <div className='my-4 text-base font-semibold'>your cart is empty</div>
                    
                  
                       <li >
                            <div className="item flex my-5">
                                <div className='w-2/3 font-semibold'>Information</div>
                                <div className='flex font-semibold items-center justify-center w-1/3 text-lg'><AiFillMinusCircle className='cursor-pointer text-red-500' /></div>
                            </div>
                        </li>
                        
                    
                </ol>
                <div className='total my-2 font-semibold'>Subtotal ₹</div>
                <div className='flex'>

                    <Link to={'/Checkout'}><button className="flex mr-2 text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-m"><BsFillBagCheckFill className='m-1' />Checkout</button></Link>

                    <button onClick={clearCart} className="flex mr-2 text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-s">Clear Cart</button></div>
            </div> */}
   
  </div>




    
  )
}

export default Navbar
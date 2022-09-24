import React from 'react'
import { Link } from 'react-router-dom'
import img from '../images/wearrit.jpg'

const Navbar = () => {
  return (
    <div>
      <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
  <Link href={'/'}> <img src={img} alt='logo' width={70} height={30} /> </Link>             
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link class="mr-5 hover:text-gray-900" to='/'>Home</Link>
      <Link class="mr-5 hover:text-gray-900" to='/Login'>Login</Link>
      <Link class="mr-5 hover:text-gray-900" to='/Register'>Sign Up</Link>
      <Link class="mr-5 hover:text-gray-900">First Link</Link>
      
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>



    </div>
  )
}

export default Navbar
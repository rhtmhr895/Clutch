import React, { useEffect, useState } from 'react';
import { FaSadTear } from 'react-icons/fa';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Jeans = () => {
  let categ = queryString.parse(window.location.search)
  let cat = categ.category
  console.log(cat)
 
  
  const [data, setData] = useState([]);

  useEffect(() => {

      axios.get(`http://localhost:8700/api/GetProducts/`, {params:{cat}}).then((response) => {

          setData(response.data);
      })


  }, [cat])
  if (!data) return (
    <h1>Sorry we regret to tell you that Jeans are out of Stock!!!<FaSadTear className='text-xl md:text-2xl mx-2' /></h1>
  )
  return (


    <div>
        
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                        {data.map((items) => {
            return (
                            <div class="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-2 ">
                                <Link passHref={true} key={items._id} to={`/Spec/${items._id}`} className="block relative  rounded overflow-hidden">
                                    <img alt="wearrit" className=" h-[30vh] md:h-[36vh] block m-auto" src={items.image} />
                                    
                                </Link>
                                <div className="mt-4 text-center md:text-left">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Jeans</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{items.brand}</h2>
                                    <p class="mt-1">₹{items.price}</p>
                                    <div className="mt-1">
                                        {items.size.includes('S') && <span className='border border-black-400 px-1 mx1'>S</span>}
                                        {items.size.includes('M') && < span className='border border-black-400 px-1 mx1'>M</span>}
                                        {items.size.includes('L') && <span className='border border-black-400 px-1 mx1'>L</span>}
                                        {items.size.includes('XL') && <span className='border border-black-400 px-1 mx1'>XL</span>}
                                        {items.size.includes('XXL') && <span className='border border-black-400 px-1 mx1'>XXL</span>}
                                    </div>
                                    <div className="mt-1">
                                        {items.color.includes('Red') && <button className="border-2 border-gray-300 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                                        {items.color.includes('Grey') && <button className="border-2 border-gray-300 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                                        {items.color.includes('Blue') && <button className="border-2 border-gray-300 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                                        {items.color.includes('White') && <button className="border-2 border-gray-300 bg-white rounded-full w-6 h-6 focus:outline-none"></button>}
                                        {items.color.includes('Sea Green') && <button className="border-2 border-gray-300 bg-teal-300 rounded-full w-6 h-6 focus:outline-none"></button>}
                                        {items.color.includes('Yellow') && <button className="border-2 border-gray-300 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                        {items.color.includes('Purple') && <button className="border-2 border-gray-300 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                        {items.color.includes('Pink') && <button className="border-2 border-gray-300 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                        {items.color.includes('Black') && <button className="border-2 border-gray-300 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                                    </div>
                                </div>
                            </div>
                           ) })}
                        </div>

                    </div>
                </section>
            
        
    </div>
)
}

export default Jeans
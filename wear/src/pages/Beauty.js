import React, { useEffect, useState } from 'react';
import { FaSadTear } from 'react-icons/fa';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Beauty = () => {
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
    <h1>Sorry we regret to tell you that Beauty are out of Stock!!!<FaSadTear className='text-xl md:text-2xl mx-2' /></h1>
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
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Beauty</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{items.brand}</h2>
                                    <p class="mt-1">₹{items.price}</p>
                                </div>
                            </div>
                           ) })}
                        </div>

                    </div>
                </section>
            
        
    </div>
)
}

export default Beauty
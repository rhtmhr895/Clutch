import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaSadTear } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Tshirts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8700/api/GetProducts').then((response) => {
            
            setData(response.data);
        })


    },[])
    if (!data) return (
        <div>Sorry we regret to tell you that Tshirts are out of Stock!!!<FaSadTear className='text-xl md:text-2xl mx-2' /></div>
    )

    return (


        <div>
            {data.map((items)=>{
           return(
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <Link class="block relative h-50 rounded overflow-hidden">
                                <img alt="" class="object-cover object-centre w-50 h-50 block" src={items.image} />
                            </Link>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">TSHIRT'S</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">{items.brand}</h2>
                                <p class="mt-1">₹{items.price}</p>
                                <p class="mt-1">size:{items.size}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
           )
            })}
        </div>
    )
}

export default Tshirts
import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const NewPdt = () => {
    const [data, setData] = useState({ 'category': '', 'brand': '', 'slug': '', 'desc': '', 'size': '', 'availableQty': '', 'image': '', 'price': '', 'color': '' });

    const change = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handelSubmit = () => {
        axios.post('http://localhost:8700/api/AddProduct', data).then((res) => {
            if (res.data.success) {
                toast.success('🦄 Product Added Successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });



    }

    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <form onSubmit={handelSubmit}>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">

                        <div className="flex lg:w-1/2 w-full  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                            <div className="relative flex-grow w-full">
                                <label for="category" className="leading-7 text-sm text-gray-600">Category</label>
                                <input type="text" id="category" name="category" value={data.category} onChange={change} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative flex-grow w-full">
                                <label for="brand" className="leading-7 text-sm text-gray-600">Brand</label>
                                <input type="text" id="brand" name="brand" value={data.brand} onChange={change} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative flex-grow w-full">
                                <label for="slug" className="leading-7 text-sm text-gray-600">Slug</label>
                                <input type="text" id="slug" name="slug" value={data.slug} onChange={change} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative flex-grow w-full">
                                <label for="desc" className="leading-7 text-sm text-gray-600">Description</label>
                                <input type="text" id="desc" name="desc" value={data.desc} onChange={change} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative flex-grow w-full">
                                <label for="size" className="leading-7 text-sm text-gray-600">Size</label>
                                <input type="text" id="size" name="size" value={data.size} onChange={change} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative flex-grow w-full">
                                <label for="availableQty" className="leading-7 text-sm text-gray-600">Quantity</label>
                                <input type="text" id="availableQty" name="availableQty" value={data.availableQty} onChange={change} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative flex-grow w-full">
                                <label for="image" className="leading-7 text-sm text-gray-600">Image</label>
                                <input type="text" id="image" name="image" value={data.image} onChange={change} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative flex-grow w-full">
                                <label for="price" className="leading-7 text-sm text-gray-600">Price</label>
                                <input type="text" id="price" name="price" value={data.price} onChange={change} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative flex-grow w-full">
                                <label for="color" className="leading-7 text-sm text-gray-600">Color</label>
                                <input type="text" id="color" name="color" value={data.color} onChange={change} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <br></br>
                            <button className="text-white bg-red-500 border-0 py-4 mt-5 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Add Product</button>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    )
}

export default NewPdt
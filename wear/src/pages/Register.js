import React, { useState } from 'react'
import axios from 'axios';
import img from '../images/wearrit.jpg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


const Register = () => {
  
  const [value, setValue] = useState({
    fname: '', lname: '', email: '', password: ''
  })


  const setValues = (event) => {

    setValue({...value,[event.target.name]:event.target.value})

  }

  const submitForm =(event)=>{

    event.preventDefault();
    console.log(value);

    axios.post('http://localhost:8700/api/Register', value)
    .then((res) => {
      if (res.data.success) {
        toast.success('🦄 Yee have Registered  successfully!', {
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
  // let navigate = useNavigate(); 
    // const chng = () =>{ 
    //       let path = `/Login`; 
    //       navigate(path);
    //     }

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
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src={img} alt="" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Signup for an account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link to={'/login'}><a href="/Login" className="font-medium text-red-600 hover:text-red-500"> Login </a>
              </Link> </p>
          </div>
          <form onSubmit={submitForm} className="mt-8 space-y-6" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="fname" className="sr-only">First Name</label>
                <input value={value.fname} onChange={setValues} id="fname" name="fname" type="text" autoComplete="fname" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="First Name" />
              </div>
              <div>
                <label htmlFor="lname" className="sr-only">Last Name</label>
                <input value={value.lname} onChange={setValues} id="lname" name="lname" type="text" autoComplete="lname" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="Last Name" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input value={value.email} onChange={setValues} id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="Email " />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input value={value.password} onChange={setValues} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-red-500 group-hover:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      

    </div>
  )
}

export default Register
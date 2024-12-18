import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { CartContext } from '../context/CartContext';

const RegisterPage = () => {
    const {createUser, updateUser, setUser, loginWithGmail} = useContext(CartContext)
    const [error, setError] = useState([])
    const [toggleShow, setToggleShow] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const url = e.target.url.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const adminValue = e.target.admin.value
      const mainAdmin = false
      let admin = false
      if(adminValue === "itsRedoy"){
         admin = true
      }
      const upperCase = /[A-Z]/.test(password);
      const lowerCase = /[a-z]/.test(password);
      const minimumLength = password.length >= 6; 

      if (!upperCase){
        return setError("Uppercase not found")
      }

      if(!lowerCase) {
        return setError("Lowercase not found")
      }

      if(!minimumLength){
        return setError("Minimum length 6 digits")
      }
        createUser(email, password)
          .then((result) => {
            setUser(result.user);
            updateUser({ displayName: name, photoURL: url }).then(() => {
              navigate("/");
              toast.success("Registered successfully", {
                position: "top-center",
                autoClose: 3000
              })
            });
            fetch("https://gadget-heaven-server-henna.vercel.app/user", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({name, email, password, url, admin, mainAdmin})
            })
            .then(res => res.json())
            .then(data => {
                alert("User saved to db")
            })
          })
          .catch((error) => {
            // console.log(error.message);
            toast.error(error, {
                position: "top-center",
                autoClose: 3000
              })
          });
    }

    const handleGmailLogin = () => {
        loginWithGmail()
        .then(() => {
          navigate(location.state? location.state : '/')
          toast.success("Logged in successfully", {
            position: "top-center",
            autoClose: 3000
          })
        //   fetch("http://localhost:5000/user", {
        //         method: "POST",
        //         headers: {
        //             "content-type": "application/json"
        //         },
        //         body: JSON.stringify({name, email, password, url})
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         alert("User saved to db")
        //     })
      })
    }
    return (
        <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register | Career Horizon</title>
            </Helmet>
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-green-400 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-green-400">
                Register
              </h1>
              <p className="text-[12px] text-gray-500">
                Hey enter your details to create your account
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <form onSubmit={handleSubmit} className="mx-auto max-w-xs flex flex-col gap-4">
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  name='name'
                  placeholder="Enter your name"
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  name='url'
                  placeholder="Enter your photo url"
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  name='email'
                  placeholder="Enter your email"
                />
                <div className='relative'>
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type={toggleShow ? "text" : "password"}
                  name='password'
                  placeholder="Password"
                />
                <div className='absolute top-[14px] right-[10px] cursor-pointer select-none' onClick={() => setToggleShow(!toggleShow)}>
                {
                  toggleShow ?  <FaEye className='text-lg'/> : <FaEyeSlash className='text-lg'/>
                }
                </div>
                </div>
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  name='admin'
                  placeholder="Enter secret word for admin panel"
                />
                <p className='text-sm text-red-500'>{error}</p>
                <button className="mt-5 tracking-wide font-semibold bg-green-400 text-gray-100 w-full py-4 rounded-lg hover:bg-green-300 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Register</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account?{" "}
                  <Link to={'/login'}>
                    <span className="text-green-400 font-semibold">Login</span>
                  </Link>
                </p>
                <hr />
                <div onClick={handleGmailLogin} className='btn bg-green-400 text-white'><FaGoogle/> Google</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default RegisterPage;
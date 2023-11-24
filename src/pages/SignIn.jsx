import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function SignIn() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    function changeHandler() {

    }
    function showPassword() {

    }
    function setShowPassword() {

    }
    return (
        <div className='w-8/12 mx-auto flex mt-6'>

            <form className='w-6/12 font-poppins relative' action="/">
                <div className='mt-8'>
                    <h2 className='text-green-600 font-poppins font-bold text-[36px]'>Sign In</h2>
                    <p className='mt-3'>If you don’t have an account register</p>
                    <p>You Can <span className='text-green-500 font-bold'>Register Here!</span></p>
                </div>
                <label >
                    <p className='mt-6'>
                        Email Address<sup className='text-red-500 font-bold'>*</sup>
                    </p>
                    <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Enter email id"
                        name="email"
                        className='my-3 w-full border border-black rounded-md px-[20px] py-[10px]'
                    />
                </label>

                <label >
                    <p className='mt-6 '>
                        Password<sup className='text-red-500 font-bold'>*</sup>
                    </p>
                    <div className='relative'>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            name="password"
                            className='my-3 w-full border border-black rounded-md px-[20px] py-[10px]'
                        />

                        <span className='absolute right-4 top-6' onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </div>

                    <Link to="#">
                        <p className='text-blue-500 text-right mt-[-10px]'>
                            Forgot Password
                        </p>
                    </Link>
                </label>

                <button className='border rounded-md text-white bg-green-900 font-bold hover:bg-green-600
                 border-black px-[20px] py-[10px] mt-3'>
                    Login
                </button>
            </form>
            <div>
                <img src="illustration2.png" alt="" />
            </div>
        </div>
    )
}

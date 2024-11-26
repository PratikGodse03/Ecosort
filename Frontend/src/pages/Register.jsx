import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useRegisterMutation } from '../slices/userApiSlice';
import { toast } from 'react-toastify'

export default function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPass, setShowPass] = useState();


    const [formData, setFormData] = useState({
        firstName: "", lastName: "",
        email: "", password: ""
    })

    const [register, { isLoading }] = useRegisterMutation();


    async function submitHandler(e) {
        e.preventDefault();
        console.log(formData);

        const { firstName, lastName } = formData;
        const fullName = firstName + " " + lastName;

        const data = { name: fullName, email: formData.email, password: formData.password }
        try {
            const res = await register(data).unwrap();
            if (res.success) {
                toast.success(res.message);
                navigate('/login')
            }
            else toast.error(res.message);
        } catch (err) {
            toast.error(err.data?.message || err?.error);
        }

    }

    function changeHandler(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div className='w-8/12 mx-auto flex mt-6'>

            <form onSubmit={submitHandler} className='w-6/12 font-poppins relative' action="/">
                <div className='mt-8'>
                    <h2 className='text-green-600 font-poppins font-bold text-[36px]'>Register</h2>
                </div>
                <div className='flex w-full gap-4 flex-row'>
                    <label htmlFor="fname">
                        <p className='mt-6'>
                            FirstName<sup className='text-red-500 font-bold'>*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            value={formData.firstName}
                            onChange={changeHandler}
                            placeholder="Enter your FirstName"
                            name="firstName"
                            className='my-3 w-full border border-black rounded-md px-[20px] py-[10px]'
                        />
                    </label>
                    <label htmlFor="lname">
                        <p className='mt-6'>
                            LastName<sup className='text-red-500 font-bold'>*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            value={formData.lastName}
                            onChange={changeHandler}
                            placeholder="Enter your LastName"
                            name="lastName"
                            className='my-3 w-full border border-black rounded-md px-[20px] py-[10px]'
                        />
                    </label>
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
                            type={showPass ? ("text") : ("password")}
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            name="password"
                            className='my-3 w-full border border-black rounded-md px-[20px] py-[10px]'
                        />

                        <span className='absolute right-4 top-6' onClick={() => setShowPass((prev) => !prev)}>
                            {showPass ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </div>
                </label>

                <button className='border rounded-md text-white bg-green-900 font-bold hover:bg-green-600
                 border-black px-[20px] py-[10px] mt-3'>
                    Sign Up
                </button>
            </form>
            <div>
                <img src="illustration2.png" alt="" />
            </div>
        </div>
    )
}
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';


export default function SignUpForm() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", confirmPassword: "", message: "",
    })


    function changeHandler(e) {
        setFormData((prev) => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }))
    }
    function submitHandler(e) {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords Do not Match");
        }

        toast.success("Account Created");
        navigate("/login")

    }
    function setMessage() {

    }
    return (
        <div className='w-8/12 mx-auto mt-[60px]'>
            <form onSubmit={submitHandler} >

                <div className='flex justify-between w-full gap-4 my-4'>
                    <label className='w-full'>
                        <p className=' mb-1'>First Name <sup className='text-pink-200'>*</sup></p>
                        <input
                            type="text"
                            required
                            placeholder='Enter First Name'
                            value={formData.firstName}
                            name='firstName'
                            onChange={changeHandler}
                            className='border border-black rounded-[0.5rem] p-[12px] w-full '
                        />
                    </label>

                    <label className='w-full'>
                        <p className=' mb-1'>Last Name <sup className='text-pink-200'>*</sup></p>
                        <input
                            type="text"
                            required
                            placeholder='Enter Last Name'
                            value={formData.lastName}
                            name='lastName'
                            onChange={changeHandler}
                            className='border border-black  rounded-[0.5rem] p-[12px] w-full '
                        />
                    </label>
                </div>

                <label >
                    <p className='mb-1'>Enter Email Address <sup className='text-pink-200'>*</sup></p>
                    <input
                        type="email"
                        placeholder='Enter Email Address'
                        required
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        className='border border-black rounded-[0.5rem] p-[12px] w-full'
                    />
                </label>

                <div className='flex justify-between w-full gap-4 mt-6'>
                    <div className="form-group flex gap-6">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            className='border border-black rounded-md p-2'
                            id="message"
                            value={formData.message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows={5}
                            cols={75}
                            placeholder='    Enter your message here....'
                        ></textarea>
                    </div>

                </div>
                <button className='mt-6  rounded-md px-[20px] py-2 text-white text-xl bg-green-900 hover:bg-green-600 text-center  my-auto'>
                    Send Message
                </button>
            </form>

        </div>
    )
}

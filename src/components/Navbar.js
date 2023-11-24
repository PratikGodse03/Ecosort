import React from 'react'

import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div className='flex w-8/12 justify-between align-baseline mx-auto mt-5'>
            <Link to="/">
                <img src="logo.png" alt="ecosort Logo" className='my-[-15px]' width={234} height={50} loading='lazy' />
            </Link>

            <nav className='flex items-center '>
                <ul className='flex justify-center items-baseline font-rubik  gap-[100px]'>
                    <li className='text-green-600 font-bold text-[1.40rem]'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='text-green-600 font-bold text-[1.40rem]'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='text-green-600  font-bold text-[1.40rem]'>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <Link to="/login">
                        <button className='rounded-md px-[20px] py-2 text-white text-xl bg-green-900 hover:bg-green-600 text-center '>
                            Sign In
                        </button>
                    </Link>
                </ul>

            </nav>

            {/* Login Button */}




        </div>
    )
}

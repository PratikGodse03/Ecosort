import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLogoutMutation } from '../slices/userApiSlice'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../slices/authSlice';
import { toast } from 'react-toastify'


export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.auth)
    const [logout] = useLogoutMutation();
    const logoutHandler = async () => {
        try {
            const res = await logout().unwrap();
            dispatch(logOut());
            navigate('/')
            toast.success(res.message);
        } catch (err) {
            toast.error(err?.message || err?.error);
        }
    }
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
                    {userInfo ? <Link to="/login">
                        <button onClick={logoutHandler} className='rounded-md px-[20px] py-2 text-white text-xl bg-red-500 hover:bg-red-400 text-center '>
                            LogOut
                        </button>
                    </Link> : <Link to="/login">
                        <button className='rounded-md px-[20px] py-2 text-white text-xl bg-green-900 hover:bg-green-600 text-center '>
                            Sign In
                        </button>
                    </Link>}
                </ul>

            </nav>

            {/* Login Button */}




        </div>
    )
}

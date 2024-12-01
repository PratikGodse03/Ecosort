import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useLoginMutation } from '../slices/userApiSlice'
import { toast } from 'react-toastify';
import { setCredentials } from '../slices/authSlice'
import { useDispatch, useSelector } from 'react-redux';


export default function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPass, setShowPass] = useState();

    const [login, { isLoading }] = useLoginMutation();


    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/predict'

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) navigate(redirect);
    }, [userInfo, redirect])




    async function submitHandler(e) {
        e.preventDefault();
        //console.log(formData);

        try {
            const res = await login(formData).unwrap();
            /* console.log(res) */
            if (res.success) {
                dispatch(setCredentials({ ...res }))
                toast.success(res.message);
                navigate(redirect)
            }
            else toast.error(res.message);
        } catch (err) {
            toast.error(err.data?.message || err?.error);
        }

        //Another way
        /* const response = await fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to login');
        }
        const data = await response.json();
        console.log(data);
        return data; */


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
                    <h2 className='text-green-600 font-poppins font-bold text-[36px]'>Sign In</h2>
                    <p className='mt-3'>If you don’t have an account register</p>
                    <p>You Can <span className='text-green-500 font-bold'>
                        <Link to="/register">
                            Register now!
                        </Link>
                    </span></p>
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

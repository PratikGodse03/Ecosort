import React from 'react'

export default function About() {
    return (
        <div className='flex flex-col w-8/12 mx-auto mt-[75px] relative py-3'>
            <h1 className='text-heading-600 font-inter text-[64px] font-bold' >What ECO-SORT Offers</h1>
            <div className='mt-4  bg-green-800 flex p-[50px] py-[60px] gap-[50px] rounded-[30px]'>
                <div className='bg-green-400 w-[283px] relative rounded-md'>
                    <img src="Rectangle 6.png" className='mx-auto my-6' width={200} height={112} alt="" />
                    <p className='mt-3 px-3 heading-600 font-inter text-lg font-bold'>Classify the waste in Bio/Non Biodegradable category.</p>
                    <div className='relative left-[180px]'>
                        <img src="Ellipse 1.svg" alt="" />
                        <img src="Polygon 1.png" className='z-10 absolute top-[16px] left-[21px] ' alt="" />
                    </div>
                </div>
                <div className='bg-green-400 w-[283px] relative rounded-md'>
                    <img src="Rectangle 6.png" className='mx-auto my-6' width={200} height={112} alt="" />
                    <p className='mt-3  px-3 heading-600 font-inter text-lg font-bold'>Classify Waste in Reduce,Reuse and Recyclable</p>
                    <div className='relative left-[180px]'>
                        <img src="Ellipse 1.svg" alt="" />
                        <img src="Polygon 1.png" className='z-10 absolute top-[16px] left-[21px] ' alt="" />
                    </div>
                </div>
                <div className='bg-green-400 w-[283px] relative rounded-md '>
                    <img src="Rectangle 6.png" className='mx-auto my-6' width={200} height={112} alt="" />
                    <p className='mt-3 px-3 my-7  heading-600 font-inter text-lg font-bold'>Classify plastic in different Categories</p>
                    <div className='relative left-[180px]'>
                        <img src="Ellipse 1.svg" alt="" />
                        <img src="Polygon 1.png" className='z-10 absolute top-[16px] left-[21px] ' alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

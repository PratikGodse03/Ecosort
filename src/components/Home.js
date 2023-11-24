import React from 'react'

export default function Home() {
    return (
        <div className='flex w-8/12 mx-auto mt-[75px] relative py-3'>
            <div className='w-1/2 flex flex-col gap-[40px]'>
                <h1 className='text-[80px] leading-[116px] uppercase text-heading-600 font-inter font-bold  w-[568px] h-[118px]'>Eco-sort</h1>
                <p className='text-3xl font-bold font-inter h-[162px] w-[400px]'>Trash or treasure? Sort it out and give it a second chance!</p>
                <p className='w-[350px] mt-[-40px] font-inter text-green-500 font-bold'>Discover our user-friendly trash segregation website, your go-to resource for effective waste management. Join us in the journey towards a cleaner, greener future!</p>
            </div>
            <div>
                <img src="illustration1.png" alt="illustration" className='absolute -z-10 right-5' width={600} height={650} loading='lazy' />
            </div>
        </div>
    )
}

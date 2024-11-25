import React from 'react'

export default function Segregate() {
    return (
        <div className='flex w-8/12 mx-auto mt-[75px] relative py-3 gap-6'>
            <div>
                <img src="savePlanet.png" width={500} height={600} alt="" />
            </div>
            <div>
                <div className='flex'>
                    <h1 className='text-[75px] font-inter font-bold text-heading-600'>Why to</h1>
                    <img src="rrrstack.png" alt="" />
                </div>
                <h1 className='text-[75px] mt-[-30px] font-inter font-bold text-heading-600'>Segregate ?</h1>
                <div >
                    <div className='flex gap-4 mt-5'>
                        <img src="point.png" width={30} height={35} alt="" />
                        <h2 className='font-inter text-[24px] font-bold'>Environmental Conservation</h2>
                    </div>
                    <div className='flex gap-4 mt-5'>
                        <img src="point.png" width={30} height={35} alt="" />
                        <h2 className='font-inter text-[24px] font-bold'>Energy Savings</h2>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <img src="point.png" width={30} height={35} alt="" />
                        <h2 className='font-inter text-[24px] font-bold'>Health and Safety</h2>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <img src="point.png" width={30} height={35} alt="" />
                        <h2 className='font-inter text-[24px] font-bold'>Sustainable Future</h2>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <img src="point.png" width={30} height={35} alt="" />
                        <h2 className='font-inter text-[24px] font-bold'>Lower Carbon Footprint</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

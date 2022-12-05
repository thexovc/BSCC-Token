import React from 'react'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='text-gray-300 w-full p-4 px-8 bg-[#101422] fixed bottom-0'>
            <a target="_blank" href="https://twitter.com/thexovc" className='bg-[#101422] flex justify-center items-center cursor-pointer md:text-2xl'>
                <BsTwitter className='text-xl md:text-3xl text-blue-400' />
                <span className='pl-2 text-orange-300'>Daniel Osariemen</span>
            </a>
        </div>
    )
}

export default Footer
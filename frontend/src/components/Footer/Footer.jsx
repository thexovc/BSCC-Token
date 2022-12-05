import React from 'react'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='text-gray-300 bottom-0 fixed right-0 p-4 px-8'>
            <a target="_blank" href="https://twitter.com/thexovc" className='flex justify-center items-center cursor-pointer md:text-2xl'>
                <BsTwitter className='text-xl md:text-3xl text-blue-400' />
                <span className='pl-2 text-orange-300'>Daniel Osariemen</span>
            </a>
        </div>
    )
}

export default Footer
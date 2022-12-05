import React, { useContext } from 'react'
import logo from '../../assets/svg/logo.svg'
import { SiBinance } from 'react-icons/si'
import bnb from '../../assets/images/bnb.png'
import { BContext } from '../../context/BContext'

const Navbar = () => {
    const { connectWallet, currentAccount } = useContext(BContext)

    return (
        <nav className='md:w-full w-full flex text-white p-4 justify-between'>
            <div className="flex items-center md:w-4/12 ">
                <ul className='flex justify-between w-full px-4 text-xl items-center'>
                    <a>
                        <li className='border-4 border-green-400 rounded-full'>
                            <img src={bnb} className='w-[60px] h-[60px] border-4 border-white rounded-full ' alt="" />
                        </li>
                    </a>

                </ul>
            </div>

            <div className='md:w-4/12 px-2 hidden md:flex'>
                <input className='w-full p-4 text-xl bg-gray-700 bg-transparent rounded-lg border-gray-300 border-2' placeholder='Search Tokens and NFTs Collections ' />
            </div>

            <div className='md:w-4/12 text-sm  md:text-xl flex items-center gap-20 px-4'>

                <p className='hidden md:flex md:items-center md:gap-1'>
                    <span className='p-1 bg-orange-700  rounded-full'>
                        <SiBinance />
                    </span>
                    <span>BNB</span>

                </p>
                <p onClick={connectWallet} className='px-3 py-3 gap-1 cursor-pointer bg-[#213159] flex items-center rounded-l-3xl md:justify-evenly text-[#4D83FB]  md:items-center rounded-r-3xl '>
                    {currentAccount ? (
                        <>
                            {currentAccount.slice(0, 8)}...
                        </>) : "Connect"}

                </p>
            </div>
        </nav>
    )
}

export default Navbar
import React, { useContext, useState } from 'react'
import { FiSettings } from 'react-icons/fi'
import { BContext } from '../../context/BContext';
import { ethers } from 'ethers';
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();

    const { briskAddress, abi } = useContext(BContext)

    const [loading, setLoading] = useState(false)
    const [amount, setAmount] = useState(0)

    const mintToken = async () => {
        setLoading(true)
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(briskAddress, abi, signer)



        let priceQty = amount / 10000;

        priceQty = Math.floor(priceQty)

        console.log("priceQty:", priceQty)
        const price = 0.02 * priceQty;

        try {
            if (priceQty == 0) {
                const mintToken = await tokenContract.mintToken(amount, { value: ethers.utils.parseEther("0.02") })
                setAmount(0)
                console.log(mintToken)
                navigate("/trx");
            } else {
                const mintToken = await tokenContract.mintToken(amount, { value: ethers.utils.parseEther(price.toString()) })
                setAmount(0)
                console.log(mintToken)
                navigate("/trx");
            }


            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
            return
        }
    }


    return (
        <div className='mt-20 flex bg-[#101422] flex-col justify-center items-center md:w-full h-full w-full text-[#bdb8fa]'>
            <div className='bg-[#0C111D] md:w-6/12  w-11/12 p-8 rounded-2xl'>
                <div className='flex w-full justify-between font-semibold'>
                    <p className='text-xl'>Mint BSCC Token</p>
                    <FiSettings className='text-2xl' />
                </div>

                <div className='flex w-full flex-col mt-10 py-5'>
                    {/* <div className="flex -mb-4 justify-between px-4 py-8 text-2xl bg-[#131A2A] rounded-xl">
                        <input onChange={(e) => setAmount(e.target.value)} type="number" className='bg-transparent' placeholder='0' />
                        <p className='flex font-semibold items-center bg-gray-500 gap-1 text-white p-1 rounded-2xl'>
                            <span className='p-1 bg-[#637FEA]  rounded-full'>
                                <FaEthereum />
                            </span>
                            <span className='text-lg md:text-2xl '>ETH</span>
                            <span>
                                <RiArrowDropDownLine className='text-3xl' />
                            </span>
                        </p>
                    </div>
                    <div className='flex justify-center w-full'>
                        <p className='text-4xl md:w-1/12  w-2/12 flex items-center border-4  justify-center bg-[#293348] border-[#0C111D] rounded-lg z-40'>
                            <AiOutlineArrowDown />
                        </p>
                    </div> */}
                    <div className="flex -mt-4 justify-between px-4 py-8 text-2xl bg-[#131A2A] rounded-xl">
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className='bg-transparent w-2/3 p-2' placeholder='0' />
                        <p className='bg-[#4D83FB] md:text-xl  md:w-1/3 mx-4 p-4 justify-center font-semibold text-white rounded-2xl  flex'>
                            <span className='md:text-xl text-sm text-center'> BSCC</span>
                        </p>
                    </div>
                </div>

                <div className="flex justify-center mt-5 w-full bg-[#1D2D51]  py-4 rounded-2xl text-[#bdb8fa] hover:cursor-pointer cursor-pointer">
                    <p className='md:text-2xl text-lg text-[#4D83FB] font-semibold cursor-pointer' onClick={mintToken}>
                        {loading ? "Loading ..." : "Mint"}
                    </p>
                </div>
            </div>

            <div className='mt-10 flex justify-center'>
                <Link to='/trx' className='text-blue-300 text-lg underline cursor-pointer'>View Your Transactions</Link>
            </div>
        </div>
    )
}

export default Main
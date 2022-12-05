import { ethers } from 'ethers'
import React, { useContext, useEffect, useState } from 'react'
import { BContext } from '../../context/BContext'
import bnb from '../../assets/images/bnb.png'

const Trx = () => {
    const { briskAddress, abi, currentAccount } = useContext(BContext)
    const [trx, setTrx] = useState()


    const updateUIValues = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const tokenContract = new ethers.Contract(briskAddress, abi, provider)



        let arr = []

        if (currentAccount) {
            let prof = await tokenContract.getTrx(currentAccount)
            console.log("Prf", prof)

            if (!prof.completed) {
                arr.push(prof)
            }
        }


        if (arr.length > 0) {
            setTrx(arr)
        }

        console.log(trx)

    }

    useEffect(() => {
        setTimeout(() => {
            updateUIValues()
        }, 1000);
    })


    return (
        <div className='w-full flex justify-center'>

            <ul class="md:w-7/12 w-10/12 mt-20 sm:w-9/12 divide-y divide-gray-200 text-white dark:divide-gray-700">

                {trx?.map((myTrx) => myTrx.map((item) =>
                (
                    <li class="pb-3 sm:pb-4 mt-2">
                        <div class="flex items-center space-x-4 mt-4">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full" src={bnb} alt="Neil image" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-white truncate dark:text-white">
                                    BSCC Token
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    12th of July 2022
                                    {/* <ul className='text-orange-300'>view transaction</ul> */}
                                </p>
                            </div>

                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-white truncate dark:text-white">
                                    {ethers.utils.formatEther(item?.price)}BNB
                                </p>

                            </div>

                            <div class="inline-flex items-center text-base font-semibold text-white dark:text-white">
                                {item?.amount.toString()} BSCC
                            </div>
                        </div>
                    </li>
                )
                ))}

                {/* {trx?.length < 2 && (
                    <div className='w-full flex justify-center text-xl'>
                        <p>No Transaction</p>
                    </div>
                )} */}

            </ul>

        </div>
    )
}

export default Trx
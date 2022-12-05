import { ethers } from 'ethers'
import { createContext, useEffect, useState } from 'react'
import { abi } from '../constants'

export const BContext = createContext()

export const BProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState('')
  const [currentAccount, setCurrentAccount] = useState('')
  const [currentUser, setCurrentUser] = useState({})

  const briskAddress = "0xC864c9E4Aab52530819af3A087c0deBB64C170FF"

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])


  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {

      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        // params: [{ chainId: "0x1" }]
        params: [{ chainId: ethers.utils.hexlify(97) }]
      });


      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        setAppStatus('connected')
        setCurrentAccount(addressArray[0])
      } else {
        // if (!me) {
        //   router.push('/')
        // }

        setAppStatus('notConnected')
      }
    } catch (err) {
      // if (!me) {
      //   router.push('/')
      // }
      setAppStatus('error')
    }
  }

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please Make Sure You Have Web3 Enabled")
      return
    }
    try {
      setAppStatus('loading')

      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        // params: [{ chainId: "0x1" }]
        params: [{ chainId: ethers.utils.hexlify(97) }]
      });

      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (addressArray.length > 0) {
        setCurrentAccount(addressArray[0])

        if (window.ethereum) {
          const currentChainId = await window.ethereum.request({
            method: 'eth_chainId',
          });

          // return true if network id is the same

        }

      } else {

        setAppStatus('notConnected')
      }
    } catch (err) {
      setAppStatus('error')
    }
  }


  return (
    <BContext.Provider
      value={{
        appStatus,
        currentAccount,
        connectWallet,
        setAppStatus,
        briskAddress,
        abi,
      }}
    >
      {children}
    </BContext.Provider>
  )
}
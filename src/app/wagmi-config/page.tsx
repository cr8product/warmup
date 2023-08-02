"use client"
import { WagmiConfig } from 'wagmi'
import { Web3Button, Web3Modal } from '@web3modal/react'
import { ethereumClient, projectId, chains, wagmiConfig } from './config'

import Navbar from '../components/navbar/navbar'

function HomePage() {
  return <Web3Button />
}

export default function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Navbar />
        <HomePage />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}
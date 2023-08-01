"use client"
import { WagmiConfig } from 'wagmi'
import { Web3Modal } from '@web3modal/react'
import { ethereumClient, projectId, chains, wagmiConfig } from './config'
import { Web3Button } from '@web3modal/react'

function HomePage() {
  return <Web3Button />
}

export default function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <HomePage />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}
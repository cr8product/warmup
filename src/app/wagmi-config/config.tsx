import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

export const chains = [arbitrum, mainnet, polygon]
export const projectId = '497499be6d14a6f6f92aed30dc94bd71'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
export const ethereumClient = new EthereumClient(wagmiConfig, chains)
"use client";
import { Web3Button, Web3Modal, Web3NetworkSwitch } from "@web3modal/react";
import { WagmiConfig } from "wagmi";
import { ethereumClient, projectId, chains, wagmiConfig } from '@/app/wagmi-config/config'

export default function ActionButton() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <a className="btn">Button</a>
        <Web3NetworkSwitch />
        <Web3Button />
        
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

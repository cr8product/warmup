"use client";
import { Web3Button, Web3Modal, Web3NetworkSwitch } from "@web3modal/react";
import { WagmiConfig } from "wagmi";
import { ethereumClient, projectId, chains, wagmiConfig } from '@/app/wagmi-config/config'
import Link from "next/link";

export default function ActionButton() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/sign-up" className="btn btn-warning">Sign Up</Link>
        <Web3NetworkSwitch />
        <Web3Button />
        
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

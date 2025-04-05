import { useState } from 'react'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { sepolia } from 'wagmi/chains'
import ConnectWallet from './components/ConnectWallet'
import TransactionCounter from './components/TransactionCounter'
import './styles/App.css'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [publicProvider()],
)

const config = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: {
        projectId: '44e9663828baee914c5165ae2ee07cc1', // Replace with your WalletConnect ID
        showQrModal: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
})

function App() {
  const [address, setAddress] = useState('')

  return (
    <WagmiConfig config={config}>
      <div className="app">
        <h1>Tea Protocol Transaction Counter</h1>
        <ConnectWallet onAddressChange={setAddress} />
        {address && <TransactionCounter address={address} />}
      </div>
    </WagmiConfig>
  )
}

export default App
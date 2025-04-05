import { useAccount, useDisconnect } from 'wagmi'

export default function ConnectWallet({ onAddressChange }) {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()

  if (isConnected) {
    onAddressChange(address)
    return (
      <div className="wallet-connected">
        <p>Connected: {address}</p>
        <button onClick={disconnect}>Disconnect</button>
      </div>
    )
  }

  return (
    <w3m-button />
  )
}
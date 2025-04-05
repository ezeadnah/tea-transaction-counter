import { createConfig } from '@wagmi/core'
import { walletConnect } from '@wagmi/connectors'

export const config = createConfig({
  connectors: [
    walletConnect({ projectId: '44e9663828baee914c5165ae2ee07cc1' })
  ],
  // Add other required configurations
})
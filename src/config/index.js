import {Wallet} from 'ethers'

export const wallets = {
  manager: new Wallet(process.env.MANAGER_PRIVATE_KEY),
  dataProvider: new Wallet(process.env.DATA_PROVIDER_PRIVATE_KEY),

}

export const availableNetworks = process.env.AVAILABLE_NETWORKS.split(',')

export const config = {
  wallets,
  availableNetworks
}

export default config
# wallet-kit-Web3
This kit will help connect you dApp to different Ethereum wallets, e.g. Metamask. With web3-wallets-kit, you can create Web3WalletsManager and connect your dApp to the wallet of your choice using one of the supported wallet integrations.

# Installation
npm install --save @web3-wallets-kit/core

npm install --save @web3-wallets-kit/inpage-connector or another integration

# Creating and managing wallets
import Web3 from 'web3';
import { Web3WalletsManager } from '@web3-wallets-kit/core';
import { InpageConnector } from '@web3-wallets-kit/inpage-connector';

// Create Web3WalletsManager instance
const web3Manager = new Web3WalletsManager<Web3>({
  defaultProvider: {
    network: 'kovan',
    infuraAccessToken: 'INFURA_API_KEY',
  },
  makeWeb3: provider => new Web3(provider), // you can use web3.js, ethers.js or another suitable library
});

// Create connector
const connector = new InpageConnector();

// Connect to wallet
await web3Manager.connect(connector);

// Get address and Web3 for sending transaction
const myAddress = web3Manager.account.value;
const txWeb3 = web3Manager.txWeb3.value;

// Create contract
const daiContract = txWeb3.eth.Contract(DAI_ABI, '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea');

// Send transaction
await daiContract.methods
  .transfer('0x0000000000000000000000000000000000000000', '1000000000000000000')
  .send({ from: myAddress });

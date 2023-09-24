import {ethers} from 'ethers' 

// var provider = new ethers.providers.InfuraProvider("goerli", '54458b95c9b541c09452a4a48c3d3376');


// let wallet = ethers.Wallet.fromMnemonic('old two trap alpha brisk frozen endless rubber clip blush beach shiver');
// wallet = wallet.connect(provider);


//let wallet = ethers.Wallet.fromMnemonic('old two trap alpha brisk frozen endless rubber clip blush beach shiver');
let abi =
[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "maxNftSupply",
				"type": "uint256"
			}
		],
		"name": "createINft",
		"outputs": [
			{
				"internalType": "contract Nft",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	}
]
//let wallet = ethers.Mnemonic.fromPhrase('old two trap alpha brisk frozen endless rubber clip blush beach shiver')
let provider = new ethers.InfuraProvider('goerli','54458b95c9b541c09452a4a48c3d3376')
let wallet = ethers.Wallet.fromPhrase('old two trap alpha brisk frozen endless rubber clip blush beach shiver')
let w = wallet.connect(provider)
let contract = new ethers.Contract('0x5877e89f66ac5a5c6f14833a4747031e2b705fbc', abi, w );


const methodName = 'createINft';

// Replace 'YOUR_METHOD_ARGUMENTS' with the actual arguments you want to hash
const methodArguments = ['yyyy', '777', 1];

const iface = new ethers.Interface(abi);
let dat = iface.encodeFunctionData(methodName, methodArguments)
console.log('-----contract call data hash-------')

console.log(dat)
//const data = iface.abiCoder.encode(methodName, methodArguments);
//console.log(ethers.AbiCoder.encode(methodName,methodArguments))

//console.log(ethers.AbiCoder.encode(methodName, methodArguments))

//const methodHash = ethers.keccak256(data);
//const fee = ethers.parseEther('0.01');

//const fee = ethers.parseEther('0.01');


const transaction = {
    //to: '0x330b977ad348334f1fdb62a7fd8102e654faec77',
    data: dat,
    gasLimit: "21000000",
    maxFeePerGas: "3000",
    maxPriorityFeePerGas: "100",
    
  };

//const signedTransaction = await w.signTransaction(transaction);

//console.log(signedTransaction)
const tx = await w.sendTransaction(transaction);
console.log('-----tx hash-------')
console.log(tx)
//console.log(methodHash)


//console.log('------------------------yay mint complete!--------------------------------------')
//let mint = await contract.safeMint('0x1c5456054AA45F708f664aa7e6ff5D62bCE3C10D', 'https://jalvarez212.github.io/portfolio/').staticCallResult([]) ;



//console.log(mint)
//

//
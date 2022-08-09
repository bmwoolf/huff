let Web3 = require("web3");

function getMethodSign(name, ...params) {
    return Web3.utils.sha3(`${name}(${params.join(',')})`).substr(0, 10)
  }
  
  const writeMethodSig = getMethodSign('mint', 'address', 'address', 'uint256');
  console.log(writeMethodSig)
  const viewMethodSig = getMethodSign('name');
  console.log(viewMethodSig)
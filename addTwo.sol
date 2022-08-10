// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

contract addTwoContract {
    function addTwo(uint a, uint b) public returns (uint) {
        // yul
        assembly {
            mstore(0x00, a)
        }
        
        return a + b;
    }
}
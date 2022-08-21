// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract TestMultiCall {
    
    
    function getData(uint _i) external pure returns (bytes memory) {
        return abi.encodeWithSignature("test(uint256)", _i);
    }
}

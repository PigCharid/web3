// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract TestMultiCall {
    

    uint[] public a;
    function test(uint _i) external {
        a.push(_i);
    }
}








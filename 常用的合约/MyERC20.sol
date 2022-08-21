// SPDX-License-Identifier:MIT
pragma solidity 0.8.13;
import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";
contract MyERC20 is ERC20PresetFixedSupply {
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address owner
    ) ERC20PresetFixedSupply(name, symbol,initialSupply,owner) {
        
    }
}
// SPDX-License-Identifier:MIT
pragma solidity 0.8.13;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
contract useIERC20 {
    function transferFrom(address _contract,address from,address to,uint value)external {
        IERC20(_contract).transferFrom(from,to,value);
    }
}
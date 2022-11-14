// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.6.0 <0.9.0;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    string public greeting="Hello from Hardhat";
    
    function greet()public view returns(string memory){
        return greeting;
    }
    function setGreeting(string memory _greeting)public{
        greeting=_greeting;
    }
    
}

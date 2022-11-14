require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {

  solidity: "0.8.17",
  networks:{
    localganache:{
      url:'HTTP://127.0.0.1:7545',
      accounts:[{REACT_APP_PRIVATE_KEY}]
    }
  },
  paths:{
    artifacts:"./src/artifacts"
  }
};

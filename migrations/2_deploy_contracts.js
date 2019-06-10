var AnnCoin = artifacts.require("./constracts/AnnCoin.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(AnnCoin, 'ANN', 'AnnCoin');
};

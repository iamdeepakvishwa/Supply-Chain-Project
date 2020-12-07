const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "spirit supply whale amount human item harsh scare congress discover talent hamster";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/f0f7cf710a0e435fb85a78894d82f2b7")
      },
      network_id: 3,
      from: "0x27D8D15CbC94527cAdf5eC14B69519aE23288B95"
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/8f197db384fe47869101bbf9bc99c561`),
        network_id: 4,
        gas: 4500000,
        gasPrice: 10000000000,
        networkCheckTimeout: 1000000000,
        timeoutBlocks: 200
    },
  }
};
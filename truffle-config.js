const path = require("path");
var Web3 = require('web3');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      provider: () => {
        const appCred = 'yourappcred'; // from application credential widget
        const connectionURL = 'nodeConnectionURL'; // without protocol (https://)
        return new Web3.providers.HttpProvider(`https://${appCred}@${connectionURL}`, 100000);
      },
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000
    },
  }
};

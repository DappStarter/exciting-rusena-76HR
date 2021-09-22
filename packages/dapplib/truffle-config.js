require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remind exchange inflict clock obscure gift'; 
let testAccounts = [
"0x95961f676fa2f85975bd920f65b2add9b3d8a983ea4bd91816ad391267f0e417",
"0xaaca6ec9ee6e7943e6ab3015964a1c0b1cb92080300259863075e55874588d8c",
"0xbd5b389b409caaa8a10c190ceb0e100606ec02b89169990c77553637b2844cc0",
"0x7879db0c5b748e24fbd8c0acdc97eea6a0f14628f1ae180eee1d3ac67306aa01",
"0xa16a0e76038b83cfcd6c15ea5443c841c16c50b0ac19cb0de234e722ab4a51ed",
"0x539aaac9089a492318092a73197b83b856d4c3d4c0635828439f47c06e3fe51b",
"0x48efd9ce9fd2daacc7562ea9ad6389f5366c2c2b82adc755e533cd3ef97411f4",
"0xd478c8434b30e1d346f8acf660d53d6e2cf5e9d661bf7b71c01514635d618047",
"0x648297565ed88de8c6180b8dc02735bb8655de0ddaebbbc6d45215ccc9738fff",
"0x2f3c418cea47e5a774e88e43679845d3102fc7e53efa30f470fb0ba5b04a596a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



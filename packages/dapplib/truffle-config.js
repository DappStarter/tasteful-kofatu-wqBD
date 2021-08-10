require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remember hospital grid arm bubble gesture'; 
let testAccounts = [
"0x3a4323c94264b3eea82f4ed54acd82c485c1c9e5d70cf1ae9302b8d92a371769",
"0x7d03e721e7ee52d295f691cc0bf2c9a45a66461d42915e74460567dc4fd39d99",
"0xf973386517f43c357d6bc13d63703461a5785477f6505e788537f2515131c5b3",
"0x95de0f99d4fdd5c5af5879e86853dd092a37b82a09cfa0b17397977703c536e9",
"0x44d2bf7ead3128c13a4b8cb6df77e9ac7d68747045e24a7a153f6c783a8525ce",
"0x5ea461411a253d78ea8392dfba431778c326064ba0ae4903ea6bcb6c05285687",
"0x21e3cd25eb51ad5830473830defbc97486eb50c40f9bfe6f47f1c229956a2669",
"0xab52e3aac53fe10a4f8ad3e66385ae6d3671f85a311b4911d135cc47a66a061f",
"0x9dde4dde20a1ab76a65560d15d092684709606cf77e3bd5e0dbce2df5fccef83",
"0x416a30617ba96554c8d349e32905436a69d055ecc6767101a9c604cd401d8bfc"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


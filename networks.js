var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};

exports.livenet = {
  name: 'livenet',
  magic: hex('f9beb4d9'),
  addressVersion: 0x00,
  privKeyVersion: 128,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('6FE28C0AB6F1B372C1A6A246AE63F74F931E8365E15A089C68D6190000000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 2083236893,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1231006505,
    bits: 486604799,
  },
  dnsSeeds: [
    'seed.bitcoin.sipa.be',
    'dnsseed.bluematt.me',
    'dnsseed.bitcoin.dashjr.org',
    'seed.bitcoinstats.com',
    'seed.bitnodes.io',
    'bitseed.xf2.org'
  ],
  defaultClientPort: 8333
};

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};

exports.dogetest = {
		  name: 'dogetest',
		  magic: hex('fcc1b7dc'),
		  addressVersion: 113,
		  privKeyVersion: 241,     /// not sure.. 239,
		  P2SHVersion: 196,
		  hkeyPublicVersion: 0x043587cf,
		  hkeyPrivateVersion: 0x04358394,
		  genesisBlock: {
		    hash: hex('9e555073d0c4f36456db8951f449704d544d2826d9aa60636b40374626780abb'),
		    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
		    height: 0,
		    nonce: 414098458,
		    version: 1,
		    prev_hash: buffertools.fill(new Buffer(32), 0),
		    timestamp: 1296688602,
		    bits: 486604799,
		  },
		  dnsSeeds: [
		    'testnet-seed.bitcoin.petertodd.org',
		    'testnet-seed.bluematt.me'
		  ],
		  defaultClientPort: 18333
		};
exports.ltctest = {
		  name: 'ltctest',
		  magic: hex('fcc1b7dc'),
		  addressVersion: 113,
		  privKeyVersion: 241,     /// not sure.. 239,
		  P2SHVersion: 196,
		  hkeyPublicVersion: 0x043587cf,
		  hkeyPrivateVersion: 0x04358394,
		  genesisBlock: {
		    hash: hex('8ff688015e9008184e384ff2ffdff3dd9cd6ce6a718283c8acbe746ce271aef5'),
		    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
		    height: 0,
		    nonce: 414098458,
		    version: 1,
		    prev_hash: buffertools.fill(new Buffer(32), 0),
		    timestamp: 1296688602,
		    bits: 486604799,
		  },
		  dnsSeeds: [
		    'testnet-seed.bitcoin.petertodd.org',
		    'testnet-seed.bluematt.me'
		  ],
		  defaultClientPort: 18333
		};
exports.demtest = {
		  name: 'demtest',
		  magic: hex('fcc1b7dc'),
		  addressVersion: 113,
		  privKeyVersion: 241,     /// not sure.. 239,
		  P2SHVersion: 196,
		  hkeyPublicVersion: 0x043587cf,
		  hkeyPrivateVersion: 0x04358394,
		  genesisBlock: {
		    hash: hex('2159d1d38f3f5b2b584f40d4cd74be61ff2bbd619db239401bc5be8327fa0000'),
		    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
		    height: 0,
		    nonce: 414098458,
		    version: 1,
		    prev_hash: buffertools.fill(new Buffer(32), 0),
		    timestamp: 1296688602,
		    bits: 486604799,
		  },
		  dnsSeeds: [
		    'testnet-seed.bitcoin.petertodd.org',
		    'testnet-seed.bluematt.me'
		  ],
		  defaultClientPort: 18333
		};
exports.ltclive = {
		  name: 'ltclive',
		  magic: hex('fbc0b6db'),

/*
        PUBKEY_ADDRESS = 48, // Litecoin addresses start with L
        SCRIPT_ADDRESS = 5,
        PUBKEY_ADDRESS_TEST = 111,
        SCRIPT_ADDRESS_TEST = 196,
*/

		  addressVersion: 48,
		  privKeyVersion: 241,     /// not sure.. 239,
		  P2SHVersion: 5,
		  hkeyPublicVersion: 0x043587cf,
		  hkeyPrivateVersion: 0x04358394,
		  genesisBlock: {
		    hash: hex('e2bf047e7e5a191aa4ef34d314979dc9986e0f19251edaba5940fd1fe365a712'),
		    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
		    height: 0,
		    nonce: 414098458,
		    version: 1,
		    prev_hash: buffertools.fill(new Buffer(32), 0),
		    timestamp: 1296688602,
		    bits: 486604799,
		  },
		  dnsSeeds: [
		    'testnet-seed.bitcoin.petertodd.org',
		    'testnet-seed.bluematt.me'
		  ],
		  defaultClientPort: 18333
		};
exports.dogelive = {
		  name: 'dogelive',
		  magic: hex('c0c0c0c0'),
		  addressVersion: 30 ,
		  privKeyVersion: 158,     /// not sure.. 239,
		  P2SHVersion: 22 ,
		  hkeyPublicVersion: 0x043587cf,
		  hkeyPrivateVersion: 0x04358394,
		  genesisBlock: {
		    hash: hex('9156352c1818b32e90c9e792efd6a11a82fe7956a630f03bbee236cedae3911a'),
		    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
		    height: 0,
		    nonce: 414098458,
		    version: 1,
		    prev_hash: buffertools.fill(new Buffer(32), 0),
		    timestamp: 1296688602,
		    bits: 486604799,
		  },
		  dnsSeeds: [
		    'testnet-seed.bitcoin.petertodd.org',
		    'testnet-seed.bluematt.me'
		  ],
		  defaultClientPort: 18333
		};


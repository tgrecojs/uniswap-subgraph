export class AsExchange {
  symbol: string
  name: string
  tokenAddress: string
  tokenDecimals: i32
  exchangeAddress: string
}

export const hardcodedExchanges: Array<AsExchange> = [
  {
    symbol: 'MKR',
    name: 'Maker',
    tokenAddress: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    tokenDecimals: 18,
    exchangeAddress: '0x2c4bd064b998838076fa341a83d007fc2fa50957'
  },
  {
    symbol: 'DAI',
    name: 'Dai Stablecoin v1.0',
    tokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    tokenDecimals: 18,
    exchangeAddress: '0x09cabec1ead1c0ba254b09efb3ee13841712be14'
  },
  {
    symbol: 'GNO',
    name: 'Gnosis Token',
    tokenAddress: '0x6810e776880c02933d47db1b9fc05908e5386b96',
    tokenDecimals: 18,
    exchangeAddress: '0xe8e45431b93215566ba923a7e611b7342ea954df'
  },
  {
    symbol: 'KNC',
    name: 'Kyber Network Crystal',
    tokenAddress: '0xdd974d5c2e2928dea5f71b9825b8b646686bd200',
    tokenDecimals: 18,
    exchangeAddress: '0x49c4f9bc14884f6210f28342ced592a633801a8b'
  },
  {
    symbol: 'LINK',
    name: 'ChainLink Token',
    tokenAddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
    tokenDecimals: 18,
    exchangeAddress: '0xf173214c720f58e03e194085b1db28b50acdeead'
  },
  {
    symbol: 'MANA',
    name: 'Decentraland MANA',
    tokenAddress: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
    tokenDecimals: 18,
    exchangeAddress: '0xc6581ce3a005e2801c1e0903281bbd318ec5b5c2'
  },
  {
    symbol: 'LOOM',
    name: 'LoomToken',
    tokenAddress: '0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0',
    tokenDecimals: 18,
    exchangeAddress: '0x417cb32bc991fbbdcae230c7c4771cc0d69daa6b'
  },
  {
    symbol: 'REP',
    name: 'Reputation',
    tokenAddress: '0x1985365e9f78359a9b6ad760e32412f4a445e862',
    tokenDecimals: 18,
    exchangeAddress: '0x48b04d2a05b6b604d8d5223fd1984f191ded51af'
  },
  {
    symbol: 'SNT',
    name: 'Status Network Token',
    tokenAddress: '0x744d70fdbe2ba4cf95131626614a1763df805b9e',
    tokenDecimals: 18,
    exchangeAddress: '0x1aec8f11a7e78dc22477e91ed924fab46e3a88fd'
  },
  {
    symbol: 'SPANK',
    name: 'SPANK',
    tokenAddress: '0x42d6622dece394b54999fbd73d108123806f6a18',
    tokenDecimals: 18,
    exchangeAddress: '0x4e395304655f0796bc3bc63709db72173b9ddf98'
  },
  {
    symbol: 'HAY',
    name: 'HayCoin',
    tokenAddress: '0xfa3e941d1f6b7b10ed84a0c211bfa8aee907965e',
    tokenDecimals: 18,
    exchangeAddress: '0x78bac62f2a4cd3a7cb7da2991affc7b11590f682'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x78bac62f2a4cd3a7cb7da2991affc7b11590f682',
    tokenDecimals: 18,
    exchangeAddress: '0x7ad24a41ce760232ba2885a91f846ea86c9baa41'
  },
  {
    symbol: 'BORIS',
    name: 'BorisCoin',
    tokenAddress: '0x919d0131fa5f77d99fbbbbace50bcb6e62332bf2',
    tokenDecimals: 18,
    exchangeAddress: '0x4e0e28d426caf318747b8e05c8b0564a580e39a7'
  },
  {
    symbol: 'JCD',
    name: 'J Chan Dollar',
    tokenAddress: '0x0ed024d39d55e486573ee32e583bc37eb5a6271f',
    tokenDecimals: 18,
    exchangeAddress: '0x657184e418d43a661a91d567182dc3d1a4179ec4'
  },
  {
    symbol: 'GUSD',
    name: 'Gemini dollar',
    tokenAddress: '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd',
    tokenDecimals: 2,
    exchangeAddress: '0xd883264737ed969d2696ee4b4caf529c2fc2a141'
  },
  {
    symbol: 'ADX',
    name: 'AdEx',
    tokenAddress: '0x4470bb87d77b963a013db939be332f927f2b992e',
    tokenDecimals: 4,
    exchangeAddress: '0xb800445dd982c1311523fd465ac44f55093b2b5b'
  },
  {
    symbol: 'NEXO',
    name: 'Nexo',
    tokenAddress: '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206',
    tokenDecimals: 18,
    exchangeAddress: '0x069c97dba948175d10af4b2414969e0b88d44669'
  },
  {
    symbol: 'SIM',
    name: 'Simoleon',
    tokenAddress: '0x86c8bf8532aa2601151c9dbbf4e4c4804e042571',
    tokenDecimals: 2,
    exchangeAddress: '0x174dfb6e6e78c95678580b553eee7f282b28c795'
  },
  {
    symbol: 'VERI',
    name: 'Veritaseum',
    tokenAddress: '0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374',
    tokenDecimals: 18,
    exchangeAddress: '0x17e5bf07d696eaf0d14caa4b44ff8a1e17b34de3'
  },
  {
    symbol: 'DNT',
    name: 'district0x Network Token',
    tokenAddress: '0x0abdace70d3790235af448c88547603b945604ea',
    tokenDecimals: 18,
    exchangeAddress: '0xaa3b3810c8aada6cbd2ce262699903ad7ae6a7ef'
  },
  {
    symbol: 'BTU',
    name: 'BTU Protocol',
    tokenAddress: '0xb683d83a532e2cb7dfa5275eed3698436371cc9f',
    tokenDecimals: 18,
    exchangeAddress: '0xea3a62838477082d8f2106c43796d636dc78d8a4'
  },
  {
    symbol: 'sUSD',
    name: 'Synth sUSD',
    tokenAddress: '0x57ab1e02fee23774580c119740129eac7081e9d3',
    tokenDecimals: 18,
    exchangeAddress: '0x69f276abd6456152d519d23086031da7c73f91b8'
  },
  {
    symbol: 'FUN',
    name: 'FunFair',
    tokenAddress: '0x419d0d8bdd9af5e606ae2232ed285aff190e711b',
    tokenDecimals: 8,
    exchangeAddress: '0x60a87cc7fca7e53867facb79da73181b1bb4238b'
  },
  {
    symbol: 'DTH',
    name: 'Dether',
    tokenAddress: '0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190',
    tokenDecimals: 18,
    exchangeAddress: '0xe18256cd23efcdc4f95581e86f61ea1b09afd02a'
  },
  {
    symbol: 'LIF',
    name: 'Lif',
    tokenAddress: '0xeb9951021698b42e4399f9cbb6267aa35f82d59d',
    tokenDecimals: 18,
    exchangeAddress: '0x055bab4bcc17d2ab155fff017fc5e093556c6ad2'
  },
  {
    symbol: 'BAT',
    name: 'Basic Attention Token',
    tokenAddress: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
    tokenDecimals: 18,
    exchangeAddress: '0x2e642b8d59b45a1d8c5aef716a84ff44ea665914'
  },
  {
    symbol: 'TRAC',
    name: 'Trace Token',
    tokenAddress: '0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f',
    tokenDecimals: 18,
    exchangeAddress: '0x38577ccec0ceffd178fd3be66e1c6f531bfa410e'
  },
  {
    symbol: 'PNK',
    name: 'Pinakion',
    tokenAddress: '0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d',
    tokenDecimals: 18,
    exchangeAddress: '0xf506828b166de88ca2edb2a98d960abba0d2402a'
  },
  {
    symbol: 'BOOTY',
    name: 'BOOTY',
    tokenAddress: '0x6b01c3170ae1efebee1a3159172cb3f7a5ecf9e5',
    tokenDecimals: 18,
    exchangeAddress: '0xef465915f2d6d8183a7d5ee134a53f00c780d3e9'
  },
  {
    symbol: 'CVC',
    name: 'Civic',
    tokenAddress: '0x41e5560054824ea6b0732e656e3ad64e20e94e45',
    tokenDecimals: 8,
    exchangeAddress: '0x1c6c712b1f4a7c263b1dbd8f97fb447c945d3b9a'
  },
  {
    symbol: 'SAN',
    name: 'SANtiment network token',
    tokenAddress: '0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098',
    tokenDecimals: 18,
    exchangeAddress: '0x8a8d7ad4b89d91983cd069c58c4aa9f2f4166298'
  },
  {
    symbol: 'LBA',
    name: 'LibraToken',
    tokenAddress: '0xfe5f141bf94fe84bc28ded0ab966c16b17490657',
    tokenDecimals: 18,
    exchangeAddress: '0xe79fe64771d5351b936eeac6222682c3d878063e'
  },
  {
    symbol: 'PRG',
    name: 'PRG',
    tokenAddress: '0x7728dfef5abd468669eb7f9b48a7f70a501ed29d',
    tokenDecimals: 6,
    exchangeAddress: '0x817e391baf312dc5078cd7a98a7a0255ac63ca48'
  },
  {
    symbol: 'AGI',
    name: 'SingularityNET Token',
    tokenAddress: '0x8eb24319393716668d768dcec29356ae9cffe285',
    tokenDecimals: 8,
    exchangeAddress: '0xdf02ffeafdb79e564ae9fdac6545c5f4c2178400'
  },
  {
    symbol: 'ZRX',
    name: '0x Protocol Token',
    tokenAddress: '0xe41d2489571d322189246dafa5ebde1f4699f498',
    tokenDecimals: 18,
    exchangeAddress: '0xae76c84c9262cdb9abc0c2c8888e62db8e22a0bf'
  },
  {
    symbol: 'ENTRP',
    name: 'Hut34 Entropy Token',
    tokenAddress: '0x5bc7e5f0ab8b2e10d2d0a3f21739fce62459aef3',
    tokenDecimals: 18,
    exchangeAddress: '0xa1c467dc897a36689dbbadcc212b212b4f526e49'
  },
  {
    symbol: 'ICN',
    name: 'ICONOMI',
    tokenAddress: '0x888666ca69e0f178ded6d75b5726cee99a87d698',
    tokenDecimals: 18,
    exchangeAddress: '0x467fb51d54d7e51ee925f7f1a81ad5f2a0211169'
  },
  {
    symbol: 'PTOY',
    name: 'Patientory',
    tokenAddress: '0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06',
    tokenDecimals: 8,
    exchangeAddress: '0xe8bc0a210aaf86dab4dd600faca5cfe492e2e084'
  },
  {
    symbol: 'RHOC',
    name: 'RHOC',
    tokenAddress: '0x168296bb09e24a88805cb9c33356536b980d3fc5',
    tokenDecimals: 8,
    exchangeAddress: '0x394e524b47a3ab3d3327f7ff6629dc378c1494a3'
  },
  {
    symbol: 'CND',
    name: 'Cindicator Token',
    tokenAddress: '0xd4c435f5b09f855c3317c8524cb1f586e42795fa',
    tokenDecimals: 18,
    exchangeAddress: '0x21b8a991a203a440c83450564fdefa3db10a5004'
  },
  {
    symbol: 'REN',
    name: 'Republic Token',
    tokenAddress: '0x408e41876cccdc0f92210600ef50372656052a38',
    tokenDecimals: 18,
    exchangeAddress: '0x43892992b0b102459e895b88601bb2c76736942c'
  },
  {
    symbol: 'GRID',
    name: 'GRID Token',
    tokenAddress: '0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd',
    tokenDecimals: 12,
    exchangeAddress: '0x4b17685b330307c751b47f33890c8398df4fe407'
  },
  {
    symbol: 'BNB',
    name: 'BNB',
    tokenAddress: '0xb8c77482e45f1f44de1745f52c74426c631bdd52',
    tokenDecimals: 18,
    exchangeAddress: '0x255e60c9d597dcaa66006a904ed36424f7b26286'
  },
  {
    symbol: 'LAToken',
    name: 'LAToken',
    tokenAddress: '0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf',
    tokenDecimals: 18,
    exchangeAddress: '0x28991ac221054bee3a38ae9ad0fb3d0c3e45d0cf'
  },
  {
    symbol: 'MLN',
    name: 'Melon Token',
    tokenAddress: '0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1',
    tokenDecimals: 18,
    exchangeAddress: '0xaec97872d14ac79e95fff18c169bfd183efc6962'
  },
  {
    symbol: 'e11',
    name: 'Experimental Token',
    tokenAddress: '0x4805f9568bca23bef099c2a317346b42146384a1',
    tokenDecimals: 18,
    exchangeAddress: '0x4785cedbd89c818d60988dc5979b029f3900b54b'
  },
  {
    symbol: '0xBTC',
    name: '0xBitcoin Token',
    tokenAddress: '0xb6ed7644c69416d67b522e20bc294a9a9b405b31',
    tokenDecimals: 8,
    exchangeAddress: '0x701564aa6e26816147d4fa211a0779f1b774bb9b'
  },
  {
    symbol: 'SALT',
    name: 'Salt',
    tokenAddress: '0x4156d3342d5c385a87d264f90653733592000581',
    tokenDecimals: 8,
    exchangeAddress: '0xc0c59cde851bfcbdddd3377ec10ea54a18efb937'
  },
  {
    symbol: 'KIWI',
    name: 'KIWI Token',
    tokenAddress: '0x2bf91c18cd4ae9c2f2858ef9fe518180f7b5096d',
    tokenDecimals: 8,
    exchangeAddress: '0x380fdc8bb8722915076a09479d1bbc75e69c8be0'
  },
  {
    symbol: 'BPT',
    name: 'Blockport Token',
    tokenAddress: '0x327682779bab2bf4d1337e8974ab9de8275a7ca8',
    tokenDecimals: 18,
    exchangeAddress: '0xb2744df7bfbb4802f44fd1b1fd9012502d4af704'
  },
  {
    symbol: 'LPT',
    name: 'Livepeer Token',
    tokenAddress: '0x58b6a8a3302369daec383334672404ee733ab239',
    tokenDecimals: 18,
    exchangeAddress: '0xc4a1c45d5546029fd57128483ae65b56124bfa6a'
  },
  {
    symbol: 'BNTY',
    name: 'Bounty0x Token',
    tokenAddress: '0xd2d6158683aee4cc838067727209a0aaf4359de3',
    tokenDecimals: 18,
    exchangeAddress: '0xd1f3e9b413f5c9fd56f044699c64ff710e7e5a9a'
  },
  {
    symbol: 'WETH',
    name: 'Wrapped Ether',
    tokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    tokenDecimals: 18,
    exchangeAddress: '0xa2881a90bf33f03e7a3f803765cd2ed5c8928dfb'
  },
  {
    symbol: 'ASTRO',
    name: 'AstroTokens',
    tokenAddress: '0x7b22938ca841aa392c93dbb7f4c42178e3d65e88',
    tokenDecimals: 4,
    exchangeAddress: '0xbd4479c98dc21563ba822c3c206d8339698e2dd4'
  },
  {
    symbol: 'HBZ',
    name: 'Helbiz Token',
    tokenAddress: '0xe34e1944e776f39b9252790a0527ebda647ae668',
    tokenDecimals: 18,
    exchangeAddress: '0xd1a8c5ba35752e4b62c71c795a3f6481faa4d36e'
  },
  {
    symbol: 'HUM',
    name: 'Humanity',
    tokenAddress: '0xecf3958d0f82291ca1ff6c9bda8eb3c50ee41ce3',
    tokenDecimals: 18,
    exchangeAddress: '0x7d31fc38ddd7d6907f820f4268f1d8d5d5797826'
  },
  {
    symbol: 'ZIL',
    name: 'Zilliqa',
    tokenAddress: '0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27',
    tokenDecimals: 12,
    exchangeAddress: '0x7dc095a5cf7d6208cc680fa9866f80a53911041a'
  },
  {
    symbol: 'USDC',
    name: 'USD//C',
    tokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    tokenDecimals: 6,
    exchangeAddress: '0x97dec872013f6b5fb443861090ad931542878126'
  },
  {
    symbol: 'ENG',
    name: 'Enigma',
    tokenAddress: '0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4',
    tokenDecimals: 8,
    exchangeAddress: '0x884715e2dce8757c9ee19739c366b2c7c65f05b1'
  },
  {
    symbol: 'PITCH',
    name: 'PITCH',
    tokenAddress: '0x87f56ee356b434187105b40f96b230f5283c0ab4',
    tokenDecimals: 9,
    exchangeAddress: '0x329c9642efe33a62161dda6b4eb3821965191441'
  },
  {
    symbol: 'CNUS',
    name: 'CoinUs',
    tokenAddress: '0x722f2f3eac7e9597c73a593f7cf3de33fbfc3308',
    tokenDecimals: 18,
    exchangeAddress: '0x30b16fc2b530dbf991e1b15ed953cc4585f0b27c'
  },
  {
    symbol: 'MOR',
    name: 'MoriaToken',
    tokenAddress: '0xa6a7fce4affe059548fc39ebbc74555952a6fb0d',
    tokenDecimals: 18,
    exchangeAddress: '0xbe478403ac906d329fa8ebef1d3f9e0a48067d57'
  },
  {
    symbol: 'REQ',
    name: 'Request Token',
    tokenAddress: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
    tokenDecimals: 18,
    exchangeAddress: '0xbcdf538581f7167ec8228ec2c9b1cfc2f74788c7'
  },
  {
    symbol: 'DGD',
    name: 'DigixDAO',
    tokenAddress: '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a',
    tokenDecimals: 9,
    exchangeAddress: '0xd55c1ca9f5992a2e5e379dce49abf24294abe055'
  },
  {
    symbol: 'TKN',
    name: 'Monolith TKN',
    tokenAddress: '0xaaaf91d9b90df800df4f55c205fd6989c977e73a',
    tokenDecimals: 8,
    exchangeAddress: '0xb6cfbf322db47d39331e306005dc7e5e6549942b'
  },
  {
    symbol: 'DGX',
    name: 'Digix Gold Token',
    tokenAddress: '0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf',
    tokenDecimals: 9,
    exchangeAddress: '0xb92de8b30584392af27726d5ce04ef3c4e5c9924'
  },
  {
    symbol: 'TRST',
    name: 'Trustcoin',
    tokenAddress: '0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b',
    tokenDecimals: 6,
    exchangeAddress: '0x95e4649f5209dd292caf1f087b8f1db3be24927f'
  },
  {
    symbol: 'STX',
    name: 'Stox',
    tokenAddress: '0x006bea43baa3f7a6f765f14f10a1a1b08334ef45',
    tokenDecimals: 18,
    exchangeAddress: '0x2afc64cd5e64a32a363ea84b8cad1ce5239a1a3d'
  },
  {
    symbol: 'SWM',
    name: 'Swarm Fund Token',
    tokenAddress: '0x9e88613418cf03dca54d6a2cf6ad934a78c7a17a',
    tokenDecimals: 18,
    exchangeAddress: '0xc3c028721f854bc75967cbe432fb0e221908baa1'
  },
  {
    symbol: 'GNT',
    name: 'Golem Network Token',
    tokenAddress: '0xa74476443119a942de498590fe1f2454d7d4ac0d',
    tokenDecimals: 18,
    exchangeAddress: '0x7d839eb463b121790c99e0f017c21f0189dcc167'
  },
  {
    symbol: 'MYU',
    name: 'MYUBI Token',
    tokenAddress: '0xf3be20da25b31bd6ee4ce4496985b2064304c125',
    tokenDecimals: 18,
    exchangeAddress: '0xb684f9b231accdef385f06038395e27a4e3aa86b'
  },
  {
    symbol: 'LQD',
    name: 'Liquidity.Network Token',
    tokenAddress: '0xd29f0b5b3f50b07fe9a9511f7d86f4f4bac3f8c4',
    tokenDecimals: 18,
    exchangeAddress: '0xe3406e7d0155e0a83236ec25d34cd3d903036669'
  },
  {
    symbol: 'ULT',
    name: 'Unblocked Ledger Token',
    tokenAddress: '0x09617f6fd6cf8a71278ec86e23bbab29c04353a7',
    tokenDecimals: 18,
    exchangeAddress: '0x28d9353611c5a0d5a026a648c05e5d6523e41cbf'
  },
  {
    symbol: 'LIRA',
    name: 'Lira Cash',
    tokenAddress: '0x49aaa160506f7e07e6c3f6cd6316b6866025cdcb',
    tokenDecimals: 8,
    exchangeAddress: '0xb580a2b495917b8577d9a612be068f591e8c20f9'
  },
  {
    symbol: 'FOAM',
    name: 'FOAM Token',
    tokenAddress: '0x4946fcea7c692606e8908002e55a582af44ac121',
    tokenDecimals: 18,
    exchangeAddress: '0xf79cb3bea83bd502737586a6e8b133c378fd1ff2'
  },
  {
    symbol: 'XCHF',
    name: 'CryptoFranc',
    tokenAddress: '0xb4272071ecadd69d933adcd19ca99fe80664fc08',
    tokenDecimals: 18,
    exchangeAddress: '0x8de0d002dc83478f479dc31f76cb0a8aa7ccea17'
  },
  {
    symbol: 'BLUE',
    name: 'Ethereum Blue',
    tokenAddress: '0x539efe69bcdd21a83efd9122571a64cc25e0282b',
    tokenDecimals: 8,
    exchangeAddress: '0x7eb81c7a0b322d31c11064105e14dce6e852e8c1'
  },
  {
    symbol: 'SWT',
    name: 'Swarm City Token',
    tokenAddress: '0xb9e7f8568e08d5659f5d29c4997173d84cdf2607',
    tokenDecimals: 18,
    exchangeAddress: '0x755160062e3e09d34af0a00ff8cab8500e81e0d7'
  },
  {
    symbol: 'RCN',
    name: 'Ripio Credit Network Token',
    tokenAddress: '0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6',
    tokenDecimals: 18,
    exchangeAddress: '0xd91ff16ef92568fc27f466c3c5613e43313ab1dc'
  },
  {
    symbol: 'POA20',
    name: 'POA ERC20 on Foundation',
    tokenAddress: '0x6758b7d441a9739b98552b373703d8d3d14f9e62',
    tokenDecimals: 18,
    exchangeAddress: '0xa2e6b3ef205feaee475937c4883b24e6eb717eef'
  },
  {
    symbol: 'QCH',
    name: 'QChi',
    tokenAddress: '0x687bfc3e73f6af55f0ccca8450114d107e781a0e',
    tokenDecimals: 18,
    exchangeAddress: '0x755899f0540c3548b99e68c59adb0f15d2695188'
  },
  {
    symbol: 'SCHAP',
    name: 'AshleighCoin',
    tokenAddress: '0xe503a034a8c288dfa9583c43691a7b8233e27013',
    tokenDecimals: 18,
    exchangeAddress: '0xd202ee9690e3240aff1631d98c99717a2265fa64'
  },
  {
    symbol: 'FAC',
    name: 'Financial Aid Coin',
    tokenAddress: '0x4b4a70cae3f7c84e36ce9aa19abc98f85db7f058',
    tokenDecimals: 7,
    exchangeAddress: '0x32a29c4269dee1a9e87eb75d66da71591a7aee96'
  },
  {
    symbol: 'SCHAP',
    name: 'AshleighCoin',
    tokenAddress: '0x3638c9e50437f00ae53a649697f288ba68888cc1',
    tokenDecimals: 18,
    exchangeAddress: '0xa0513d82f17c491dc6ab34efd89dc372bb180378'
  },
  {
    symbol: 'C20',
    name: 'Crypto20',
    tokenAddress: '0x26e75307fc0c021472feb8f727839531f112f317',
    tokenDecimals: 18,
    exchangeAddress: '0xf7b5a4b934658025390ff69db302bc7f2ac4a542'
  },
  {
    symbol: 'POW',
    name: 'Proof of work',
    tokenAddress: '0x9709907cb2cf9e16df841f7b145b78c230d8205e',
    tokenDecimals: 18,
    exchangeAddress: '0x6fca96a679490ed8a80c7344799f1b090fd4c94d'
  },
  {
    symbol: 'AMIS',
    name: 'AMIS',
    tokenAddress: '0x949bed886c739f1a3273629b3320db0c5024c719',
    tokenDecimals: 9,
    exchangeAddress: '0x164c93580839f40609ce0250dd4c98a25da175de'
  },
  {
    symbol: 'TheDAO',
    name: 'TheDAO',
    tokenAddress: '0xbb9bc244d798123fde783fcc1c72d3bb8c189413',
    tokenDecimals: 16,
    exchangeAddress: '0xc7c60e9419466939e968db2a88fe64ec41908bb4'
  },
  {
    symbol: 'KIN',
    name: 'Kin',
    tokenAddress: '0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5',
    tokenDecimals: 18,
    exchangeAddress: '0xb7520a5f8c832c573d6bd0df955fc5c9b72400f7'
  },
  {
    symbol: 'TUSD',
    name: 'TrueUSD',
    tokenAddress: '0x8dd5fbce2f6a956c3022ba3663759011dd51e73e',
    tokenDecimals: 18,
    exchangeAddress: '0x4f30e682d0541eac91748bd38a648d759261b8f3'
  },
  {
    symbol: 'ZCN',
    name: '0chain',
    tokenAddress: '0xb9ef770b6a5e12e45983c5d80545258aa38f3b78',
    tokenDecimals: 10,
    exchangeAddress: '0x1c116d67e0bf0cf5cb0ad5a74a041d26e89271e7'
  },
  {
    symbol: 'MCO',
    name: 'Monaco',
    tokenAddress: '0xb63b606ac810a52cca15e44bb630fd42d8d1d83d',
    tokenDecimals: 8,
    exchangeAddress: '0xedc485266aa0ebe9ccbfc1f255bb5ffea1f9e3cc'
  },
  {
    symbol: 'CRO',
    name: 'CRO',
    tokenAddress: '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b',
    tokenDecimals: 8,
    exchangeAddress: '0x2135d193bf81abbead93906166f2be32b2492c04'
  },
  {
    symbol: 'GCB',
    name: 'GuangChangBi',
    tokenAddress: '0x74436ae1db59c62bbb3de88d268f7e058dce6d50',
    tokenDecimals: 18,
    exchangeAddress: '0x62ccb0577aa63b8d72449b9fd13b3cdbcf3787d6'
  },
  {
    symbol: 'CMCT',
    name: 'Crowd Machine Compute Token',
    tokenAddress: '0x47bc01597798dcd7506dcca36ac4302fc93a8cfb',
    tokenDecimals: 8,
    exchangeAddress: '0x53e31a941b76ef1b486e86aa39bcd5ae56829870'
  },
  {
    symbol: 'CNN',
    name: 'CNN Token',
    tokenAddress: '0x8713d26637cf49e1b6b4a7ce57106aabc9325343',
    tokenDecimals: 18,
    exchangeAddress: '0xe31a245102fc1ae72f80c6969f6475e85c897bbe'
  },
  {
    symbol: 'ANT',
    name: 'Aragon Network Token',
    tokenAddress: '0x960b236a07cf122663c4303350609a66a7b288c0',
    tokenDecimals: 18,
    exchangeAddress: '0x077d52b047735976dfda76fef74d4d988ac25196'
  },
  {
    symbol: 'ITT',
    name: 'Intelligent Trading Technologies',
    tokenAddress: '0x0aef06dcccc531e581f0440059e6ffcc206039ee',
    tokenDecimals: 8,
    exchangeAddress: '0x20149f1672175c7118bdbf966bfb6a02bf733810'
  },
  {
    symbol: 'DENT',
    name: 'DENT',
    tokenAddress: '0x3597bfd533a99c9aa083587b074434e61eb0a258',
    tokenDecimals: 8,
    exchangeAddress: '0x9709ef0958b831865a97682d9ec08f897fe3b56f'
  },
  {
    symbol: 'MEDIBIT',
    name: 'MEDIBIT',
    tokenAddress: '0x737fa0372c8d001904ae6acaf0552d4015f9c947',
    tokenDecimals: 18,
    exchangeAddress: '0x68326300df49ec6387e75690857424c2ae111750'
  },
  {
    symbol: 'AWC',
    name: 'Atomic Wallet Token',
    tokenAddress: '0xad22f63404f7305e4713ccbd4f296f34770513f4',
    tokenDecimals: 8,
    exchangeAddress: '0x8aa3cc2bf30cb47f290fd4e9b660bc3a685b9b3e'
  },
  {
    symbol: 'IDT',
    name: 'InvestDigital Token',
    tokenAddress: '0x02c4c78c462e32cca4a90bc499bf411fb7bc6afb',
    tokenDecimals: 18,
    exchangeAddress: '0x3fbc2275de71427aaebbe0e5e6bc13fe8f27fa9e'
  },
  {
    symbol: 'HPT',
    name: 'HuobiPoolToken',
    tokenAddress: '0xa66daa57432024023db65477ba87d4e7f5f95213',
    tokenDecimals: 18,
    exchangeAddress: '0xfe3f05c7da9fe53591fab3f920798a67a95747ed'
  },
  {
    symbol: 'ERC20',
    name: 'ERC20',
    tokenAddress: '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
    tokenDecimals: 18,
    exchangeAddress: '0xf50bac10faf905e95ffdc9f35b75ee67117dad2a'
  },
  {
    symbol: 'EDU',
    name: 'EduCoinToken',
    tokenAddress: '0xa0872ee815b8dd0f6937386fd77134720d953581',
    tokenDecimals: 18,
    exchangeAddress: '0x0045d5d2cac7688f7fc36313e69fb5350958936c'
  },
  {
    symbol: 'CRPHT',
    name: 'Crypthealth',
    tokenAddress: '0xcd7d0042fdb92f3dde312aa61af084953aa914ee',
    tokenDecimals: 18,
    exchangeAddress: '0xe1e005d82922303ca9fb5cb6426c2eb07f8e5c84'
  },
  {
    symbol: 'ROL',
    name: 'DICE',
    tokenAddress: '0x2e071d2966aa7d8decb1005885ba1977d6038a65',
    tokenDecimals: 16,
    exchangeAddress: '0xb7836492f5850d9b61d6b71c73697c5b9676208d'
  },
  {
    symbol: 'PAY',
    name: 'TenX Pay Token',
    tokenAddress: '0xb97048628db6b661d4c2aa833e95dbe1a905b280',
    tokenDecimals: 18,
    exchangeAddress: '0x6f1c46e91ce29d430e31205ead148b0bee46b9fc'
  },
  {
    symbol: 'PAI',
    name: 'PCHAIN',
    tokenAddress: '0xb9bb08ab7e9fa0a1356bd4a39ec0ca267e03b0b3',
    tokenDecimals: 18,
    exchangeAddress: '0x7174ef6b9cb528e954508264a9912da905977422'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0xc011a72400e58ecd99ee497cf89e3775d4bd732f',
    tokenDecimals: 18,
    exchangeAddress: '0x23228ec35e810569495bd0aa4d56e9fad759bb29'
  },
  {
    symbol: 'LOT',
    name: 'lothlor',
    tokenAddress: '0xdcef0710b10ad66bc2194b412fb37c65d4d0a965',
    tokenDecimals: 18,
    exchangeAddress: '0xe69ea0f00b6d399a11030eb6d79e54c486c0e1d1'
  },
  {
    symbol: 'OMG',
    name: 'OMGToken',
    tokenAddress: '0xd26114cd6ee289accf82350c8d8487fedb8a0c07',
    tokenDecimals: 18,
    exchangeAddress: '0xddee242662323a3cff3f9aa139ffa496ac3c73b0'
  },
  {
    symbol: 'WBTC',
    name: 'Wrapped BTC',
    tokenAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    tokenDecimals: 8,
    exchangeAddress: '0x4d2f5cfba55ae412221182d8475bc85799a5644b'
  },
  {
    symbol: 'DKC',
    name: 'ICO GAZUA TOKEN',
    tokenAddress: '0xb5ce43922eb8e73bd2b1fcec33c2dba43cce7e4c',
    tokenDecimals: 18,
    exchangeAddress: '0x5634de511580536296c6ea2eb8ebec271ca76bc2'
  },
  {
    symbol: 'DKC',
    name: 'ICO GAZUA TOKEN',
    tokenAddress: '0x7365877678c744b435ed03b1cac12ab407cba13a',
    tokenDecimals: 18,
    exchangeAddress: '0xc3b03664126f2f192ec658e1c62798c9ebd0ff08'
  },
  {
    symbol: 'PMA',
    name: 'PumaPay',
    tokenAddress: '0x846c66cf71c43f80403b51fe3906b3599d63336f',
    tokenDecimals: 18,
    exchangeAddress: '0xcc36e05eeffac3eb61b696d0bb328f2b08389fb5'
  },
  {
    symbol: 'EDU',
    name: 'EduCoin',
    tokenAddress: '0xf263292e14d9d8ecd55b58dad1f1df825a874b7c',
    tokenDecimals: 18,
    exchangeAddress: '0xab2da28aa5803c8da0f6603e91e16dab3ba542d2'
  },
  {
    symbol: 'HERC',
    name: 'Hercules',
    tokenAddress: '0x6251583e7d997df3604bc73b9779196e94a090ce',
    tokenDecimals: 18,
    exchangeAddress: '0x059ad96e38f027ccd127567dc09b164762bcd695'
  },
  {
    symbol: 'PATH',
    name: 'Path Network Token',
    tokenAddress: '0x7b94a1281db0335c9efd68aca5c98b494d775c70',
    tokenDecimals: 18,
    exchangeAddress: '0x95efaafe52e89992bfd4f33c96ad971fccdc31f6'
  },
  {
    symbol: 'DATA',
    name: 'Streamr DATAcoin',
    tokenAddress: '0x0cf0ee63788a0849fe5297f3407f701e122cc023',
    tokenDecimals: 18,
    exchangeAddress: '0x4f0d6e2179938828cff93da40a8ba1df7519ca8c'
  },
  {
    symbol: 'RPL',
    name: 'Rocket Pool',
    tokenAddress: '0xb4efd85c19999d84251304bda99e90b92300bd93',
    tokenDecimals: 18,
    exchangeAddress: '0x3fb2f18065926ddb33e7571475c509541d15da0e'
  },
  {
    symbol: 'UFR',
    name: 'Upfiring',
    tokenAddress: '0xea097a2b1db00627b2fa17460ad260c016016977',
    tokenDecimals: 18,
    exchangeAddress: '0x2263fd7c62914ab8ec2b5e7b00bc8371a6c0d221'
  },
  {
    symbol: 'RLC',
    name: 'iEx.ec Network Token',
    tokenAddress: '0x607f4c5bb672230e8672085532f7e901544a7375',
    tokenDecimals: 9,
    exchangeAddress: '0xa825cae02b310e9901b4776806ce25db520c8642'
  },
  {
    symbol: 'PAX',
    name: 'PAX',
    tokenAddress: '0x8e870d67f660d95d5be530380d0ec0bd388289e1',
    tokenDecimals: 18,
    exchangeAddress: '0xc040d51b07aea5d94a89bc21e8078b77366fc6c7'
  },
  {
    symbol: 'CNX',
    name: 'Cryptonex (CNX) - Global Blockchain Acquiring',
    tokenAddress: '0x94d6b4fb35fb08cb34aa716ab40049ec88002079',
    tokenDecimals: 8,
    exchangeAddress: '0xbb7cf8a9d6b2aa7d98fb0bf3548a589a68ddb774'
  },
  {
    symbol: 'CAN',
    name: 'CanYaCoin',
    tokenAddress: '0x1d462414fe14cf489c7a21cac78509f4bf8cd7c0',
    tokenDecimals: 6,
    exchangeAddress: '0x066198694b1db74d67007d19a7c4f2fc3a061075'
  },
  {
    symbol: 'MAS',
    name: 'MidasProtocol',
    tokenAddress: '0x23ccc43365d9dd3882eab88f43d515208f832430',
    tokenDecimals: 18,
    exchangeAddress: '0xe2f548a3b898eca923bd61919f2635b071a7f95e'
  },
  {
    symbol: 'DONUT',
    name: 'Donut',
    tokenAddress: '0x23d80c4ee8fb55d4183dd9329296e176dc7464e1',
    tokenDecimals: 18,
    exchangeAddress: '0xed9d5aa6124a3310b80a2468c67763627653887d'
  },
  {
    symbol: 'KRH',
    name: 'KryptoHub',
    tokenAddress: '0x4dadf81edf74e9b1a9ad1f364d51a176be48f0ac',
    tokenDecimals: 18,
    exchangeAddress: '0x08850bd3ce3a8f6b64d724c3dabdbf6f4f8561fc'
  },
  {
    symbol: 'BEE',
    name: 'Bee Token',
    tokenAddress: '0x42237af8b1b3b2063d8377c5de8a4549e7b09ac5',
    tokenDecimals: 18,
    exchangeAddress: '0x356435d47e8f36d5102719704747afb9ddd36747'
  },
  {
    symbol: 'BEE',
    name: 'Bee Token',
    tokenAddress: '0x4d8fc1453a0f359e99c9675954e656d80d996fbf',
    tokenDecimals: 18,
    exchangeAddress: '0xe9078a97eef2bb502a9f792169f9c03626649248'
  },
  {
    symbol: 'ZCI',
    name: '0xchan ICO',
    tokenAddress: '0x236149288602c07b84387d0d75784d73f133142b',
    tokenDecimals: 18,
    exchangeAddress: '0xcfcc608f03c0cee86589e11224f24779212f0fe5'
  },
  {
    symbol: 'BOOTY',
    name: 'BOOTY',
    tokenAddress: '0x824c0659f6940604506aa8fa829d13fde17fb900',
    tokenDecimals: 18,
    exchangeAddress: '0x5a67d8ea5c9bf381fe0da2862cec1ec90a5ca329'
  },
  {
    symbol: 'WPR',
    name: 'WePower Token',
    tokenAddress: '0x4cf488387f035ff08c371515562cba712f9015d4',
    tokenDecimals: 18,
    exchangeAddress: '0x72208a7d8c11cb28c8e6d32e1a070015786c0823'
  },
  {
    symbol: 'EMONT',
    name: 'EtheremonToken',
    tokenAddress: '0x95daaab98046846bf4b2853e23cba236fa394a31',
    tokenDecimals: 8,
    exchangeAddress: '0x2995b7f65cbc1b0ae8095eae314246508c49182a'
  },
  {
    symbol: 'PLAY',
    name: 'Herocoin',
    tokenAddress: '0xe477292f1b3268687a29376116b0ed27a9c76170',
    tokenDecimals: 18,
    exchangeAddress: '0xf43b2329130cfd87b322e49b96681e09f1ef172f'
  },
  {
    symbol: 'BOI',
    name: 'BOI Token',
    tokenAddress: '0x439ce375e3ee4dc203d71958beca3c0f417d65cb',
    tokenDecimals: 18,
    exchangeAddress: '0x262275a4989c96cc6ecde77eb2dda6e13d508c4e'
  },
  {
    symbol: 'HOT',
    name: 'HoloToken',
    tokenAddress: '0x6c6ee5e31d828de241282b9606c8e98ea48526e2',
    tokenDecimals: 18,
    exchangeAddress: '0xd4777e164c6c683e10593e08760b803d58529a8e'
  },
  {
    symbol: 'FT',
    name: 'Fabric Token',
    tokenAddress: '0x78a73b6cbc5d183ce56e786f6e905cadec63547b',
    tokenDecimals: 18,
    exchangeAddress: '0xf5bb20e73c59e0f643ae4bcd89d761ebdec83b73'
  },
  {
    symbol: 'MGN',
    name: 'Magnolia Token',
    tokenAddress: '0xb9625381f086e7b8512e4825f6af1117e9c84d43',
    tokenDecimals: 18,
    exchangeAddress: '0x8809c63af18ec760547426a5c3e122e0a3efbf27'
  },
  {
    symbol: 'AERGO',
    name: 'Aergo',
    tokenAddress: '0xae31b85bfe62747d0836b82608b4830361a3d37a',
    tokenDecimals: 18,
    exchangeAddress: '0x27f99de8a71f09e9e567050192ce3005f0dcd0b3'
  },
  {
    symbol: 'SENT',
    name: 'SENTinel',
    tokenAddress: '0xa44e5137293e855b1b7bc7e2c6f8cd796ffcb037',
    tokenDecimals: 8,
    exchangeAddress: '0x0b5ce6f7cbe0627aa8ad2e7e69ed554c0fe79162'
  },
  {
    symbol: 'RDN',
    name: 'Raiden Token',
    tokenAddress: '0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6',
    tokenDecimals: 18,
    exchangeAddress: '0x7d03cecb36820b4666f45e1b4ca2538724db271c'
  },
  {
    symbol: 'NMR',
    name: 'Numeraire',
    tokenAddress: '0x1776e1f26f98b1a5df9cd347953a26dd3cb46671',
    tokenDecimals: 18,
    exchangeAddress: '0x2bf5a5ba29e60682fc56b2fcf9ce07bef4f6196f'
  },
  {
    symbol: 'GBPP',
    name: 'GBPP',
    tokenAddress: '0xeac034b66aa7538a551a5fcec85e37592233c109',
    tokenDecimals: 16,
    exchangeAddress: '0xf6a0e98be0153e64b34693ba62c10009c697c95a'
  },
  {
    symbol: 'FTM',
    name: 'Fantom Token',
    tokenAddress: '0x4e15361fd6b4bb609fa63c81a2be19d873717870',
    tokenDecimals: 18,
    exchangeAddress: '0x060a0d4539623b6aa28d9fc39b9d6622ad495f41'
  },
  {
    symbol: 'QNT',
    name: 'Quant',
    tokenAddress: '0x4a220e6096b25eadb88358cb44068a3248254675',
    tokenDecimals: 18,
    exchangeAddress: '0xc7eb739e2651484daa1717433de1736a6529cfcc'
  },
  {
    symbol: 'BBO',
    name: 'Bigbom',
    tokenAddress: '0x84f7c44b6fed1080f647e354d552595be2cc602f',
    tokenDecimals: 18,
    exchangeAddress: '0x3c3351e44d32b36bf2af97de6f40b548b00cf654'
  },
  {
    symbol: 'IND',
    name: 'Indorse Token',
    tokenAddress: '0xf8e386eda857484f5a12e4b5daa9984e06e73705',
    tokenDecimals: 18,
    exchangeAddress: '0x57c6e18ee62fc660575db273ffaab02436aad222'
  },
  {
    symbol: 'THETA',
    name: 'Theta Token',
    tokenAddress: '0x3883f5e181fccaf8410fa61e12b59bad963fb645',
    tokenDecimals: 18,
    exchangeAddress: '0x6b4540f5ee32ddd5616c792f713435e6ee4f24ab'
  },
  {
    symbol: 'ST',
    name: 'Simple Token',
    tokenAddress: '0x2c4e8f2d746113d0696ce89b35f0d8bf88e0aeca',
    tokenDecimals: 18,
    exchangeAddress: '0x700520b1e2ccc5bf5fa89a5f7b8fd9beba3f04b0'
  },
  {
    symbol: 'ELEC',
    name: 'ElectrifyAsia',
    tokenAddress: '0xd49ff13661451313ca1553fd6954bd1d9b6e02b9',
    tokenDecimals: 18,
    exchangeAddress: '0x5d40522c20326f2ebcec2d371f250e352e3bed27'
  },
  {
    symbol: 'FGP',
    name: 'FingerPrint',
    tokenAddress: '0xd9a8cfe21c232d485065cb62a96866799d4645f7',
    tokenDecimals: 18,
    exchangeAddress: '0xccd5c9f160379510670f9acd73779dce7e6226b2'
  },
  {
    symbol: 'HOPS',
    name: 'LORDLESS HOPS',
    tokenAddress: '0x471daee6e481b2ab7d2f2f64b8f9b083daae29da',
    tokenDecimals: 18,
    exchangeAddress: '0xe0cce4518ea70d98231c47e5b977ba90cfcec615'
  },
  {
    symbol: 'MFT',
    name: 'Mainframe Token',
    tokenAddress: '0xdf2c7238198ad8b389666574f2d8bc411a4b7428',
    tokenDecimals: 18,
    exchangeAddress: '0x09f448c70c99124024cd9e8dcae6c2f51c0896db'
  },
  {
    symbol: 'GEN',
    name: 'DAOstack',
    tokenAddress: '0x543ff227f64aa17ea132bf9886cab5db55dcaddf',
    tokenDecimals: 18,
    exchangeAddress: '0x26cc0eab6cb650b0db4d0d0da8cb5bf69f4ad692'
  },
  {
    symbol: 'NAC',
    name: 'Nami ICO',
    tokenAddress: '0x8d80de8a78198396329dfa769ad54d24bf90e7aa',
    tokenDecimals: 18,
    exchangeAddress: '0xaa9c9308bb6ef318bab918d1e4aebf284b02b680'
  },
  {
    symbol: 'BEN',
    name: 'Token of Szczepan Bentyn',
    tokenAddress: '0x108c05cac356d93b351375434101cfd3e14f7e44',
    tokenDecimals: 4,
    exchangeAddress: '0x104f5ac4fdf92fd4668a08ac2e305b5bcf3de215'
  },
  {
    symbol: 'BNT',
    name: 'Bancor Network Token',
    tokenAddress: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',
    tokenDecimals: 18,
    exchangeAddress: '0x87d80dbd37e551f58680b4217b23af6a752da83f'
  },
  {
    symbol: 'OPEN',
    name: 'OPEN',
    tokenAddress: '0x69c4bb240cf05d51eeab6985bab35527d04a8c64',
    tokenDecimals: 8,
    exchangeAddress: '0x9801d0e88222e9204025117bada94728885d1a28'
  },
  {
    symbol: 'AEUR',
    name: 'Augmint Euro',
    tokenAddress: '0xc994a2deb02543db1f48688438b9903c4b305ce3',
    tokenDecimals: 2,
    exchangeAddress: '0xd4a6ea5eabfd4048640724f62713ffb1e6292271'
  },
  {
    symbol: 'MLN',
    name: 'Melon Token',
    tokenAddress: '0xec67005c4e498ec7f55e092bd1d35cbc47c91892',
    tokenDecimals: 18,
    exchangeAddress: '0xa931f4eb165ac307fd7431b5ec6eadde53e14b0c'
  },
  {
    symbol: 'EET',
    name: 'Easily Echangeable Token',
    tokenAddress: '0x7c0f856ddb93dfb957eac4513c6a5249c395cae5',
    tokenDecimals: 18,
    exchangeAddress: '0xe4f984870929bb4189ab43def9fc2f339244765e'
  },
  {
    symbol: 'sJPY',
    name: 'Synth sJPY',
    tokenAddress: '0xd9e5a009ec07de76616d7361ed713ef434d71325',
    tokenDecimals: 18,
    exchangeAddress: '0x39b0f27c771ad4236422af5ddc600711eefd93a3'
  },
  {
    symbol: 'ENJ',
    name: 'Enjin Coin',
    tokenAddress: '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c',
    tokenDecimals: 18,
    exchangeAddress: '0xb99a23b1a4585fc56d0ec3b76528c27cad427473'
  },
  {
    symbol: 'SAI',
    name: 'Sai',
    tokenAddress: '0xf5b403abd806eff15b339909943e2c22ecbac54c',
    tokenDecimals: 18,
    exchangeAddress: '0xa809ef80c0abf701bd1b3b15749aa0a4179ec034'
  },
  {
    symbol: 'sXAU',
    name: 'Synth sXAU',
    tokenAddress: '0xe05d803fa0c5832fa2262465290abb25d6c2bfa3',
    tokenDecimals: 18,
    exchangeAddress: '0xaf294be0577dc703bd7f5b96d34bc9cb110f1e2b'
  },
  {
    symbol: 'EUR',
    name: 'MoneyFold Euro',
    tokenAddress: '0x8e3aeb75392ca824d55479cae07f7f0b765743dd',
    tokenDecimals: 2,
    exchangeAddress: '0x526353fbb4a37eddcebf63f96796a078d908f568'
  },
  {
    symbol: 'JSE',
    name: 'JSE Token',
    tokenAddress: '0x2d184014b5658c453443aa87c8e9c4d57285620b',
    tokenDecimals: 18,
    exchangeAddress: '0xa248a46b97204b6f4d5b05ba824fbea46390d978'
  },
  {
    symbol: 'MTL',
    name: 'Metal',
    tokenAddress: '0xf433089366899d83a9f26a773d59ec7ecf30355e',
    tokenDecimals: 8,
    exchangeAddress: '0xc5d192f702cc7ce84355df9d41af14bde5024cc9'
  },
  {
    symbol: 'NOTES',
    name: 'NOTES',
    tokenAddress: '0x5e6364d4534f780ae053b93b45c8b8840e683eb7',
    tokenDecimals: 18,
    exchangeAddress: '0x9b7036f677a6e4832e9983efa0ce384130248398'
  },
  {
    symbol: 'WYV',
    name: 'Project Wyvern Token',
    tokenAddress: '0x056017c55ae7ae32d12aef7c679df83a85ca75ff',
    tokenDecimals: 18,
    exchangeAddress: '0x77e885fbc67b7c6ea2b889c96bbd78f9e647463b'
  },
  {
    symbol: 'LDT',
    name: 'Law Diamond Token',
    tokenAddress: '0x76a6baa20598b6d203d3eae6cc87e326bcb60e43',
    tokenDecimals: 18,
    exchangeAddress: '0xcbfda0aa2e471c02a39e6cec9b7f5cdfd91d83c6'
  },
  {
    symbol: 'BLT',
    name: 'Bloom Token',
    tokenAddress: '0x107c4504cd79c5d2696ea0030a8dd4e92601b82e',
    tokenDecimals: 18,
    exchangeAddress: '0x0e6a53b13688018a3df8c69f99afb19a3068d04f'
  },
  {
    symbol: 'sUSD',
    name: 'Synth sUSD',
    tokenAddress: '0x0cbe2df57ca9191b64a7af3baa3f946fa7df2f25',
    tokenDecimals: 18,
    exchangeAddress: '0xa1ecdcca26150cf69090280ee2ee32347c238c7b'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0x3772f9716cf6d7a09ede3587738aa2af5577483a',
    tokenDecimals: 18,
    exchangeAddress: '0x5d8888a212d033cff5f2e0ac24ad91a5495bad62'
  },
  {
    symbol: 'LALA',
    name: 'LALA',
    tokenAddress: '0xfd107b473ab90e8fbd89872144a3dc92c40fa8c9',
    tokenDecimals: 18,
    exchangeAddress: '0x6886f9dcbdad3cb8c6684f2fe78de5318c177068'
  },
  {
    symbol: 'DALC',
    name: 'DALECOIN',
    tokenAddress: '0x07d9e49ea402194bf48a8276dafb16e4ed633317',
    tokenDecimals: 8,
    exchangeAddress: '0x4591482d0c9d0af061a42009ff1b3cd070396f87'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x09cabec1ead1c0ba254b09efb3ee13841712be14',
    tokenDecimals: 18,
    exchangeAddress: '0x601c32e0580d3aef9437db52d09f5a5d7e60ec22'
  },
  {
    symbol: 'FND',
    name: 'FundRequest',
    tokenAddress: '0x4df47b4969b2911c966506e3592c41389493953b',
    tokenDecimals: 18,
    exchangeAddress: '0xe52d807ad934953315ccfe56f3b6425fcff04b2b'
  },
  {
    symbol: 'GBP',
    name: 'MoneyFold Pound Sterling',
    tokenAddress: '0xff4f56c14b8b59f7d766988a0e0c582e46b7f8ab',
    tokenDecimals: 2,
    exchangeAddress: '0x23c3041a18a528a57e26623259e5caa9fb160665'
  },
  {
    symbol: 'WOMG',
    name: 'Wrapped OMG',
    tokenAddress: '0x69657e421c993a65e31f571b4ce742fafb318bd4',
    tokenDecimals: 18,
    exchangeAddress: '0xd2bf46ac7cbf595879aaff5967a92ae7e999c308'
  },
  {
    symbol: 'SMX',
    name: 'SaldoMX',
    tokenAddress: '0x8a3cf860eca6d8e4579bfb052488e336e0fd9eae',
    tokenDecimals: 2,
    exchangeAddress: '0x52b9c94031dee81b2c36be736fa7f6b7ca7ad84e'
  },
  {
    symbol: 'EDR',
    name: 'Endor Protocol Token',
    tokenAddress: '0xc528c28fec0a90c083328bc45f587ee215760a0f',
    tokenDecimals: 18,
    exchangeAddress: '0x877104c369bb563f3a893fae861b4baf0cdd9d37'
  },
  {
    symbol: 'CVL',
    name: 'CVL',
    tokenAddress: '0x01fa555c97d7958fa6f771f3bbd5ccd508f81e22',
    tokenDecimals: 18,
    exchangeAddress: '0xd7d070728c947645af47f8cd0731a4100695a503'
  },
  {
    symbol: 'ICH',
    name: 'ICOStart Token',
    tokenAddress: '0x330839ef82d34801bd96e75a4ee778ac56fa1ed8',
    tokenDecimals: 18,
    exchangeAddress: '0xe749f1a9d5f9055f0b784b586818833b9679949c'
  },
  {
    symbol: 'USDT',
    name: 'Tether USD',
    tokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    tokenDecimals: 6,
    exchangeAddress: '0xc8313c965c47d1e0b5cdcd757b210356ad0e400c'
  },
  {
    symbol: 'STORJ',
    name: 'StorjToken',
    tokenAddress: '0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac',
    tokenDecimals: 8,
    exchangeAddress: '0xa7298541e52f96d42382ecbe4f242cbcbc534d02'
  },
  {
    symbol: 'SP',
    name: 'SunPower',
    tokenAddress: '0xd26b63194f70e0939393d23d3a5b1ed6bde5f835',
    tokenDecimals: 18,
    exchangeAddress: '0x5982aa08c4d3103a3534055b5fb2aac88d61675c'
  },
  {
    symbol: 'WOMG',
    name: 'Wrapped OMG',
    tokenAddress: '0xc46d19c06defe3adab78712bbbae08ffaaf1402d',
    tokenDecimals: 18,
    exchangeAddress: '0x03f7f874d7e1b131f8c66f1f64b15b645667687f'
  },
  {
    symbol: 'LTO',
    name: 'LTO Network Token',
    tokenAddress: '0x3db6ba6ab6f95efed1a6e794cad492faaabf294d',
    tokenDecimals: 8,
    exchangeAddress: '0x017d2735eb562d0ad9abc2a91801f4ca96f6bfa9'
  },
  {
    symbol: '18C',
    name: 'Block18',
    tokenAddress: '0xb3ce281f0dee8c6f7af19b9664109c4030bec3fa',
    tokenDecimals: 18,
    exchangeAddress: '0x9ad2f1272e775ebec936fef4cfa44bd5b1c7c3a6'
  },
  {
    symbol: 'ZJLT ',
    name: 'ZJLT  Distributed Factoring Network',
    tokenAddress: '0xb2af8d4d286e2087590f085ee7e8ccb05d3c7f29',
    tokenDecimals: 6,
    exchangeAddress: '0x7a05354b796958e439b1780204a89f81094ea4b9'
  },
  {
    symbol: 'ETHOS',
    name: 'Ethos',
    tokenAddress: '0x5af2be193a6abca9c8817001f45744777db30756',
    tokenDecimals: 8,
    exchangeAddress: '0xa55ba5d915a53e3c0514ff4e232eb50af12922ec'
  },
  {
    symbol: 'BIT',
    name: '比特链',
    tokenAddress: '0xf16843c8ab59ae17f9481ec756a1ded049192af4',
    tokenDecimals: 18,
    exchangeAddress: '0xbaf5a8bdf81cfe2d34c0ced89236fe473183f2e8'
  },
  {
    symbol: 'ART',
    name: 'Maecenas ART Token',
    tokenAddress: '0xfec0cf7fe078a500abf15f1284958f22049c2c7e',
    tokenDecimals: 18,
    exchangeAddress: '0x63a91a8b6f6289aa93f18539d245ec49c6169cd7'
  },
  {
    symbol: 'VIT',
    name: 'Vice',
    tokenAddress: '0x23b75bc7aaf28e2d6628c3f424b3882f8f072a3c',
    tokenDecimals: 18,
    exchangeAddress: '0x3981932f5e17540d863868c5d7c4e617e1334acd'
  },
  {
    symbol: 'RIYA',
    name: 'Etheriya',
    tokenAddress: '0x0b1724cc9fda0186911ef6a75949e9c0d3f0f2f3',
    tokenDecimals: 8,
    exchangeAddress: '0xd284aedc33522c85949576eca69414020d15ccb6'
  },
  {
    symbol: 'X8X',
    name: 'X8XToken',
    tokenAddress: '0x910dfc18d6ea3d6a7124a6f8b5458f281060fa4c',
    tokenDecimals: 18,
    exchangeAddress: '0x6dd1d97e5817ca376e653a1e7326e0563d13ceeb'
  },
  {
    symbol: 'CH-ZG1235d',
    name: 'CH123456789013',
    tokenAddress: '0xd2cc32cc34b0b975bf9b812061a1a040017972fc',
    tokenDecimals: 18,
    exchangeAddress: '0x80a393b2e1e4aa07862c24ad8ac14511c91bd562'
  },
  {
    symbol: 'LESS',
    name: 'LORDLESS TOKEN',
    tokenAddress: '0x7ca121b093e2fbd4bb9a894bd5ff487d16f1f83b',
    tokenDecimals: 18,
    exchangeAddress: '0x5386c0e6b417138f09236f86aca243e6f5b05dd3'
  },
  {
    symbol: 'SIT',
    name: 'SInitiatives',
    tokenAddress: '0xe5e7d48abbb999880ea0f6533068dfd3944f0e7e',
    tokenDecimals: 4,
    exchangeAddress: '0x85c1ef96960884f802789400160b21d9c7043520'
  },
  {
    symbol: 'DFS',
    name: 'Digital Fantasy Sports',
    tokenAddress: '0x45ed02e374aef2e4b34c04e86ad9d45891d10751',
    tokenDecimals: 18,
    exchangeAddress: '0x70a97ec45d87a37cec6103658527ffb3df7802c7'
  },
  {
    symbol: 'CELR',
    name: 'Celer Network',
    tokenAddress: '0xf56fdae611b734005d71c03b7b8c966e45d1d768',
    tokenDecimals: 18,
    exchangeAddress: '0xd62cc4154a8f865761c5b027ec33b4ab47cfa175'
  },
  {
    symbol: 'AUC',
    name: 'Auctus Token',
    tokenAddress: '0xc12d099be31567add4e4e4d0d45691c3f58f5663',
    tokenDecimals: 18,
    exchangeAddress: '0x37134075f5b5a0a94ac891c7b5ec5db5cfcf392c'
  },
  {
    symbol: 'MYST',
    name: 'Mysterium',
    tokenAddress: '0xa645264c5603e96c3b0b078cdab68733794b0a71',
    tokenDecimals: 8,
    exchangeAddress: '0x6380ab7c66df788e30c5762f5884b9129d178b80'
  },
  {
    symbol: 'TAAS',
    name: 'Token-as-a-Service',
    tokenAddress: '0xe7775a6e9bcf904eb39da2b68c5efb4f9360e08c',
    tokenDecimals: 6,
    exchangeAddress: '0x4da5c31ab38a496a2513843dab8721e9aeb876bf'
  },
  {
    symbol: 'SIN',
    name: 'Casino La Crosse',
    tokenAddress: '0xb448846ff602a6cb206ffafc45b93ad6fb7dd716',
    tokenDecimals: 4,
    exchangeAddress: '0xc491dfda6487480dd31b4d5e1bb77bcc9e2543c9'
  },
  {
    symbol: 'MET',
    name: 'Metronome',
    tokenAddress: '0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e',
    tokenDecimals: 18,
    exchangeAddress: '0x006b6e89ee1531cfe5b6d32da0d80cc30506a339'
  },
  {
    symbol: 'NOW',
    name: 'ChangeNOW',
    tokenAddress: '0xe9a95d175a5f4c9369f3b74222402eb1b837693b',
    tokenDecimals: 8,
    exchangeAddress: '0xbe33fdad6efd453594e8ece3c53fd0ae62b7cc74'
  },
  {
    symbol: 'SIN',
    name: 'CasinoLaCrosse',
    tokenAddress: '0x26a6f4a6867a71be998b80eaabf67ff87d1e59d6',
    tokenDecimals: 2,
    exchangeAddress: '0x17edf686c2449ae8dbb52ac3cef105ca50baee53'
  },
  {
    symbol: 'AVO',
    name: 'Avocado',
    tokenAddress: '0xfa6f7881e52fdf912c4a285d78a3141b089ce859',
    tokenDecimals: 18,
    exchangeAddress: '0xe94c4dc3a75fad623391a68b4fbdd4b3c9b3eeb4'
  },
  {
    symbol: 'XES',
    name: 'Proxeus',
    tokenAddress: '0xa017ac5fac5941f95010b12570b812c974469c2c',
    tokenDecimals: 18,
    exchangeAddress: '0x225026d626e45fa662e6a71f679eff0cac3054f1'
  },
  {
    symbol: 'MSP',
    name: 'Mothership Token',
    tokenAddress: '0x68aa3f232da9bdc2343465545794ef3eea5209bd',
    tokenDecimals: 18,
    exchangeAddress: '0x700e7869fa8ffd3117200e248979fef2b78f4a1c'
  },
  {
    symbol: 'KNS',
    name: 'Konsta token',
    tokenAddress: '0x64fab8aff039ed05259d1c2af729b70c8002c661',
    tokenDecimals: 18,
    exchangeAddress: '0x19cb61fe00ea29fc77d79eaeaebc94023bf7c67b'
  },
  {
    symbol: 'BDC',
    name: 'Belden Coin',
    tokenAddress: '0xac4df2d98f14495263b9dfbc47451c46d8ab0a30',
    tokenDecimals: 18,
    exchangeAddress: '0xaf8937f0595c06e1e0cca741a8aedec088aafde0'
  },
  {
    symbol: 'MST',
    name: 'My Super Token',
    tokenAddress: '0x35352a97214942f5c6054923b8dbd5e4ff0434df',
    tokenDecimals: 18,
    exchangeAddress: '0xca5ce4f07e8591b497eb2e22d2b0c19b69173e61'
  },
  {
    symbol: 'CCOIN',
    name: 'CREDITCOIN',
    tokenAddress: '0x5e51f6841d2f188c42c7c33a6a5e77fb05cfbabe',
    tokenDecimals: 2,
    exchangeAddress: '0xba2d17a783533f401d2b5efaac4a5675f46ee36d'
  },
  {
    symbol: 'IAM',
    name: 'iAM',
    tokenAddress: '0x6025fb154b7c30e13657d5304dafdb55b194e5dd',
    tokenDecimals: 18,
    exchangeAddress: '0x9c1a7862f08d19e86714750161f56e7c10a9503e'
  },
  {
    symbol: 'ESTATE',
    name: 'AgentMile Estate Tokens',
    tokenAddress: '0x6671c24dd5b8e4ced34033991418e4bc0cca05af',
    tokenDecimals: 8,
    exchangeAddress: '0x2a98460615481a456a1d763460167514dcd21f2c'
  },
  {
    symbol: 'HOUR',
    name: 'Democracy Earth',
    tokenAddress: '0x00319f722bd546182cb2c701ca254146d3f084fc',
    tokenDecimals: 18,
    exchangeAddress: '0xb7f7269098f36b034c4e2118a40c53482872b87a'
  },
  {
    symbol: 'WINGS',
    name: 'WINGS',
    tokenAddress: '0x667088b212ce3d06a1b553a7221e1fd19000d9af',
    tokenDecimals: 18,
    exchangeAddress: '0x70876eadea28ac268564ad3a8b7313790b471436'
  },
  {
    symbol: 'FIT',
    name: 'Fitness Chain',
    tokenAddress: '0xc98449ef8a017cfd29aed8b21b9b26492978a898',
    tokenDecimals: 18,
    exchangeAddress: '0x99b849a022d60be539d2a130b89ff0bbae097d83'
  },
  {
    symbol: 'ABX',
    name: 'ASOBI COIN',
    tokenAddress: '0x49ceb57714000f18f3749cf2d130e135f9c473a4',
    tokenDecimals: 18,
    exchangeAddress: '0xbe26014bbdbdd3d35f93c80591ffaf08513621ed'
  },
  {
    symbol: 'POWR',
    name: 'PowerLedger',
    tokenAddress: '0x595832f8fc6bf59c85c527fec3740a1b7a361269',
    tokenDecimals: 6,
    exchangeAddress: '0xabe1e210f2c97ae4bc7b17f8daa2e8db993337f5'
  },
  {
    symbol: 'SWADER',
    name: 'Bruno Skvorc Token',
    tokenAddress: '0x89f10cead72d1ebf3e08a9378932c6f4f5a4c476',
    tokenDecimals: 4,
    exchangeAddress: '0x32ff139e48c05d636307f61e476bb395bd319b05'
  },
  {
    symbol: 'AURA',
    name: 'Aurora DAO',
    tokenAddress: '0xcdcfc0f66c522fd086a1b725ea3c0eeb9f9e8814',
    tokenDecimals: 18,
    exchangeAddress: '0x8903842469f8790dad072b45bbce96cde9f3d7e6'
  },
  {
    symbol: 'DGTX',
    name: 'DigitexFutures',
    tokenAddress: '0x1c83501478f1320977047008496dacbd60bb15ef',
    tokenDecimals: 18,
    exchangeAddress: '0x24fbcbc276854bd14f0e6e02fb7b740baa52ca26'
  },
  {
    symbol: 'WIND',
    name: 'Oroshi',
    tokenAddress: '0xc9c0ff6344b4bfdee7ace21c4deddd6e43ecb454',
    tokenDecimals: 18,
    exchangeAddress: '0xe2833ad850513faa973747e4495db1d0b0e038a0'
  },
  {
    symbol: 'SML',
    name: '数码链',
    tokenAddress: '0x9138e38a0316e25459b376e987dd270b626709b8',
    tokenDecimals: 18,
    exchangeAddress: '0x041692af7f62906cee089b77fa0e59adb63f750c'
  },
  {
    symbol: 'LEND',
    name: 'EthLend Token',
    tokenAddress: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
    tokenDecimals: 18,
    exchangeAddress: '0xcaa7e4656f6a2b59f5f99c745f91ab26d1210dce'
  },
  {
    symbol: 'DRGN',
    name: 'Dragon',
    tokenAddress: '0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e',
    tokenDecimals: 18,
    exchangeAddress: '0x9881ad0c92d5a908d97df7f86626903ada1bfd29'
  },
  {
    symbol: 'JRT',
    name: 'Jarvis Reward Token',
    tokenAddress: '0xeef338c585ee3cf674f717937f12e6f52accf5e1',
    tokenDecimals: 18,
    exchangeAddress: '0xc932eded711ceb421078bab6b44b558656bd7864'
  },
  {
    symbol: 'OCEAN',
    name: 'The Ocean Token',
    tokenAddress: '0xf5ed2dc77f0d1ea7f106ecbd1850e406adc41b51',
    tokenDecimals: 18,
    exchangeAddress: '0x071002d8f0e5e210e510c68504e435c4a425df8b'
  },
  {
    symbol: 'LAVA',
    name: 'Lava',
    tokenAddress: '0xd89c37fd7c0fa3b107b7e4a8731dd3aaec488954',
    tokenDecimals: 8,
    exchangeAddress: '0x41e48af64f8ebf24194ce323b0760ee09bbb3ac4'
  },
  {
    symbol: 'CRKC',
    name: 'CREEKCOIN CRKC ERC20',
    tokenAddress: '0x2515905dd027cc38f139feda8e7e6945c7f9d07a',
    tokenDecimals: 18,
    exchangeAddress: '0xfaddccf91009c6383bc7b75c7f19a2c8be2f75ef'
  },
  {
    symbol: 'RLC',
    name: 'iEx.ec Network Token',
    tokenAddress: '0xf09209cc5eae846ee2cc4a493e7b962ca7bcfbbb',
    tokenDecimals: 9,
    exchangeAddress: '0x198da2b510e297605641f38b64e668675d778c6f'
  },
  {
    symbol: 'DOS',
    name: 'DOS Network Token',
    tokenAddress: '0x70861e862e1ac0c96f853c8231826e469ead37b1',
    tokenDecimals: 18,
    exchangeAddress: '0xb5e96c3ad1ccc79e7ab13433471baf785bb4977e'
  },
  {
    symbol: 'CEP',
    name: 'Cepheus',
    tokenAddress: '0x4cbdd06fcc050c7e0bd77478ed0fe4ea5eec651c',
    tokenDecimals: 18,
    exchangeAddress: '0xeb765bc156de3249b491d2db7aba3450fbcf9c5b'
  },
  {
    symbol: 'RCN',
    name: 'Readcoin',
    tokenAddress: '0x189c05c3c191015c694032e1b09c190d5db3fb50',
    tokenDecimals: 8,
    exchangeAddress: '0x112558c05b1e7f28daa98e48c8d7e0ced2f496c8'
  },
  {
    symbol: 'MITH',
    name: 'Mithril Token',
    tokenAddress: '0x3893b9422cd5d70a81edeffe3d5a1c6a978310bb',
    tokenDecimals: 18,
    exchangeAddress: '0x6469a4e75f37d9f8f4b1cee6bb3c1a1fe933e2a7'
  },
  {
    symbol: 'DPP',
    name: 'DA Power Play Token',
    tokenAddress: '0x01b3ec4aae1b8729529beb4965f27d008788b0eb',
    tokenDecimals: 18,
    exchangeAddress: '0x7ea7134ed6c41d9e35dae7e7e1ff0fcc406224ca'
  },
  {
    symbol: 'BAL',
    name: 'Balance token',
    tokenAddress: '0xe7049114562c759d5e9d1d25783773ccd61c0a65',
    tokenDecimals: 0,
    exchangeAddress: '0x2afbcc0bb7a78bd4d9a63c24c13042212b37f665'
  },
  {
    symbol: 'PRO',
    name: 'ProChain',
    tokenAddress: '0x8377ee6d3545bc6ff1425ee3015dc648b149c7b2',
    tokenDecimals: 2,
    exchangeAddress: '0x238ff2e978a7fbb59ee2636caad269a440cbd43f'
  },
  {
    symbol: 'DEV',
    name: 'Dev',
    tokenAddress: '0x98626e2c9231f03504273d55f397409defd4a093',
    tokenDecimals: 18,
    exchangeAddress: '0x48b109a5981573d03e5becec76aa805b7640cd58'
  },
  {
    symbol: 'CET',
    name: 'CoinEx Token',
    tokenAddress: '0x081f67afa0ccf8c7b17540767bbe95df2ba8d97f',
    tokenDecimals: 18,
    exchangeAddress: '0x28fe20afbf3450f13b803a639e19a8b0c005a5f3'
  },
  {
    symbol: 'DTOX',
    name: 'DeToxTheWorld',
    tokenAddress: '0x39550dc5919a990a5786fcdc1d5b7c392d362dde',
    tokenDecimals: 8,
    exchangeAddress: '0x7cdff5f7e1886767ae561ea0c2f926db3c25706d'
  },
  {
    symbol: 'ETHBO',
    name: 'EthBo',
    tokenAddress: '0xa120cb0530ea11451b002b7eafac91d8b5b8a499',
    tokenDecimals: 18,
    exchangeAddress: '0xa0834bad199282494763f36e93c4900cc950360e'
  },
  {
    symbol: 'MINDS',
    name: 'Minds',
    tokenAddress: '0xb26631c6dda06ad89b93c71400d25692de89c068',
    tokenDecimals: 18,
    exchangeAddress: '0x0ce13e66bef17801c9f19fb763be2dd2f391d7c2'
  },
  {
    symbol: 'TAU',
    name: 'Lamden Tau',
    tokenAddress: '0xc27a2f05fa577a83ba0fdb4c38443c0718356501',
    tokenDecimals: 18,
    exchangeAddress: '0x72fea1b0bf11c86e461c38d9f73e78dd21000d64'
  },
  {
    symbol: 'NTK',
    name: 'NeuroToken',
    tokenAddress: '0x69beab403438253f13b6e92db91f7fb849258263',
    tokenDecimals: 18,
    exchangeAddress: '0x46c106a6befddd066b202c9763ccc55c6f6c429b'
  },
  {
    symbol: 'USStocks',
    name: 'Major US stock market tracking index, redeemable for DAI at expiration on 15 May, 2019',
    tokenAddress: '0x36774fbca6b17325947cb208f77b4871ac7b6217',
    tokenDecimals: 18,
    exchangeAddress: '0xcdd6e09627d23368b770d9162807f181d061fb3e'
  },
  {
    symbol: 'GST2',
    name: 'Gastoken.io',
    tokenAddress: '0x0000000000b3f879cb30fe243b4dfee438691c04',
    tokenDecimals: 2,
    exchangeAddress: '0x929507cd3d90ab11ec4822e9eb5a48eb3a178f19'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x077d52b047735976dfda76fef74d4d988ac25196',
    tokenDecimals: 18,
    exchangeAddress: '0xb71d0e91b4b0edaea879d74d20632edafe46ef37'
  },
  {
    symbol: 'BITCAR',
    name: 'BitCar',
    tokenAddress: '0x08b4c866ae9d1be56a06e0c302054b4ffe067b43',
    tokenDecimals: 8,
    exchangeAddress: '0x480b971a86736448eb3ce00133008b348905ae5a'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x467fb51d54d7e51ee925f7f1a81ad5f2a0211169',
    tokenDecimals: 18,
    exchangeAddress: '0xc202026dbfaa80dbb62d90cc645877fad70fd19d'
  },
  {
    symbol: 'WAX',
    name: 'Wax Token',
    tokenAddress: '0x39bb259f66e1c59d5abef88375979b4d20d98022',
    tokenDecimals: 8,
    exchangeAddress: '0xb3d8e9b03a7c5a5f6bea1eadafa3c766316225d3'
  },
  {
    symbol: 'KCS',
    name: 'Kucoin Shares',
    tokenAddress: '0x039b5649a59967e3e936d7471f9c3700100ee1ab',
    tokenDecimals: 6,
    exchangeAddress: '0xc0e77cdd039a3f731ae0f5c6c9f4a91d4bc28880'
  },
  {
    symbol: 'FTX',
    name: 'FintruX Network',
    tokenAddress: '0xd559f20296ff4895da39b5bd9add54b442596a61',
    tokenDecimals: 18,
    exchangeAddress: '0x80f0f3e1482bab7fb6ed70185476f2fcdb596fa9'
  },
  {
    symbol: 'PKTF',
    name: 'Private Katinrun Foundation',
    tokenAddress: '0x7add89f3a7d2530d83b99593c67f56740ec11cc6',
    tokenDecimals: 18,
    exchangeAddress: '0x45ed432a5f3638100cfc7c213e88fc902ac74cd4'
  },
  {
    symbol: 'KKC',
    name: 'KOKOCoin',
    tokenAddress: '0x1fdde7525783c36153a8a6b618e2b5210a23ce37',
    tokenDecimals: 18,
    exchangeAddress: '0x5388857f3607962064d0505201f3faf2d20fa4b9'
  },
  {
    symbol: 'MRPH',
    name: 'Morpheus.Network',
    tokenAddress: '0x7b0c06043468469967dba22d1af33d77d44056c8',
    tokenDecimals: 4,
    exchangeAddress: '0x60298a63804d730bf0fbb79d4010193d5d9b8e5d'
  },
  {
    symbol: 'WETC',
    name: 'WETC',
    tokenAddress: '0x86aabcc646f290b9fc9bd05ce17c3858d1511da1',
    tokenDecimals: 18,
    exchangeAddress: '0x0729d4d5e1956fe977662c8e149adfba561f86e5'
  },
  {
    symbol: 'KTR',
    name: 'KRISTREEDERTOKEN',
    tokenAddress: '0x9a8c04e6166c553dc01dd8f36b78904833baeb57',
    tokenDecimals: 18,
    exchangeAddress: '0x269cac915ef69d9920a48fd2dc3df5dc5941a779'
  },
  {
    symbol: 'AST',
    name: 'AirSwap Token',
    tokenAddress: '0x27054b13b1b798b345b591a4d22e6562d47ea75a',
    tokenDecimals: 4,
    exchangeAddress: '0xc462a2fd31c83f6ee220400d1506d9e9f1f4bb01'
  },
  {
    symbol: 'VLD',
    name: 'VALID',
    tokenAddress: '0x922ac473a3cc241fd3a0049ed14536452d58d73c',
    tokenDecimals: 18,
    exchangeAddress: '0x83c50f91c7147d7de832d11b95404ba306b07a69'
  },
  {
    symbol: 'SOV',
    name: 'SoundMoneyCoin',
    tokenAddress: '0x010589b7c33034b802f7dba2c88cc9cec0f46673',
    tokenDecimals: 8,
    exchangeAddress: '0x6ac136ef1856ab1f8c030b72d3b7f96580a975a3'
  },
  {
    symbol: 'TTF',
    name: 'TIMETOFLYTOKEN',
    tokenAddress: '0x92dd20c7da4d004a1a6fc094dc7d0c7169899353',
    tokenDecimals: 18,
    exchangeAddress: '0x9e6d609ca47d524abe086c0862a3b31859fc44f8'
  },
  {
    symbol: 'DREAM',
    name: 'DreamTeam Token',
    tokenAddress: '0x82f4ded9cec9b5750fbff5c2185aee35afc16587',
    tokenDecimals: 6,
    exchangeAddress: '0xbd04c3749506ce30eed93c06f93f18223c3ff5aa'
  },
  {
    symbol: 'MANU',
    name: 'MANUCoin',
    tokenAddress: '0xf7fda1bf4bd0b2b0dea343d1e8e08d8b869d08ef',
    tokenDecimals: 9,
    exchangeAddress: '0x2fee056acc850b614c9161c5e1fd482a93aa896b'
  },
  {
    symbol: 'LIKE',
    name: 'LikeCoin',
    tokenAddress: '0x02f61fd266da6e8b102d4121f5ce7b992640cf98',
    tokenDecimals: 18,
    exchangeAddress: '0x40c2313279a97c9551ae3d06a274de8364d1f3e0'
  },
  {
    symbol: 'P3X',
    name: 'PoWH3D Extended',
    tokenAddress: '0x058a144951e062fc14f310057d2fd9ef0cf5095b',
    tokenDecimals: 18,
    exchangeAddress: '0x315945cd5c5b601643179d2803ab844e19a35fa8'
  },
  {
    symbol: 'IKC',
    name: 'www.internetkeys.net - Multiboard',
    tokenAddress: '0xd64794250393f825e57e0ffccd3c75cad4564be3',
    tokenDecimals: 8,
    exchangeAddress: '0x82df4774a61034381da474dc0b7319b44b520b8d'
  },
  {
    symbol: 'RUBI',
    name: 'Rubin',
    tokenAddress: '0xefde86ec7be1a27dc1ea2a027e5e7c997af5d066',
    tokenDecimals: 8,
    exchangeAddress: '0x2830b513f4ab3971e9a761803785277ba5ee4dab'
  },
  {
    symbol: 'NS7',
    name: 'Najah Safiya',
    tokenAddress: '0xe1a0a311adb89920816b79029484ea9b7d1ef32c',
    tokenDecimals: 8,
    exchangeAddress: '0xf6c7ab80d38588a905cadf1db03d9333cb04d177'
  },
  {
    symbol: 'IHF',
    name: 'Invictus Hyperion',
    tokenAddress: '0xaf1250fa68d7decd34fd75de8742bc03b29bd58e',
    tokenDecimals: 18,
    exchangeAddress: '0xaeb8fb9d0a3f21ab88fc12435cdc4aae13799eb6'
  },
  {
    symbol: 'CEL',
    name: 'Celsius',
    tokenAddress: '0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d',
    tokenDecimals: 4,
    exchangeAddress: '0x91debb54de02872a259c17699d9b794bc949fed2'
  },
  {
    symbol: 'NYOT',
    name: 'NotYourOrdinaryToken',
    tokenAddress: '0xea6ab13251aa6ae87475b418f529208eae317250',
    tokenDecimals: 2,
    exchangeAddress: '0x616c0ca2be15d68e00c5dca93e20c5b1f245300e'
  },
  {
    symbol: 'ERBYS',
    name: 'ErrbodysToken',
    tokenAddress: '0x29c8682e6cabd9485413cf81057ffa8fd4c399a4',
    tokenDecimals: 2,
    exchangeAddress: '0x8fae74207942f3a78747740658ab63c90d8400ff'
  },
  {
    symbol: 'CAR',
    name: 'CarBlock.io',
    tokenAddress: '0x4d9e23a3842fe7eb7682b9725cf6c507c424a41b',
    tokenDecimals: 18,
    exchangeAddress: '0xf01b1232af4f94519933dff65041227ff52f11f9'
  },
  {
    symbol: 'HOT',
    name: 'Hydro Protocol Token',
    tokenAddress: '0x9af839687f6c94542ac5ece2e317daae355493a1',
    tokenDecimals: 18,
    exchangeAddress: '0xe123575bf28ab05a65de145061ba747887deeae3'
  },
  {
    symbol: 'T2T',
    name: 'traceto.io',
    tokenAddress: '0xe6824483e279d967ea6f8472ace7585862fa1185',
    tokenDecimals: 18,
    exchangeAddress: '0x429f18e437ed3cf1c095de37c340616842c97d20'
  },
  {
    symbol: 'BTCETH7525',
    name: 'BitEth7525RebalancingSetToken',
    tokenAddress: '0xa35fc5019c4dc509394bd4d74591a0bf8852c195',
    tokenDecimals: 18,
    exchangeAddress: '0xca257d6779b153f5b3f7cffd89e5b37529c70947'
  },
  {
    symbol: 'BTCETH2575',
    name: 'BitEth2575RebalancingSetToken',
    tokenAddress: '0xa6c040045d962e4b8efa00954c7d23ccd0a2b8ad',
    tokenDecimals: 18,
    exchangeAddress: '0x1afc0bb4c1db404493fec6c2ceabd25f1eeb0a65'
  },
  {
    symbol: 'DIP',
    name: 'Decentralized Insurance Protocol',
    tokenAddress: '0xc719d010b63e5bbf2c0551872cd5316ed26acd83',
    tokenDecimals: 18,
    exchangeAddress: '0x61792f290e5100fbbcbb2309f03a1bab869fb850'
  },
  {
    symbol: 'BBW',
    name: 'BBWCoin',
    tokenAddress: '0x27b5b94a7269e175864d2c5e584d8f1414a2d94f',
    tokenDecimals: 8,
    exchangeAddress: '0x7141b573a6fb6c99c97c234c1b65e1c9696d29d1'
  },
  {
    symbol: 'ZMO',
    name: 'ZmeenaOrrCoin',
    tokenAddress: '0xa538cc79644c7522ca3c1f150b4979e06cc71804',
    tokenDecimals: 2,
    exchangeAddress: '0x9129ad3fd905293ffcc22ff7a1ef0406ce7c0c27'
  },
  {
    symbol: 'STETHDai',
    name: 'STETHDaiRebalancingSetToken',
    tokenAddress: '0x585c2cf94c41b528ec7329cbc3cde3c4f8d268db',
    tokenDecimals: 18,
    exchangeAddress: '0x10c4be5806878f78e6179af6d09d035bbdab2ec2'
  },
  {
    symbol: 'RC20',
    name: 'RoboCalls',
    tokenAddress: '0x61b2d3ea9f1c6b387c985c73d40e8fbfb284e5c7',
    tokenDecimals: 18,
    exchangeAddress: '0x9394c20adca4512dfc3d3c184c648e4193462ebb'
  },
  {
    symbol: 'SP',
    name: 'SunPower',
    tokenAddress: '0x33ad8ccd192c2b1782b0d3e557e32a54771e16f1',
    tokenDecimals: 18,
    exchangeAddress: '0x102745b4a019d37bc342850b0c36125f1cb2858d'
  },
  {
    symbol: 'NVT',
    name: 'Nova Token',
    tokenAddress: '0x09d8b66c48424324b25754a873e290cae5dca439',
    tokenDecimals: 18,
    exchangeAddress: '0x2e4d90dc7fd3d9be8fdb6fdd4b98e2ddc2cfa607'
  },
  {
    symbol: 'WaBi',
    name: 'WaBi',
    tokenAddress: '0x286bda1413a2df81731d4930ce2f862a35a609fe',
    tokenDecimals: 18,
    exchangeAddress: '0x65b809f942b3ec5695bbf74670c3a78657168320'
  },
  {
    symbol: 'CRYPTOLAND',
    name: 'CRYPTOLAND',
    tokenAddress: '0xebdc8da065f78048b0b0f3c17c8b5f4348daf219',
    tokenDecimals: 8,
    exchangeAddress: '0x0a7ee2162c0ee6be4a1de9e7f73cff5432309ec0'
  },
  {
    symbol: 'WIB',
    name: 'WIBSON',
    tokenAddress: '0x3f17dd476faf0a4855572f0b6ed5115d9bba22ad',
    tokenDecimals: 9,
    exchangeAddress: '0xad014d0dc396e4333778832d24e3a5e78b3593be'
  },
  {
    symbol: 'PEP',
    name: 'PEP Token',
    tokenAddress: '0xbb0ef9e617faddf54b8d16e29046f72b4d3ec77f',
    tokenDecimals: 18,
    exchangeAddress: '0x579134b2dc4a79746d365aa8097e8dc8b571fed1'
  },
  {
    symbol: '4/26 106-C',
    name: 'Apr 26 106-CALL',
    tokenAddress: '0xb134ec3fe107a190809ae612eec93f3847c1aa4d',
    tokenDecimals: 18,
    exchangeAddress: '0x0a8fb4a411a0fc781d65b19f3b261c858f82ffef'
  },
  {
    symbol: 'RMC',
    name: 'RemiCoin',
    tokenAddress: '0x7dc4f41294697a7903c4027f6ac528c5d14cd7eb',
    tokenDecimals: 8,
    exchangeAddress: '0x779dcfc531d31cd4fd7f4276bf357130dce3cc9b'
  },
  {
    symbol: 'SNGLS',
    name: 'SingularDTV',
    tokenAddress: '0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009',
    tokenDecimals: 0,
    exchangeAddress: '0x61061e00a5acda7886ccce2a051539ef2fca1ce6'
  },
  {
    symbol: 'VIB',
    name: 'Vibe',
    tokenAddress: '0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724',
    tokenDecimals: 18,
    exchangeAddress: '0xcc763e9add17a9d77b5b1b0fb7cb6e51508e3008'
  },
  {
    symbol: 'MPH',
    name: 'CHASYR',
    tokenAddress: '0x957a688d23a00f196b2da8e2531702c67de167cf',
    tokenDecimals: 18,
    exchangeAddress: '0xd4846bc16a6bf859c1253a6f37239ff06a99abe5'
  },
  {
    symbol: 'PTK:SV',
    name: 'PTK Swansons Vision',
    tokenAddress: '0x7107f8d12caac33f1c326337378e72ae1eac460a',
    tokenDecimals: 36,
    exchangeAddress: '0xfce183635d8bd990348599aabbd0057184d5c490'
  },
  {
    symbol: 'BLZ',
    name: 'Bluzelle Token',
    tokenAddress: '0x5732046a883704404f284ce41ffadd5b007fd668',
    tokenDecimals: 18,
    exchangeAddress: '0x0310396b59c4d90762398b8c5a24d646701c6f18'
  },
  {
    symbol: 'MFG',
    name: 'SyncFab Smart Manufacturing Blockchain',
    tokenAddress: '0x6710c63432a2de02954fc0f851db07146a6c0312',
    tokenDecimals: 18,
    exchangeAddress: '0x27882bfeabcd4ba886854c03206d12c17be5f001'
  },
  {
    symbol: 'findtherabbit.me',
    name: 'https://findtherabbit.me',
    tokenAddress: '0x713a1c4876673a982a828753166c452ba9721994',
    tokenDecimals: 18,
    exchangeAddress: '0x6b92c982c33e94f25fec6c23dd46403b925a1ae3'
  },
  {
    symbol: 'CC',
    name: 'CartyCion',
    tokenAddress: '0x3d779a7fb80723c6385524d113792d119acd2267',
    tokenDecimals: 18,
    exchangeAddress: '0x89df148b1c76d00b567f91ceeb7d0b3feb905011'
  },
  {
    symbol: 'HUNT',
    name: 'HuntToken',
    tokenAddress: '0x9aab071b4129b083b01cb5a0cb513ce7eca26fa5',
    tokenDecimals: 18,
    exchangeAddress: '0xb8cefb02e4f911c250b27690b72a61d58167d18c'
  },
  {
    symbol: 'MDL',
    name: 'Medilink Coin',
    tokenAddress: '0x8c8d6016344425ddd1d63523411de5eb398cd141',
    tokenDecimals: 18,
    exchangeAddress: '0x505d1fada4967cbc2bf01da31089a1333528f4ab'
  },
  {
    symbol: 'NPXS',
    name: 'Pundi X Token',
    tokenAddress: '0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3',
    tokenDecimals: 18,
    exchangeAddress: '0x93ff2c787c140c4ce21f01cc211fbdace274077f'
  },
  {
    symbol: 'IMC',
    name: 'IMCoin',
    tokenAddress: '0x379e5f3eab1b05f3811519907b36b8e04fe3a897',
    tokenDecimals: 18,
    exchangeAddress: '0xa983458a7b5434a89f48198d144151846a8fcc01'
  },
  {
    symbol: 'EDG',
    name: 'Edgeless',
    tokenAddress: '0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c',
    tokenDecimals: 0,
    exchangeAddress: '0x4ac2ccebac7b96f1e66fbb7049c740a8ca8ef78d'
  },
  {
    symbol: 'GRG',
    name: 'Rigo Token',
    tokenAddress: '0x4fbb350052bca5417566f188eb2ebce5b19bc964',
    tokenDecimals: 18,
    exchangeAddress: '0xee5e8d2357a29f4a85a938679233fe24fbc2cf1d'
  },
  {
    symbol: 'MX',
    name: 'Mythex',
    tokenAddress: '0xf6c868c4f2a48949ff9b01e67acd206543352fcd',
    tokenDecimals: 0,
    exchangeAddress: '0xe3349fd5f3bf3b878ac5444c29c7308bf5992bbb'
  },
  {
    symbol: 'SUB',
    name: 'Substratum',
    tokenAddress: '0x8d75959f1e61ec2571aa72798237101f084de63a',
    tokenDecimals: 18,
    exchangeAddress: '0xc080b284028e37e3b26d85f2c53ad51904471d7a'
  },
  {
    symbol: 'BTDE',
    name: 'Bethon Digital Ecosystem',
    tokenAddress: '0xc9d6382e5abfed97cc856216ced900b64324e502',
    tokenDecimals: 18,
    exchangeAddress: '0xb3d5641170b1b2e4344e62993adbbe54574102e4'
  },
  {
    symbol: 'COLR',
    name: 'Cryptovoxels Color',
    tokenAddress: '0x3867ef780a3afcf1201ef4f2acc6a46e3bd1eb88',
    tokenDecimals: 0,
    exchangeAddress: '0x3f0c63da66457dedc2677bef6bbdd457ba7a3c0b'
  },
  {
    symbol: 'MOD',
    name: 'Modum Token',
    tokenAddress: '0x957c30ab0426e0c93cd8241e2c60392d08c6ac8e',
    tokenDecimals: 0,
    exchangeAddress: '0xccb98654cd486216fff273dd025246588e77cfc1'
  },
  {
    symbol: 'PLN',
    name: 'MoneyFold Polish Zloty',
    tokenAddress: '0x7880515ed114127bfe1e76462ba5e2725939129e',
    tokenDecimals: 2,
    exchangeAddress: '0x6a4096bf1cb457049502aaaa6303c9cb1469546d'
  },
  {
    symbol: 'IMMO',
    name: 'blockimmo',
    tokenAddress: '0x9c3e7e016389661473ac64f4c37f5f7f2955e499',
    tokenDecimals: 18,
    exchangeAddress: '0x4218710e520e01e3158d9bdb579002e983be176c'
  },
  {
    symbol: 'DST',
    name: 'DragonSeriesToken',
    tokenAddress: '0xc5807256e2e2fe85ca94c3617c4bc5ff2bd9cfb6',
    tokenDecimals: 18,
    exchangeAddress: '0x2f75dc34c4cacd835041dd523b7d36d391b92aa0'
  },
  {
    symbol: 'NEU',
    name: 'Neumark',
    tokenAddress: '0xa823e6722006afe99e91c30ff5295052fe6b8e32',
    tokenDecimals: 18,
    exchangeAddress: '0x34b0b7ba7cd9efa0582dcfbf5f6d4cfe344d8c47'
  },
  {
    symbol: 'HGT',
    name: 'HelloGold Token',
    tokenAddress: '0xba2184520a1cc49a6159c57e61e1844e085615b6',
    tokenDecimals: 8,
    exchangeAddress: '0x658d3a5467e4b90a967530cf73718f453f35b2ac'
  },
  {
    symbol: 'YUN',
    name: 'Yun Planet',
    tokenAddress: '0x02b3c88b805f1c6982e38ea1d40a1d83f159c3d4',
    tokenDecimals: 8,
    exchangeAddress: '0x7b46b7df165e31dcbed54eaf1975b0c780db47e7'
  },
  {
    symbol: 'STORM',
    name: 'Storm Token',
    tokenAddress: '0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433',
    tokenDecimals: 18,
    exchangeAddress: '0xb0b12c05df3237eb6f0ce7312b68c37e140bf69b'
  },
  {
    symbol: 'KBC',
    name: 'KaratBank Coin',
    tokenAddress: '0xf3586684107ce0859c44aa2b2e0fb8cd8731a15a',
    tokenDecimals: 7,
    exchangeAddress: '0x2837ef3e8e0558ce0bfe465cfa4f8ba826683090'
  },
  {
    symbol: 'BTT',
    name: 'Bethon Token',
    tokenAddress: '0x36cd54b05b82156e454d690af1d392a27af41c94',
    tokenDecimals: 18,
    exchangeAddress: '0x9f023605f04a6bab127e0c40c4ddd17b5b5873a0'
  },
  {
    symbol: 'AOA',
    name: 'Aurora',
    tokenAddress: '0x9ab165d795019b6d8b3e971dda91071421305e5a',
    tokenDecimals: 18,
    exchangeAddress: '0x4a5875fc146005f7c3143ab403b9aafa42f9b152'
  },
  {
    symbol: 'TRX',
    name: 'Tronix',
    tokenAddress: '0xf230b790e05390fc8295f4d3f60332c93bed42e2',
    tokenDecimals: 6,
    exchangeAddress: '0x8f0f1fa9257e30d2f6eac262221447d29d33ac8c'
  },
  {
    symbol: 'TST',
    name: 'Touch Smart Token',
    tokenAddress: '0xd9bae39c725a1864b1133ad0ef1640d02f79b78c',
    tokenDecimals: 18,
    exchangeAddress: '0x8ac50b8ad6a856a492741d16e40b812652056483'
  },
  {
    symbol: 'MATIC',
    name: 'Matic Token',
    tokenAddress: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
    tokenDecimals: 18,
    exchangeAddress: '0x9a7a75e66b325a3bd46973b2b57c9b8d9d26a621'
  },
  {
    symbol: 'BCDT',
    name: 'Blockchain Certified Data Token',
    tokenAddress: '0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5',
    tokenDecimals: 18,
    exchangeAddress: '0x7acbb9fb0aff7673951ba35963c8fdc370c6017c'
  },
  {
    symbol: 'AD',
    name: 'Asian Dragon',
    tokenAddress: '0xf6dbe88ba55f1793ff0773c9b1275300f830914f',
    tokenDecimals: 8,
    exchangeAddress: '0xd6200e54cd6c064438c6ddb32e3af3ce4f0c5802'
  },
  {
    symbol: 'GOO',
    name: 'Vials of Goo',
    tokenAddress: '0xdf0960778c6e6597f197ed9a25f12f5d971da86c',
    tokenDecimals: 12,
    exchangeAddress: '0xe52dceab9c8892eca29b0a0869257d7ad26268d2'
  },
  {
    symbol: 'TTZ',
    name: 'TestTokenZ',
    tokenAddress: '0xd21ba1c2c0e8fbd236553efa39137165b3a68e75',
    tokenDecimals: 18,
    exchangeAddress: '0x7f3dab432429bf4de09b8ec697fc6d817f483b42'
  },
  {
    symbol: 'RST',
    name: 'REGA Risk Sharing Token',
    tokenAddress: '0xa17d1bf14802e0eec8f84b3b8b638a9402d60e9e',
    tokenDecimals: 10,
    exchangeAddress: '0xd6ed8979455ebed92db3b7afdd1ab200054a88bc'
  },
  {
    symbol: 'MYB',
    name: 'MyBit',
    tokenAddress: '0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc',
    tokenDecimals: 18,
    exchangeAddress: '0x1e0fbdaf60e1195a46e2af40a1c7b84460a13444'
  },
  {
    symbol: 'TEST',
    name: 'Testing Token',
    tokenAddress: '0xf1bbbfe96c5845dd4d5f60e7ce758bbc24f7f5ee',
    tokenDecimals: 18,
    exchangeAddress: '0x90be26ffa3f65d00858f4b2ad15b95e78d402f0f'
  },
  {
    symbol: 'MER',
    name: 'Meritum',
    tokenAddress: '0xf3981e5ff82caaa5d4cb4fba540b06c20c3d3dbe',
    tokenDecimals: 18,
    exchangeAddress: '0x2e9e106ef10613025a43c6afdcf68d6dd9f5d701'
  },
  {
    symbol: 'cETH',
    name: 'Compound Ether',
    tokenAddress: '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5',
    tokenDecimals: 8,
    exchangeAddress: '0x3f3e2cf087b4a818a7c610eb8ef332d894736d7d'
  },
  {
    symbol: 'SOCKS',
    name: 'Unisocks Edition 0',
    tokenAddress: '0x23b608675a2b2fb1890d3abbd85c5775c51691d5',
    tokenDecimals: 18,
    exchangeAddress: '0x22d8432cc7aa4f8712a655fc4cdfb1baec29fca9'
  },
  {
    symbol: 'VEN',
    name: 'VeChain Token',
    tokenAddress: '0xd850942ef8811f2a866692a623011bde52a462c1',
    tokenDecimals: 18,
    exchangeAddress: '0xb23c1553cf98f7abbc24c94141e5ce48148fa351'
  },
  {
    symbol: 'cDAI',
    name: 'Compound Dai',
    tokenAddress: '0xf5dce57282a584d2746faf1593d3121fcac444dc',
    tokenDecimals: 8,
    exchangeAddress: '0x45a2fdfed7f7a2c791fb1bdf6075b83fad821dde'
  },
  {
    symbol: 'HUM',
    name: 'Humanity',
    tokenAddress: '0xbbd1706d16418bb136e1497a73d3af4164586da0',
    tokenDecimals: 18,
    exchangeAddress: '0xe499657190d515119077af5d64f44b6f850baea5'
  },
  {
    symbol: 'SKAN',
    name: 'LakesCash',
    tokenAddress: '0x9cb79101f795287585843d71c1b0a33a0724c2bb',
    tokenDecimals: 2,
    exchangeAddress: '0x9f1fbbdd2c784025e170c7e636c68ae0de0cc435'
  },
  {
    symbol: 'ARN',
    name: 'Aeron',
    tokenAddress: '0xba5f11b16b155792cf3b2e6880e8706859a8aeb6',
    tokenDecimals: 8,
    exchangeAddress: '0x05d9c70cee7760ff3c7b50c3f7f9c0de24c0d840'
  },
  {
    symbol: 'SXUT',
    name: 'Spectre.ai U-Token',
    tokenAddress: '0x2c82c73d5b34aa015989462b2948cd616a37641f',
    tokenDecimals: 18,
    exchangeAddress: '0x6a69ddbbf936fc343cbefb4e4edbf6dbc4002e04'
  },
  {
    symbol: 'ZXBT',
    name: 'ZerroXBToken Project 0xbt',
    tokenAddress: '0xcd0a53685b594a543181e6203433766648a8cd43',
    tokenDecimals: 3,
    exchangeAddress: '0xce1ccd4668c88d5ea832a33048c41c3eded3b38a'
  },
  {
    symbol: 'DOYLE',
    name: 'DOYLE COIN',
    tokenAddress: '0x9181eef2ea5624c187d1147134b847552302da2a',
    tokenDecimals: 18,
    exchangeAddress: '0xb95eba7ff86e34d7eb8fb91618a6119059908bbb'
  },
  {
    symbol: 'MMTM',
    name: 'Momentum',
    tokenAddress: '0x9f22a13204c09e0f89144b63da0588a836c07931',
    tokenDecimals: 18,
    exchangeAddress: '0xb472682be408335d93d1a9b56fd1f92a8ab55198'
  },
  {
    symbol: 'MTN',
    name: 'MedToken',
    tokenAddress: '0x41dbecc1cdc5517c6f76f6a6e836adbee2754de3',
    tokenDecimals: 18,
    exchangeAddress: '0xc3ee3be4f46cd5ca30406c37f074031cfe3ae181'
  },
  {
    symbol: 'MVT',
    name: 'The Movement',
    tokenAddress: '0x3d46454212c61ecb7b31248047fa033120b88668',
    tokenDecimals: 18,
    exchangeAddress: '0x89a294f122d1cc3696be37d00d113f45c262712a'
  },
  {
    symbol: 'POP',
    name: 'POP Network Token',
    tokenAddress: '0x5d858bcd53e085920620549214a8b27ce2f04670',
    tokenDecimals: 18,
    exchangeAddress: '0xdd60feabc16bbc79ec558fd4b852fe1ed9f030e8'
  },
  {
    symbol: 'Candy',
    name: 'Unicorn Candy Coin',
    tokenAddress: '0xcd3673af09e76c74d889aabab68ca0645566a3a1',
    tokenDecimals: 18,
    exchangeAddress: '0x450afa2c7d86cd4aa024a407e5b391627b013fc7'
  },
  {
    symbol: 'RGS',
    name: 'Rusgas',
    tokenAddress: '0x4c383bdcae52a6e1cb810c76c70d6f31a249ec9b',
    tokenDecimals: 8,
    exchangeAddress: '0xecdd1fc0b1297683330436a99ffecb8a156cb098'
  },
  {
    symbol: 'UBN',
    name: 'Ubricoin',
    tokenAddress: '0xdb13025b219db5e4529f48b65ff009a26b6ae733',
    tokenDecimals: 18,
    exchangeAddress: '0x170cb1c6b6ca03f693c79617001f83a47bedea8c'
  },
  {
    symbol: 'AI',
    name: 'PolyAi',
    tokenAddress: '0x5121e348e897daef1eef23959ab290e5557cf274',
    tokenDecimals: 18,
    exchangeAddress: '0x3ca04f154b30661a84fdcddadc55f66b8ad82221'
  },
  {
    symbol: 'MBGN',
    name: 'Embiggen',
    tokenAddress: '0xdde19c145c1ee51b48f7a28e8df125da0cc440be',
    tokenDecimals: 18,
    exchangeAddress: '0x6af056d9919fab5b046112778340108d5ec3ebbb'
  },
  {
    symbol: 'NMU',
    name: 'NOISEMUSICTOKEN',
    tokenAddress: '0x4abefcd2996073093a06e5a3bd32acda6b3b2235',
    tokenDecimals: 18,
    exchangeAddress: '0xb2ec66d6fcf579af9b8035ec2cf85df0be8bdf82'
  },
  {
    symbol: 'NULS',
    name: 'Nuls',
    tokenAddress: '0xb91318f35bdb262e9423bc7c7c2a3a93dd93c92c',
    tokenDecimals: 18,
    exchangeAddress: '0x12dbf069f65dde8443782a92cfc47094754aa0cf'
  },
  {
    symbol: 'MTV',
    name: 'MultiVAC',
    tokenAddress: '0x8aa688ab789d1848d131c65d98ceaa8875d97ef1',
    tokenDecimals: 18,
    exchangeAddress: '0x3acb0e353759645d2c8ae098e2238956ceb681fb'
  },
  {
    symbol: 'PPP',
    name: 'PayPie',
    tokenAddress: '0xc42209accc14029c1012fb5680d95fbd6036e2a0',
    tokenDecimals: 18,
    exchangeAddress: '0x1b810f17eeef12838fe059c926093b30653e7567'
  },
  {
    symbol: 'INB',
    name: 'Insight Chain',
    tokenAddress: '0x17aa18a4b64a55abed7fa543f2ba4e91f2dce482',
    tokenDecimals: 18,
    exchangeAddress: '0x3a891d655c929b22e3d6791238f3a4545e31b81e'
  },
  {
    symbol: 'SWAT',
    name: 'SWTCoin',
    tokenAddress: '0xc0f1728d9513efc316d0e93a0758c992f88b0809',
    tokenDecimals: 8,
    exchangeAddress: '0x6c81a9649c26fc34db64967de6117c8a25e273db'
  },
  {
    symbol: 'PYC',
    name: 'Polycoin',
    tokenAddress: '0x4c3ad93c06a073be57845549914f8833101b58f3',
    tokenDecimals: 0,
    exchangeAddress: '0xf52281071b0563a95c34753fcf615d0d3c2c4de3'
  },
  {
    symbol: 'XD',
    name: 'Data Transaction Token',
    tokenAddress: '0x24dcc881e7dd730546834452f21872d5cb4b5293',
    tokenDecimals: 18,
    exchangeAddress: '0xb7cf1e1ea55572713feeec025d7cf56b3c6c6b6d'
  },
  {
    symbol: 'TUSD',
    name: 'TrueUSD',
    tokenAddress: '0x0000000000085d4780b73119b644ae5ecd22b376',
    tokenDecimals: 18,
    exchangeAddress: '0x5048b9d01097498fd72f3f14bc9bc74a5aac8fa7'
  },
  {
    symbol: 'AMB',
    name: 'Amber Token',
    tokenAddress: '0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce',
    tokenDecimals: 18,
    exchangeAddress: '0xca265a7f4c9dc47b259850b696ebeffa8bb18d9d'
  },
  {
    symbol: 'CENNZ',
    name: 'Centrality Token',
    tokenAddress: '0x1122b6a0e00dce0563082b6e2953f3a943855c1f',
    tokenDecimals: 18,
    exchangeAddress: '0xb25b1703b37ae34d405ad9d053aada87967aba92'
  },
  {
    symbol: 'NUTZ',
    name: 'CRYPTONUTZ',
    tokenAddress: '0x46ffe978f4cf28e7135804ff244b6cdc8dc51377',
    tokenDecimals: 18,
    exchangeAddress: '0xcb3091c01bd9502b666a6a0de55bf9df461fde68'
  },
  {
    symbol: 'GST1',
    name: 'Gastoken.io',
    tokenAddress: '0x88d60255f917e3eb94eae199d827dad837fac4cb',
    tokenDecimals: 2,
    exchangeAddress: '0x5b583057dfbc49c67dcd017b75a11148db1168e6'
  },
  {
    symbol: 'FOCT',
    name: 'Forcount',
    tokenAddress: '0x66946bc3e6738c70bbc4e69eb38a507f8eb9bc20',
    tokenDecimals: 18,
    exchangeAddress: '0x20ead976847626004d0120bcd02eb526eb6985c3'
  },
  {
    symbol: 'DANK',
    name: 'Dank Token',
    tokenAddress: '0x0cb8d0b37c7487b11d57f1f33defa2b1d3cfccfe',
    tokenDecimals: 18,
    exchangeAddress: '0x68e83c65629ed0d6e836c1957d304aa2741b240e'
  },
  {
    symbol: 'AAA',
    name: 'Change Your Life',
    tokenAddress: '0xd938137e6d96c72e4a6085412ada2dad78ff89c4',
    tokenDecimals: 8,
    exchangeAddress: '0x4fc96501dc4a33d2ae5d67d844f4434f3eef92d7'
  },
  {
    symbol: 'EVE',
    name: 'Devery.io',
    tokenAddress: '0x923108a439c4e8c2315c4f6521e5ce95b44e9b4c',
    tokenDecimals: 18,
    exchangeAddress: '0x23ffd1d8077b3e3679d48b9002dd11471e2295bc'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0xef8a2c1bc94e630463293f71bf5414d13e80f62d',
    tokenDecimals: 18,
    exchangeAddress: '0xd9025ed64baa7b9046e37fe94670c79fccb2b5c8'
  },
  {
    symbol: 'MCH',
    name: 'Meritum Cash',
    tokenAddress: '0x10709ca9adcaa1728ad530be1ed39c0286124883',
    tokenDecimals: 18,
    exchangeAddress: '0xbb6e36aa6121246c056d04f16757933a1052e64c'
  },
  {
    symbol: 'MIM',
    name: 'Moiom',
    tokenAddress: '0x3bea1cb0ea10a35b1995233d6d57b34fb3142b1b',
    tokenDecimals: 18,
    exchangeAddress: '0x88942e83677e89c7bf68fc9e07621b09c33b4d47'
  },
  {
    symbol: 'AFA',
    name: 'Africahead Ipparts',
    tokenAddress: '0xfb48e0dea837f9438309a7e9f0cfe7ee3353a84e',
    tokenDecimals: 2,
    exchangeAddress: '0xfe52450ea8d64bc55c295c6162318ed79bb69df6'
  },
  {
    symbol: 'TELE',
    name: 'MiracleTele',
    tokenAddress: '0xb363a3c584b1f379c79fbf09df015da5529d4dac',
    tokenDecimals: 18,
    exchangeAddress: '0xcf6c25cfe2b2f6951357f0827e06430e1151ffb7'
  },
  {
    symbol: 'MAGK',
    name: 'Wizard Shares',
    tokenAddress: '0x0dba2b5162c4986acb5ddd1b4069de5ad749b47e',
    tokenDecimals: 18,
    exchangeAddress: '0x1ac13316a2c2beb2f701ccd4238dc34c74bb0c12'
  },
  {
    symbol: 'STR',
    name: 'Staker',
    tokenAddress: '0xbae235823d7255d9d48635ced4735227244cd583',
    tokenDecimals: 18,
    exchangeAddress: '0xc99b59ffae2abe1d66c2eb5a517be0f1b813c98b'
  },
  {
    symbol: 'LRC',
    name: 'LoopringCoin V2',
    tokenAddress: '0xbbbbca6a901c926f240b89eacb641d8aec7aeafd',
    tokenDecimals: 18,
    exchangeAddress: '0xa539baaa3aca455c986bb1e25301cef936ce1b65'
  },
  {
    symbol: 'RMK',
    name: 'RomikaHungary',
    tokenAddress: '0x1ebda9b505ad2c6ccee86bfc18f58035dcfdc26a',
    tokenDecimals: 2,
    exchangeAddress: '0x917d8f35a10985add5d7d95770af8cabefb05eaa'
  },
  {
    symbol: 'SHP',
    name: 'Sharpe Platform Token',
    tokenAddress: '0xef2463099360a085f1f10b076ed72ef625497a06',
    tokenDecimals: 18,
    exchangeAddress: '0x25a2273f0654b35c5daf8cd129f44e6bd32146f0'
  },
  {
    symbol: 'NTO',
    name: 'Fujinto',
    tokenAddress: '0x8a99ed8a1b204903ee46e733f2c1286f6d20b177',
    tokenDecimals: 18,
    exchangeAddress: '0xab76c739664681b0d84dc29250d4f71c5c249024'
  },
  {
    symbol: 'BAS',
    name: 'BitAsean',
    tokenAddress: '0x2a05d22db079bc40c2f77a1d1ff703a56e631cc1',
    tokenDecimals: 8,
    exchangeAddress: '0x5b6752dd3c7e68694440ea90124aa8d16e0ba0cd'
  },
  {
    symbol: 'HC',
    name: 'HC',
    tokenAddress: '0x642e48713946ecdb12c0b8830e8cb64425327955',
    tokenDecimals: 0,
    exchangeAddress: '0xdec31635e50acc89eeef6ec079766aaa7703ae3d'
  },
  {
    symbol: 'OCEAN',
    name: 'OceanToken',
    tokenAddress: '0x985dd3d42de1e256d09e1c10f112bccb8015ad41',
    tokenDecimals: 18,
    exchangeAddress: '0xa59cc1618d144ccac2bfb46f61272cebf00d90d5'
  },
  {
    symbol: 'NUSD',
    name: 'Neutral',
    tokenAddress: '0x0c6144c16af288948c8fdb37fd8fec94bff3d1d9',
    tokenDecimals: 6,
    exchangeAddress: '0xce23d871009a52ab5560ba613a042e45e1f33539'
  },
  {
    symbol: 'AMN',
    name: 'Amon',
    tokenAddress: '0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c',
    tokenDecimals: 18,
    exchangeAddress: '0xe6c198d27a5b71144b40cfa2362ae3166728e0c8'
  },
  {
    symbol: 'PRTL',
    name: 'Partial Coin',
    tokenAddress: '0xf01d7939441a3b1b108c70a28dcd99c6a98ad4b4',
    tokenDecimals: 18,
    exchangeAddress: '0xc0a09103c80752e6e7c4265bfad7abecb37d4f06'
  },
  {
    symbol: 'SETH',
    name: 'Sether',
    tokenAddress: '0x78b039921e84e726eb72e7b1212bb35504c645ca',
    tokenDecimals: 18,
    exchangeAddress: '0xb25b24c590c3b92d18d41a9201922eb94ba884d2'
  },
  {
    symbol: 'NUG',
    name: 'Nuggets',
    tokenAddress: '0x245ef47d4d0505ecf3ac463f4d81f41ade8f1fd1',
    tokenDecimals: 18,
    exchangeAddress: '0x0887f5a22d0f258f11fb1562b6b5504efd5ff021'
  },
  {
    symbol: 'FAITH',
    name: 'FaithCoin',
    tokenAddress: '0xe531642e9bb5d027e9c20e03284287b97919a9a5',
    tokenDecimals: 8,
    exchangeAddress: '0x61c2145f113f5f9bc970476817f990831d60d38c'
  },
  {
    symbol: 'LIT',
    name: 'LITION',
    tokenAddress: '0x763fa6806e1acf68130d2d0f0df754c93cc546b2',
    tokenDecimals: 18,
    exchangeAddress: '0x8f814b4f0c18968a6d7aada420ecee74a33ecd3f'
  },
  {
    symbol: 'WCK',
    name: 'Wrapped CryptoKitties',
    tokenAddress: '0x19d9b17497824081e291115044b567c4722cdaeb',
    tokenDecimals: 18,
    exchangeAddress: '0x92d70317913a2fb013f252b7a139ed1782edc6d6'
  },
  {
    symbol: 'PGF7T',
    name: 'PGF500 Token',
    tokenAddress: '0x9fadea1aff842d407893e21dbd0e2017b4c287b6',
    tokenDecimals: 18,
    exchangeAddress: '0x7232869cc7dc739b95dcdcd2f685f094ffd13811'
  },
  {
    symbol: 'TTZ',
    name: 'TestTokenZ8',
    tokenAddress: '0x5f16c1991dff3f6fc2ea3ca3f3e6da13e1ddcb39',
    tokenDecimals: 8,
    exchangeAddress: '0xfa35e10c144adbc51ddcb5ea2271329df9ad00a3'
  },
  {
    symbol: 'META',
    name: 'MetaCartel',
    tokenAddress: '0x5c437a92e1c60570a43bed78eb3f9e0ea5121b32',
    tokenDecimals: 0,
    exchangeAddress: '0xbe7d47c6f434d60ebb6877c5160a8ca05d83b789'
  },
  {
    symbol: 'TRAT',
    name: 'Tratok',
    tokenAddress: '0x0cbc9b02b8628ae08688b5cc8134dc09e36c443b',
    tokenDecimals: 5,
    exchangeAddress: '0x57a579ac8d28264784d61897b407ee693028a070'
  },
  {
    symbol: 'AWE',
    name: 'AweCoin',
    tokenAddress: '0xfa0f26d2334764ce9f9582d8ad0514b5712589cf',
    tokenDecimals: 0,
    exchangeAddress: '0xcf636d7519e5385816a66cfd0955bc74b4ef6054'
  },
  {
    symbol: 'LAH',
    name: 'LoveArtHate',
    tokenAddress: '0xf5bdb0aa9f0c05ec3fc8a31d7053652401982b4d',
    tokenDecimals: 18,
    exchangeAddress: '0xc022da71557968e0fce96c423699323a7b7c0f99'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0x5a4ade4f3e934a0885f42884f7077261c3f4f66f',
    tokenDecimals: 18,
    exchangeAddress: '0x8da198a049426bfcf1522b0dc52f84beda6e38ff'
  },
  {
    symbol: 'LTCD',
    name: 'LitecoinDiamond',
    tokenAddress: '0x100a6e7a8710726bc28d0213da0b4f06702ce349',
    tokenDecimals: 0,
    exchangeAddress: '0xbd3ee2572bb1e4c68e3935d13dd8b121261ccd4e'
  },
  {
    symbol: 'WCK',
    name: 'Wrapped CryptoKitties',
    tokenAddress: '0x09fe5f0236f0ea5d930197dce254d77b04128075',
    tokenDecimals: 18,
    exchangeAddress: '0x4ff7fa493559c40abd6d157a0bfc35df68d8d0ac'
  },
  {
    symbol: 'PIEG',
    name: 'Pi Edutainment Global',
    tokenAddress: '0xc68643bccde12df925469fe45df8a60812e64b36',
    tokenDecimals: 18,
    exchangeAddress: '0xd9ed4b169b897795e678266f9d2e1ace015d79e5'
  },
  {
    symbol: 'cUSDC',
    name: 'Compound USD Coin',
    tokenAddress: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
    tokenDecimals: 8,
    exchangeAddress: '0xb791c10824296881f91bdbc16367bbd9743fd99b'
  },
  {
    symbol: 'MGN',
    name: 'Magnolia Token',
    tokenAddress: '0x80f222a749a2e18eb7f676d371f19ad7efeee3b7',
    tokenDecimals: 18,
    exchangeAddress: '0xdd80ca8062c7ef90fca2547e6a2a126c596e611f'
  },
  {
    symbol: 'ETHDai',
    name: 'ETHDaiRebalancingSetToken',
    tokenAddress: '0x8ddc86dba7ad728012efc460b8a168aba60b403b',
    tokenDecimals: 18,
    exchangeAddress: '0x06379be162b7d71fd188a48964978c7f0b56845a'
  },
  {
    symbol: 'BSH',
    name: 'Bullshit',
    tokenAddress: '0x91bc206f0a1ffbc399b4a20a41324ed1dad2b718',
    tokenDecimals: 0,
    exchangeAddress: '0x8f628ae9acdd5566063a39c0980160d60ab33b41'
  },
  {
    symbol: 'HUF',
    name: 'HungaryFiller',
    tokenAddress: '0x092ac353612d41e5ad1c2bb511b51a8619c639af',
    tokenDecimals: 2,
    exchangeAddress: '0x48a3ce9045e350b588af4e8edff81f6335c121fe'
  },
  {
    symbol: 'TESTGLD',
    name: 'TESTGOLD',
    tokenAddress: '0x0fac12df2fc6c2499cca50d7dbdc4d691c3a94f9',
    tokenDecimals: 18,
    exchangeAddress: '0x14db4410da6d1235bb0d6053695e50c1007986ae'
  },
  {
    symbol: 'PLR',
    name: 'PILLAR',
    tokenAddress: '0xe3818504c1b32bf1557b16c238b2e01fd3149c17',
    tokenDecimals: 18,
    exchangeAddress: '0x9631959ba6e2624f004302af262cc5f8c81c9058'
  },
  {
    symbol: 'REAL',
    name: 'Real Estate Asset Ledger',
    tokenAddress: '0x9214ec02cb71cba0ada6896b8da260736a67ab10',
    tokenDecimals: 18,
    exchangeAddress: '0x5a7d213c2ca1b5068b489f8b55a7a1ec87ed9180'
  },
  {
    symbol: 'TM',
    name: 'Tokenmom',
    tokenAddress: '0x554b520b298be389f0d87bf3376eb4d6510456ec',
    tokenDecimals: 18,
    exchangeAddress: '0xc2e27d332d12bde9bac91d535fec25869c4d5794'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x917d8f35a10985add5d7d95770af8cabefb05eaa',
    tokenDecimals: 18,
    exchangeAddress: '0xdf4d0de9b4529fcbc3458e4c8653a08745132c53'
  },
  {
    symbol: 'EXU',
    name: 'EXU Protocol',
    tokenAddress: '0xe06af951086ec3c488b50e31be29c07f8a260ca3',
    tokenDecimals: 16,
    exchangeAddress: '0x6ad8501ba523fbd9862e90c7cd39aa1d177cd3e2'
  },
  {
    symbol: 'PSNT',
    name: 'PeasantCoin',
    tokenAddress: '0x8b654789353b0b622667f105eaef9e97d3c33f44',
    tokenDecimals: 18,
    exchangeAddress: '0x86bf391ea35d762e345d6eb603abf1e6f444345d'
  },
  {
    symbol: 'SHT',
    name: 'Shadowlands Token',
    tokenAddress: '0xee91e47cff7ab926b45edce1687020a3748556c3',
    tokenDecimals: 18,
    exchangeAddress: '0x75f6fdfa5cbbd6466d33b013bec78bd92e9014b5'
  },
  {
    symbol: 'PSNT',
    name: 'PeasantCoin',
    tokenAddress: '0x2207bc0aac812fa3e03463d73d65a5fae9b9bf83',
    tokenDecimals: 18,
    exchangeAddress: '0x9cea564ad3a2a45be6a32155a29c49f7db24e48c'
  },
  {
    symbol: '🦄',
    name: 'Unicorns',
    tokenAddress: '0x89205a3a3b2a69de6dbf7f01ed13b2108b2c43e7',
    tokenDecimals: 0,
    exchangeAddress: '0x737182f561e6aa7bb5618764a9e775ca0bc25572'
  },
  {
    symbol: 'BNTE',
    name: 'Bountie',
    tokenAddress: '0x3ccb1fe6d628444fb1c823a3ee3573ed0a21f338',
    tokenDecimals: 18,
    exchangeAddress: '0xd76eb30a740485f9f9348600bea83b5e8b954bb1'
  },
  {
    symbol: 'PSNT',
    name: 'PeasantCoin',
    tokenAddress: '0xabaab06fd0ba2c3bc22dcb66c2fd84c012a917f8',
    tokenDecimals: 18,
    exchangeAddress: '0xd3879a36df8ad7eeeabaf27623cb6d401c131ae5'
  },
  {
    symbol: 'LEO',
    name: 'Bitfinex LEO Token',
    tokenAddress: '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3',
    tokenDecimals: 18,
    exchangeAddress: '0xb54084ac1ffd5682771cff0432a29110923de100'
  },
  {
    symbol: 'MIN',
    name: 'MINDOL',
    tokenAddress: '0x862da0a691bb0b74038377295f8ff523d0493eb4',
    tokenDecimals: 18,
    exchangeAddress: '0x4a3776c887eb285d9339ee63426a1bec5be3f2dd'
  },
  {
    symbol: 'COT',
    name: 'CoTrader',
    tokenAddress: '0x5c872500c00565505f3624ab435c222e558e9ff8',
    tokenDecimals: 18,
    exchangeAddress: '0xf7e033ab0f295e1e240f2be18a0650b2d2a1a4c3'
  },
  {
    symbol: 'XCN',
    name: 'XCOIN',
    tokenAddress: '0x748bab4b67948196aec77ee76526ce215b5eb63b',
    tokenDecimals: 6,
    exchangeAddress: '0x832d945efa8a9327acdb652d418b746eb6251958'
  },
  {
    symbol: 'BRNT',
    name: 'Burninator Token',
    tokenAddress: '0x2eb1e8fd394222df25638cfa8f0e5e7998a9dc1f',
    tokenDecimals: 18,
    exchangeAddress: '0x4d1aaa65b594fab18b74cd05f45a69aefdc1702a'
  },
  {
    symbol: 'EVTN',
    name: 'everiToken',
    tokenAddress: '0xb364701c2591f3553062cf0a212c0df523572f7c',
    tokenDecimals: 8,
    exchangeAddress: '0xe3f3f0b24a709eff923931775190656807301cc9'
  },
  {
    symbol: 'JL',
    name: 'JiuLove',
    tokenAddress: '0x8e16df6b7631b3d781a94be2260d1d4a96cb565a',
    tokenDecimals: 4,
    exchangeAddress: '0x1820c1c04632d56ac2fb191656e882f007a6ce58'
  },
  {
    symbol: 'STAR',
    name: 'Starbase',
    tokenAddress: '0xf70a642bd387f94380ffb90451c2c81d4eb82cbc',
    tokenDecimals: 18,
    exchangeAddress: '0x26fedc50bd36d2fa9997242b97ad62b87bf7a7b9'
  },
  {
    symbol: 'LEAP',
    name: 'LeapToken',
    tokenAddress: '0x78230e69d6e6449db1e11904e0bd81c018454d7a',
    tokenDecimals: 18,
    exchangeAddress: '0xb5e62826970f6b66ad3084d5f77970626be62a99'
  },
  {
    symbol: 'BOMB',
    name: 'BOMB',
    tokenAddress: '0x1c95b093d6c236d3ef7c796fe33f9cc6b8606714',
    tokenDecimals: 0,
    exchangeAddress: '0x078e8ac023f6457264c96719cbeb94dddeda9dd5'
  },
  {
    symbol: 'ILK',
    name: 'Inlock token',
    tokenAddress: '0xf784682c82526e245f50975190ef0fff4e4fc077',
    tokenDecimals: 8,
    exchangeAddress: '0x75fa9abc14fa165eca10d8fd60c9c0c2c83de124'
  },
  {
    symbol: 'YUP',
    name: 'YUP',
    tokenAddress: '0xd9a12cde03a86e800496469858de8581d3a5353d',
    tokenDecimals: 18,
    exchangeAddress: '0x26a9717f658eeed4ba5dbdba5908fb34149c44db'
  },
  {
    symbol: 'CDZ',
    name: 'Cisco Dollarz',
    tokenAddress: '0xa8f732224456a795061bf3964416c1b69c083dfa',
    tokenDecimals: 18,
    exchangeAddress: '0xb2007899c7148893e4a456574b320bae4bd0bd71'
  },
  {
    symbol: '٨',
    name: 'Dentacoin',
    tokenAddress: '0x08d32b0da63e2c3bcf8019c9c5d849d7a9d791e6',
    tokenDecimals: 0,
    exchangeAddress: '0xf73848b04c6315bb8db6492c04ba20828c0c7bdc'
  },
  {
    symbol: 'EURS',
    name: 'STASIS EURS Token',
    tokenAddress: '0xdb25f211ab05b1c97d595516f45794528a807ad8',
    tokenDecimals: 2,
    exchangeAddress: '0x4b4c63ea99e2835b9d899610c22084513f71ee03'
  },
  {
    symbol: 'DCN',
    name: 'Dentacoin',
    tokenAddress: '0x621f61444a000b38aa467f585dacfadf3f976f75',
    tokenDecimals: 0,
    exchangeAddress: '0x5b7ebc24192955ac576ee074107a11b15e659f02'
  },
  {
    symbol: '0DARCOIN',
    name: '0 DardosHungary',
    tokenAddress: '0x96cd3fa86724f2f15d61b2a7faeb9e6cd0a0a587',
    tokenDecimals: 2,
    exchangeAddress: '0x0637d5e66da105431a1d444ee06e76349ab22ed4'
  },
  {
    symbol: 'QSP',
    name: 'Quantstamp Token',
    tokenAddress: '0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d',
    tokenDecimals: 18,
    exchangeAddress: '0x82db9fc4956fa40efe1e35d881004612b5cb2cc2'
  },
  {
    symbol: 'PHU',
    name: 'PenniHungary',
    tokenAddress: '0xd7de455acaff66370f91d90dd0df8f07d3c84fe7',
    tokenDecimals: 2,
    exchangeAddress: '0xfd00fa15894ca24862371a9dda75596ad31af86e'
  },
  {
    symbol: 'GRM',
    name: 'Green Money',
    tokenAddress: '0xc8c6fc3c4f6342c5291e747268625f979a888ebf',
    tokenDecimals: 18,
    exchangeAddress: '0xac432121efb452540ec96f5f0aa922d890c6a588'
  },
  {
    symbol: 'ASR',
    name: 'Astro',
    tokenAddress: '0x89c98f4529a41c7ee25d730d29bc39170ed11c60',
    tokenDecimals: 18,
    exchangeAddress: '0xeda88ddb13888c9a4de7304965e9315e69ea980e'
  },
  {
    symbol: '(333eth.io - https://t.me/Ethereum333/262)',
    name: 'www.pnztrust.com',
    tokenAddress: '0x5d210a4c794fa210c64712f1e395ec1136aaec4c',
    tokenDecimals: 0,
    exchangeAddress: '0x4177a0d8ace5425f463ad155538c5c6f2df187d1'
  },
  {
    symbol: 'findtherabbit.me',
    name: 'https://findtherabbit.me',
    tokenAddress: '0x2ff2b86c156583b1135c584fd940a1996fa4230b',
    tokenDecimals: 18,
    exchangeAddress: '0xaef9b172ac5c7e2d3058de906ec00a4499d2b62c'
  },
  {
    symbol: 'NUKE',
    name: 'HalfLife',
    tokenAddress: '0xc58c0fca06908e66540102356f2e91edcaeb8d81',
    tokenDecimals: 18,
    exchangeAddress: '0x39f70a026e6e2aac3453aeb8e563025afb542f9f'
  },
  {
    symbol: 'LEI',
    name: 'LEIREL',
    tokenAddress: '0x532ba7b9534a31e0898a9a64e0a898d4bb8db34d',
    tokenDecimals: 0,
    exchangeAddress: '0x8baffadc6694b1b00849119e459fda5df8a8e4af'
  },
  {
    symbol: 'NOT',
    name: 'Not',
    tokenAddress: '0x0027449bf0887ca3e431d263ffdefb244d95b555',
    tokenDecimals: 18,
    exchangeAddress: '0xd88958eac44250d46b2a6cc05873663dd1117acf'
  },
  {
    symbol: 'sETH',
    name: 'Synth sETH',
    tokenAddress: '0x42456d7084eacf4083f1140d3229471bba2949a8',
    tokenDecimals: 18,
    exchangeAddress: '0x4740c758859d4651061cc9cdefdba92bdc3a845d'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xf73848b04c6315bb8db6492c04ba20828c0c7bdc',
    tokenDecimals: 18,
    exchangeAddress: '0x1737f4b853d58785595612aa07c4ca2ffd561b9c'
  },
  {
    symbol: 'STBTCDai',
    name: 'STBTCDaiRebalancingSetToken',
    tokenAddress: '0x20649d97b1393105cf92a5083fd2aff7c99ebe56',
    tokenDecimals: 18,
    exchangeAddress: '0xe2e496e3fc550b68feeeddad7db42d7063e6729e'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x768be41feb0216a8e2a8daa30567fc3e40226cbe',
    tokenDecimals: 18,
    exchangeAddress: '0xdf788db9789078d631ab7d4e39d52f7a18d91366'
  },
  {
    symbol: 'XS2',
    name: 'XS2 Token',
    tokenAddress: '0x448bd15ac18ce6386c27914c14c18fd9148df75f',
    tokenDecimals: 18,
    exchangeAddress: '0x06f6685eaefa8ece41d2ebbb0c707203f731be01'
  },
  {
    symbol: 'RING',
    name: 'Darwinia Network Native Token',
    tokenAddress: '0x9469d013805bffb7d3debe5e7839237e535ec483',
    tokenDecimals: 18,
    exchangeAddress: '0xebd8aa50b26bfa63007d61eba777a9dde7e43c64'
  },
  {
    symbol: 'XGN',
    name: 'TransGen',
    tokenAddress: '0x9b4e167aea30f94929017f747f5496284141aa96',
    tokenDecimals: 18,
    exchangeAddress: '0x0ee1fcf75535c80163c1bd9f5a127106b8c3c49f'
  },
  {
    symbol: 'DAPP',
    name: '360APP',
    tokenAddress: '0x5d0fa08aeb173ade44b0cf7f31d506d8e04f0ac8',
    tokenDecimals: 18,
    exchangeAddress: '0x68f21a820436d4a43aca3d4e59f814027ecae7ac'
  },
  {
    symbol: 'RSR',
    name: 'Reserve Rights',
    tokenAddress: '0x8762db106b2c2a0bccb3a80d1ed41273552616e8',
    tokenDecimals: 18,
    exchangeAddress: '0xeeeec06f48656e921b39e30d9a205cb2b08ea465'
  },
  {
    symbol: 'LUNA',
    name: 'Luna',
    tokenAddress: '0x92bf969865c80eda082fd5d8b4e28da4d58e1c3a',
    tokenDecimals: 18,
    exchangeAddress: '0x89c1c0741f1e044a7bd8b8d96d975792ea0dd6d5'
  },
  {
    symbol: 'HOPP',
    name: 'Hopper Token',
    tokenAddress: '0x33b282c88de3e8ed471c24e43f60816dcabe12f4',
    tokenDecimals: 18,
    exchangeAddress: '0xbfb7eddf9d97ddc9e807b903a7d68becda14660e'
  },
  {
    symbol: 'QUAF',
    name: 'Quaffle',
    tokenAddress: '0x4492e10fd69be9ae85d75bdcda2d9d1e68c0eea6',
    tokenDecimals: 18,
    exchangeAddress: '0xdf20b0ec6cd1505a1b2d15ea1a4aaa67ae2c0a3b'
  },
  {
    symbol: 'BTCETH5050',
    name: 'BTC ETH Equal Weight Set',
    tokenAddress: '0xc06aec5191be16b94ffc97b6fc01393527367365',
    tokenDecimals: 18,
    exchangeAddress: '0x539f7952f7b21c48aff332cd5d9cf6e28eba290f'
  },
  {
    symbol: 'PRE',
    name: 'Premine',
    tokenAddress: '0x30765406d51091ed78ff13c107731daf3be5ef16',
    tokenDecimals: 18,
    exchangeAddress: '0x0182865fa09594e4b27496889cbf0bbc818813c6'
  },
  {
    symbol: 'ADS',
    name: 'ADSCASH',
    tokenAddress: '0xec7954f452a6473c21c4078501f0bcf8b266bc99',
    tokenDecimals: 2,
    exchangeAddress: '0x528dd20d7e58e32d33b2e7f2684ce792dfeb44c5'
  },
  {
    symbol: 'BTK',
    name: 'BitcoinToken',
    tokenAddress: '0xdb8646f5b487b5dd979fac618350e85018f557d4',
    tokenDecimals: 18,
    exchangeAddress: '0x85810ea52373a8c5184ea8bf2b3231587fa9ff04'
  },
  {
    symbol: ' OMG',
    name: 'OmiseGO',
    tokenAddress: '0x2392f6abf07b5fce14603d0e28fc952205b8703d',
    tokenDecimals: 0,
    exchangeAddress: '0xb24803f59d661e0b3220aa06ab4a06d9482c9ac4'
  },
  {
    symbol: 'HUG',
    name: 'HungaryGold',
    tokenAddress: '0x858b1f24940e64e08b6941946a29aa352f218ae6',
    tokenDecimals: 2,
    exchangeAddress: '0x768be41feb0216a8e2a8daa30567fc3e40226cbe'
  },
  {
    symbol: 'ACC',
    name: 'Accelerator',
    tokenAddress: '0x13f1b7fdfbe1fc66676d56483e21b1ecb40b58e2',
    tokenDecimals: 18,
    exchangeAddress: '0xe9025d3da6b90cef5b7b695f45ace93bff76e937'
  },
  {
    symbol: 'HRD',
    name: 'Hoard Token',
    tokenAddress: '0xc617d51e3a1f621da8ae67b2f652d6ac02eb8d95',
    tokenDecimals: 18,
    exchangeAddress: '0x303f47c87b66f53ad06f19a3e3d1764437ac43d6'
  },
  {
    symbol: 'ZUR-D',
    name: 'Zur Drafts by Zurcoin Core',
    tokenAddress: '0x3a4b527dcd618ccea50adb32b3369117e5442a2f',
    tokenDecimals: 0,
    exchangeAddress: '0xddd27201dc2f4a3a0afdcff8a807daf0b84c5dc9'
  },
  {
    symbol: 'HCM',
    name: 'Hcmcoin',
    tokenAddress: '0x6126747b7d21c5860cbffbb7654fbc8d3e63a2bb',
    tokenDecimals: 18,
    exchangeAddress: '0x9ee0f1ae7ef59327b7618c1e07f3c2f903d9f2f9'
  },
  {
    symbol: 'CNY',
    name: 'cnycoin',
    tokenAddress: '0x70da15db5377ac51131c2fd0ade87ec543ca9482',
    tokenDecimals: 18,
    exchangeAddress: '0xb682483ec02fe64f0bcbbfd1cbfa9c480aaa30c3'
  },
  {
    symbol: 'ELITE',
    name: 'Ethereum Lite',
    tokenAddress: '0x0a76aad21948ea1ef447d26dee91a54370e151e0',
    tokenDecimals: 18,
    exchangeAddress: '0x5301a674fdaf0020c9e737b01129a7889c5ff523'
  },
  {
    symbol: 'HAND',
    name: 'ShowHand',
    tokenAddress: '0x48c1b2f3efa85fbafb2ab951bf4ba860a08cdbb7',
    tokenDecimals: 0,
    exchangeAddress: '0xe20bda8c541bda6467d9034319e620e33b969d28'
  },
  {
    symbol: 'DHU',
    name: 'DollarHungary',
    tokenAddress: '0x6773770653c9995f602aa0058349b9b68962db96',
    tokenDecimals: 2,
    exchangeAddress: '0x1f068f775aa7b4b7a5f388e6ce04615492343175'
  },
  {
    symbol: 'LNX',
    name: 'Lunox',
    tokenAddress: '0x72e646b78a2b58cbd9b0282c2e9c812bc8033293',
    tokenDecimals: 18,
    exchangeAddress: '0x1d78ea3bbed15d226dabb9419942aec69c756c8b'
  },
  {
    symbol: 'SUC',
    name: 'sucoin',
    tokenAddress: '0xb8d2d65d4d65124690f8eab76bea5d27cae5cc98',
    tokenDecimals: 18,
    exchangeAddress: '0x1535758f55d879a00774fb27617edc4b968306be'
  },
  {
    symbol: 'XBR',
    name: 'BIT DINERO',
    tokenAddress: '0x86ad632c36425f0e0af2fcd6f55c160e10c04b26',
    tokenDecimals: 18,
    exchangeAddress: '0xce67eb9f9f097afca846483082bdd5ff5f85de6d'
  },
  {
    symbol: 'RLX',
    name: 'Relex',
    tokenAddress: '0x4a42d2c580f83dce404acad18dab26db11a1750e',
    tokenDecimals: 18,
    exchangeAddress: '0x9f8db6f625555230f549a9b1e2e314e0a3aaf68a'
  },
  {
    symbol: 'FEX',
    name: 'Felix',
    tokenAddress: '0xfc664cd8dffdd8fb4d1644e179400d386ca568eb',
    tokenDecimals: 8,
    exchangeAddress: '0xbe2360f4b16c33f11203d982bddb47f1b9197fea'
  },
  {
    symbol: 'FIXED',
    name: 'Example Fixed Supply Token',
    tokenAddress: '0x0b403f3f213e75cd25b700093df79a95d2013357',
    tokenDecimals: 18,
    exchangeAddress: '0x81742f8d52cb86f9223ee6e579a15e104775346b'
  },
  {
    symbol: 'EOS',
    name: '',
    tokenAddress: '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0',
    tokenDecimals: 18,
    exchangeAddress: '0x8cf1b131c8a110458750dfcbb8f0e165d4d024ef'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x9ee0f1ae7ef59327b7618c1e07f3c2f903d9f2f9',
    tokenDecimals: 18,
    exchangeAddress: '0x21e5133635d0e821a031e3d80b1a3da39c898f3a'
  },
  {
    symbol: 'ZEON',
    name: 'ZEON',
    tokenAddress: '0xe5b826ca2ca02f09c1725e9bd98d9a8874c30532',
    tokenDecimals: 18,
    exchangeAddress: '0x125c074a1d2060cf4ff5632fa0b3edd55918051a'
  },
  {
    symbol: 'FXC',
    name: 'Flexacoin',
    tokenAddress: '0x4a57e687b9126435a9b19e4a802113e266adebde',
    tokenDecimals: 18,
    exchangeAddress: '0xb878876e0627e362fd3d1afeebdf0bd69bba1911'
  },
  {
    symbol: 'VELS',
    name: 'Velareum',
    tokenAddress: '0x30e39d0a38db74ac783f42c13dde1ea06e858992',
    tokenDecimals: 2,
    exchangeAddress: '0x3c37e7c25dc158d7848fbd1c74578d9ad10ef91d'
  },
  {
    symbol: 'FCT',
    name: 'Fibonum Cycling Token',
    tokenAddress: '0x3b820a1e03025d0fe6bc211b2550626b68a3b27c',
    tokenDecimals: 18,
    exchangeAddress: '0x0dbec05cc338244359febf0d9d9c85fc19f6f2db'
  },
  {
    symbol: 'ZCO',
    name: 'Zebi Coin',
    tokenAddress: '0x2008e3057bd734e10ad13c9eae45ff132abc1722',
    tokenDecimals: 8,
    exchangeAddress: '0x30cfcb60496aea8bada3be97e8ca3f71560bf4ef'
  },
  {
    symbol: 'BZN',
    name: 'Benzene',
    tokenAddress: '0x1bd223e638aeb3a943b8f617335e04f3e6b6fffa',
    tokenDecimals: 18,
    exchangeAddress: '0xb28d4a770328e7a6ede7fc51d10f977ba755774e'
  },
  {
    symbol: 'cZRX',
    name: 'Compound 0x',
    tokenAddress: '0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407',
    tokenDecimals: 8,
    exchangeAddress: '0x4e700f99bcecc5bad8e6a92ffc6354dda68cbc35'
  },
  {
    symbol: 'KOI',
    name: 'KOI',
    tokenAddress: '0x0be34c15f069663ff05ef5ea1e99ab3dd2d0fdce',
    tokenDecimals: 8,
    exchangeAddress: '0x87e8497a5d3ff985adf13b87992d473b9294970a'
  },
  {
    symbol: 'TBOMB',
    name: 'TBOMB',
    tokenAddress: '0x583a9c440893ed5d563e68a60b12f1cc323d4862',
    tokenDecimals: 0,
    exchangeAddress: '0x79ecb46aa1adbe366824051642aa6de38525e48f'
  },
  {
    symbol: 'FUTC1',
    name: 'Futereum Centurian 1',
    tokenAddress: '0xf880d3c6dcda42a7b2f6640703c5748557865b35',
    tokenDecimals: 0,
    exchangeAddress: '0xa2368e017f3e040228fc5666cef4fc0e29f38af1'
  },
  {
    symbol: 'FREE',
    name: 'Free Coin',
    tokenAddress: '0x2f141ce366a2462f02cea3d12cf93e4dca49e4fd',
    tokenDecimals: 18,
    exchangeAddress: '0x17f11fca7a66e8049484ae0a74e0013c5719ec77'
  },
  {
    symbol: 'AVVP',
    name: 'Andrey Voronkov Ventures Promo',
    tokenAddress: '0x783ba0062326861ee76e0e15429594922e9fe2f5',
    tokenDecimals: 18,
    exchangeAddress: '0xc70586daa52d4fbc4db2b20acaf7e1521f0c5854'
  },
  {
    symbol: 'AVVP',
    name: 'Andrey Voronkov Ventures Promo',
    tokenAddress: '0xb0cf07e9a74f214ec799a32fff225ddbc8d04ec8',
    tokenDecimals: 18,
    exchangeAddress: '0x24aae710b58dca6fc2bd18489a5503b2ecc2a094'
  },
  {
    symbol: 'HYDRO',
    name: 'Hydro',
    tokenAddress: '0xebbdf302c940c6bfd49c6b165f457fdb324649bc',
    tokenDecimals: 18,
    exchangeAddress: '0xda28e640d58b4035bf60ba5900cb9a7c6618ec2a'
  },
  {
    symbol: 'WCW',
    name: 'Wrapped CheezeWizards',
    tokenAddress: '0x0ac19d0617af7f95f154ae2cdfaa6f2c9dcec8f3',
    tokenDecimals: 18,
    exchangeAddress: '0xe5c8509b84eb5789e66bdce57927357902212c7a'
  },
  {
    symbol: 'VXV',
    name: 'VectorspaceAI',
    tokenAddress: '0x7d29a64504629172a429e64183d6673b9dacbfce',
    tokenDecimals: 18,
    exchangeAddress: '0x7b9b5084aff35d3e9d87fb1e384853b806120bed'
  },
  {
    symbol: 'HATE',
    name: 'HATE',
    tokenAddress: '0xc2733c372a6cf303551073930799282fefe2b67a',
    tokenDecimals: 0,
    exchangeAddress: '0x9ebedf666dd5bfa7c3016eb2086e349421f994bb'
  },
  {
    symbol: 'DMHCO',
    name: 'DMHCO',
    tokenAddress: '0x5c679a0a79d495affe049c02483519d51e37f32b',
    tokenDecimals: 18,
    exchangeAddress: '0x8138e39124c65d7fe6874b2f5c47d5fad2581060'
  },
  {
    symbol: 'RUSH',
    name: 'HashRush',
    tokenAddress: '0xcfcd43d7ee21416a71c2eb9888587d52716fc77a',
    tokenDecimals: 8,
    exchangeAddress: '0x0114a3b4e4fa4cf9721bd38ad40474e22ea72a16'
  },
  {
    symbol: 'CYFM',
    name: 'CYBERFM',
    tokenAddress: '0x3f06b5d78406cd97bdf10f5c420b241d32759c80',
    tokenDecimals: 18,
    exchangeAddress: '0xbcd5a12038e57f9f2a1c38199663730cc9d7043b'
  },
  {
    symbol: 'ETHPLO',
    name: 'ETHplode',
    tokenAddress: '0xe0c6ce3e73029f201e5c0bedb97f67572a93711c',
    tokenDecimals: 6,
    exchangeAddress: '0x59af19879e9dcd298b9f1ad2b1ee5f5f7ed2d332'
  },
  {
    symbol: 'TKG',
    name: 'TokenGo',
    tokenAddress: '0x48b4a529915d8f19452248c3d2f825786f6c8d2a',
    tokenDecimals: 18,
    exchangeAddress: '0xda6311e9666fa1cf6f5436046a093297840cc21b'
  },
  {
    symbol: 'AMB',
    name: 'Ambitious',
    tokenAddress: '0xcd45962fcd817e8fea6bbe1a4bebdff1bedff232',
    tokenDecimals: 18,
    exchangeAddress: '0xc1bc313c8c6eab4316af2c4c7a3820744edc6188'
  },
  {
    symbol: 'ZBUX',
    name: 'Zuck Bucks',
    tokenAddress: '0x7090a6e22c838469c9e67851d6489ba9c933a43f',
    tokenDecimals: 0,
    exchangeAddress: '0xc2a27366deb7530bd7f812c69d48b0215e397771'
  },
  {
    symbol: 'BEFX',
    name: 'Belifex',
    tokenAddress: '0xb91c2a2b953d72f3ef890490669a0a41b0add5f7',
    tokenDecimals: 8,
    exchangeAddress: '0x9cc45bed4ce6fc354c7cfa8ccf1f28fa7c581a12'
  },
  {
    symbol: 'TECH',
    name: 'FTI NEWS Token',
    tokenAddress: '0xa1ba7186eec1be5114b0cf49b95b23adc4131b51',
    tokenDecimals: 10,
    exchangeAddress: '0x05ddab88b4d6fea1a3a92d8fccc6e594d5aa98f8'
  },
  {
    symbol: 'ETX',
    name: 'Etherneum',
    tokenAddress: '0xb33a7597d65f8d823b71fc6e3b6a5039298ffd23',
    tokenDecimals: 18,
    exchangeAddress: '0x7c77de084425871781eb5f36f25ee0ecf8561b8a'
  },
  {
    symbol: 'TAO',
    name: 'TAOCOIN',
    tokenAddress: '0x155454dd1a347ac93c3a0083871bb8498e50df74',
    tokenDecimals: 8,
    exchangeAddress: '0x4fd9f6bc7fe5f1c105a1f37a07d720d81d22f58a'
  },
  {
    symbol: 'FLYTO',
    name: 'Flyto',
    tokenAddress: '0x313c068f339c6a1fbf7be5a9504b506f728dbc9d',
    tokenDecimals: 18,
    exchangeAddress: '0x656d1150e7872aa23b49c35f96d6fd949d8d44bc'
  },
  {
    symbol: 'sAUD',
    name: 'Synth sAUD',
    tokenAddress: '0xed4699f180a14b5974c26f494483f9c327fd381a',
    tokenDecimals: 18,
    exchangeAddress: '0x972dce6be5f8b03893587f2e51b68f9fb281fc1e'
  },
  {
    symbol: 'SVC',
    name: 'Sport Value Coin',
    tokenAddress: '0x11263b92661fa1fa96800139c9d6b510953a35eb',
    tokenDecimals: 18,
    exchangeAddress: '0xd968eda9303509a529e77a59226f26b99a40a63f'
  },
  {
    symbol: 'FUTB1',
    name: 'Futereum BTC 1',
    tokenAddress: '0x30c6fe3ac0260a855c90cab79aa33e76091d4904',
    tokenDecimals: 18,
    exchangeAddress: '0x541b0a0088d82f19309758454d3a147636fa7dec'
  },
  {
    symbol: 'FUTM1',
    name: 'Futereum Markets 1',
    tokenAddress: '0xee418a19d6620aa478489032c2cb63464dd3e690',
    tokenDecimals: 18,
    exchangeAddress: '0x54ac92df89d04a851163dd63b6b404844cf1caf3'
  },
  {
    symbol: 'GA',
    name: 'Generic Altcoin',
    tokenAddress: '0xb19aae54d4ee672348d749e98cf90c584ef1b1ba',
    tokenDecimals: 18,
    exchangeAddress: '0x0a49bcd767dfee1823b87758fe537a80c2626c18'
  },
  {
    symbol: 'GA',
    name: 'Generic Altcoin',
    tokenAddress: '0x4c858151a41ea6f258e904ef4e2d3c310639cced',
    tokenDecimals: 18,
    exchangeAddress: '0x72a644cac9da1fd09925eaad5d92414e3f91c0ee'
  },
  {
    symbol: 'GA',
    name: 'Generic Altcoin',
    tokenAddress: '0xd982e7d6ebda6102cf2ca8428a4c44c28f2c490a',
    tokenDecimals: 18,
    exchangeAddress: '0x14ad6e9ddaf5cd668acb6ad0ab149ee248f9d712'
  },
  {
    symbol: 'GA',
    name: 'Generic Altcoin',
    tokenAddress: '0x73f46f17b1a9712262dc3410b37eae4233f36ff9',
    tokenDecimals: 18,
    exchangeAddress: '0xf8c5d69311d80d633b5caa147965caa2e576e6d1'
  },
  {
    symbol: 'GA',
    name: 'Generic Altcoin',
    tokenAddress: '0xd72172f90d5436b9abb3fbcf818d7e05fa1fc189',
    tokenDecimals: 18,
    exchangeAddress: '0xb3dca00babb56c28fb48bea9fdcd12c4bd1bbbb0'
  },
  {
    symbol: 'GA',
    name: 'Generic Altcoin',
    tokenAddress: '0x32c62c965db5fdac0f94e6276d6884070068d4be',
    tokenDecimals: 18,
    exchangeAddress: '0xf15bf23ae81e2ddd7a0e7995b4ab42d2903c9da3'
  },
  {
    symbol: 'BURN',
    name: 'The Burn Token',
    tokenAddress: '0x4f7c5bd3f7d62a9c984e265d73a86f5515f3e92b',
    tokenDecimals: 0,
    exchangeAddress: '0x2f5b009d42917452f4f057b0998dfad4d84c7662'
  },
  {
    symbol: 'VOID',
    name: 'Void Token',
    tokenAddress: '0xb8796542765747ed7f921ff12faff057b5d624d7',
    tokenDecimals: 18,
    exchangeAddress: '0xe8878ddc1e72fb4d14a1ca57fa17a247ca53aec1'
  },
  {
    symbol: 'NEWB',
    name: 'Newb',
    tokenAddress: '0x5a63eb358a751b76e58325eadd86c2473fc40e87',
    tokenDecimals: 18,
    exchangeAddress: '0x382f41a91a049c0e82265d0afa74c92a8bcc160a'
  },
  {
    symbol: 'RNDR',
    name: 'Render Token',
    tokenAddress: '0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24',
    tokenDecimals: 18,
    exchangeAddress: '0xa117ffe7d3a756f665ef2e95bb770ab20008641a'
  },
  {
    symbol: 'VLTR',
    name: 'VULTUR',
    tokenAddress: '0x657ffc4fb2c4625adbb3452556f7a482b76e5011',
    tokenDecimals: 2,
    exchangeAddress: '0x804682061c0f8c4025c268471a907dce11539187'
  },
  {
    symbol: 'OGO',
    name: 'Origo',
    tokenAddress: '0xff0e5e014cf97e0615cb50f6f39da6388e2fae6e',
    tokenDecimals: 18,
    exchangeAddress: '0xc1a08ea89e5d550d22471159c995d2acaa6e43d0'
  },
  {
    symbol: 'NPTX',
    name: 'NPT',
    tokenAddress: '0x1e00a1bc70de783963c5c9b28b5162aaca7570a2',
    tokenDecimals: 6,
    exchangeAddress: '0x08c11f9c436072f45bb57e4a163989e88e05c883'
  },
  {
    symbol: 'PRIX',
    name: 'Privatix',
    tokenAddress: '0x3adfc4999f77d04c8341bac5f3a76f58dff5b37a',
    tokenDecimals: 8,
    exchangeAddress: '0x7c4ee2b53ea4a7893b2794ba5fcc305ef426be0f'
  },
  {
    symbol: 'FIRE',
    name: 'Fire Token',
    tokenAddress: '0x125f9d5daa039bdb79d36baff667e9e0bbcea998',
    tokenDecimals: 18,
    exchangeAddress: '0xb33122fcded005785c40c18c6871ba15dad4fdcc'
  },
  {
    symbol: 'VIDT',
    name: 'V-ID Token',
    tokenAddress: '0x445f51299ef3307dbd75036dd896565f5b4bf7a5',
    tokenDecimals: 18,
    exchangeAddress: '0x0cfa80b92a082c680e109d66a29c54fb179d21d0'
  },
  {
    symbol: 'CYS',
    name: 'Cycloshield Coin',
    tokenAddress: '0x8c53931237b6360345b01f1cfa27f7b10f89be78',
    tokenDecimals: 18,
    exchangeAddress: '0x14e7b9e818604ab55e8af1e2877fdec2b397b14d'
  },
  {
    symbol: 'DADI',
    name: 'DADI',
    tokenAddress: '0xfb2f26f266fb2805a387230f2aa0a331b4d96fba',
    tokenDecimals: 18,
    exchangeAddress: '0xed06fe62f03b35c7582c9b63b1927eafbcb42a01'
  },
  {
    symbol: 'EVN',
    name: 'Envion',
    tokenAddress: '0xd780ae2bf04cd96e577d3d014762f831d97129d0',
    tokenDecimals: 18,
    exchangeAddress: '0x55fff16e7ac0fe75b2a9598b5685531e27853df1'
  },
  {
    symbol: 'REMCO',
    name: 'Remittance Token',
    tokenAddress: '0xbbc3a290c7d2755b48681c87f25f9d7f480ad42f',
    tokenDecimals: 8,
    exchangeAddress: '0x06bca45ddf2ff3f1155f556cec95c8db86ab8167'
  },
  {
    symbol: 'KHC',
    name: 'KaiHua Coin',
    tokenAddress: '0x6881e457e6b0f14bb48537ae0809c8c016a43c2a',
    tokenDecimals: 3,
    exchangeAddress: '0x79d85477c2565ed9095bf7837fdcad830e9b3c4f'
  },
  {
    symbol: 'CLM',
    name: 'Claymore',
    tokenAddress: '0x0ed8343dfdee32e38b4c4ce15a3b00a59e90f3db',
    tokenDecimals: 18,
    exchangeAddress: '0x2433bd130055dc9df537d431908fbf64782df2f6'
  },
  {
    symbol: 'PHT',
    name: 'PhotochainToken',
    tokenAddress: '0x88652845a5495983b70aebbf25102361552d5e54',
    tokenDecimals: 18,
    exchangeAddress: '0x213988470530c2c098e6f22f15437930cdbcca26'
  },
  {
    symbol: 'COS',
    name: 'COS',
    tokenAddress: '0x7d3cb11f8c13730c24d01826d8f2005f0e1b348f',
    tokenDecimals: 18,
    exchangeAddress: '0x7f9a00bb057424b9b1382591cfb8761d9b08a434'
  },
  {
    symbol: 'INC8',
    name: 'Incinerate Token',
    tokenAddress: '0x072ccd6247e88114590d08d6a80b7a609473c17e',
    tokenDecimals: 2,
    exchangeAddress: '0xda6cb34c6f28e5282db47c0d8f40cdfd776fa004'
  },
  {
    symbol: 'FRECNX',
    name: 'FreldoCoinX',
    tokenAddress: '0xd8b8e1eca89da014e67fdbc2014eaa8e171079bf',
    tokenDecimals: 18,
    exchangeAddress: '0x4aa12c2fb57060c51402af93a1d6f3803f05d453'
  },
  {
    symbol: 'FUTR',
    name: 'Futereum Token',
    tokenAddress: '0xc83355ef25a104938275b46cffd94bf9917d0691',
    tokenDecimals: 18,
    exchangeAddress: '0x12718364abaa8c9947d6009494e15dd8472438f6'
  },
  {
    symbol: 'JIBRA',
    name: 'JIBRAPAY',
    tokenAddress: '0x3d917b9a3cee461870149b4b28556e4e2d112c13',
    tokenDecimals: 18,
    exchangeAddress: '0x833b576ea7c2ff166ad7c624f8d4b14fb371aa30'
  },
  {
    symbol: 'AMPL',
    name: 'Ampleforth',
    tokenAddress: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
    tokenDecimals: 9,
    exchangeAddress: '0x042dbbdc27f75d277c3d99efe327db21bc4fde75'
  },
  {
    symbol: 'CER',
    name: 'Cereneum',
    tokenAddress: '0xd9d4a7ca154fe137c808f7eedbe24b639b7af5a6',
    tokenDecimals: 8,
    exchangeAddress: '0xa00d014e48dadea7879d7142bf5bac5207c8ff29'
  },
  {
    symbol: 'DGT',
    name: 'Dogetoken',
    tokenAddress: '0x8b9c35c79af5319c70dd9a3e3850f368822ed64e',
    tokenDecimals: 18,
    exchangeAddress: '0x180b93d88e19bff7abde971408716131ed7e2186'
  },
  {
    symbol: 'CHU',
    name: 'CentHungary',
    tokenAddress: '0x3d9a801720cdbce293edbc7d8dcd82d6ceaabbd3',
    tokenDecimals: 2,
    exchangeAddress: '0xd6c8e96d3cdebabea1a339a34a7e0c76975a504c'
  },
  {
    symbol: 'EOST',
    name: 'EOS TRUST',
    tokenAddress: '0x87210f1d3422ba75b6c40c63c78d79324dabcd55',
    tokenDecimals: 18,
    exchangeAddress: '0x25daa8ef739c741fc136162bf183b58dd249b4f7'
  },
  {
    symbol: 'GOLD',
    name: 'Dragonereum Gold',
    tokenAddress: '0x150b0b96933b75ce27af8b92441f8fb683bf9739',
    tokenDecimals: 18,
    exchangeAddress: '0x7b1c3192efa401ea37951fedc8007bcbec2dbb6d'
  },
  {
    symbol: 'MMR',
    name: 'Make Me Rich Token',
    tokenAddress: '0xfe34099b8a1eb4cac66168f46014340ba425fa8f',
    tokenDecimals: 18,
    exchangeAddress: '0x7ff5079450e672f72801bf82899da5a3b6d464a5'
  },
  {
    symbol: 'AAA',
    name: 'Tripple A',
    tokenAddress: '0x22ac30b3afecbbf1cb69bc697bef0bd3e5bec349',
    tokenDecimals: 18,
    exchangeAddress: '0x42ad257cab68d8c4ed11ed1abdd89713b4fc86db'
  },
  {
    symbol: 'SGM',
    name: 'Sgame Token',
    tokenAddress: '0x72b509b59bbfe847a1d68eae96161adff8675064',
    tokenDecimals: 18,
    exchangeAddress: '0x3eb5c28b84041dd801fc1208a60c8dab63737acc'
  },
  {
    symbol: 'BLO',
    name: 'BLONDCOIN',
    tokenAddress: '0x1c3bb10de15c31d5dbe48fbb7b87735d1b7d8c32',
    tokenDecimals: 18,
    exchangeAddress: '0x950cebfa171428216af64867deb6d13f3a27c54a'
  },
  {
    symbol: 'SUSU',
    name: 'Winsusu Token',
    tokenAddress: '0x7e1d8a8b01374ab1aa26b40e7c6733e6c168568a',
    tokenDecimals: 18,
    exchangeAddress: '0x0a2a5291039c3d9c92fcd892063c25ec0fd240b7'
  },
  {
    symbol: 'WMC',
    name: 'Wrapped MarbleCards',
    tokenAddress: '0x8aedb297fed4b6884b808ee61faf0837713670d0',
    tokenDecimals: 18,
    exchangeAddress: '0xa0db39d28dacec1974f2a1f6bac7d33f37c102ec'
  },
  {
    symbol: 'BAX',
    name: 'BAX',
    tokenAddress: '0x9a0242b7a33dacbe40edb927834f96eb39f8fbcb',
    tokenDecimals: 18,
    exchangeAddress: '0x7a43ce3ef79ad8b7adf23f4c1bdd0446fd7e4d76'
  },
  {
    symbol: 'REDGIL',
    name: 'REDGIL',
    tokenAddress: '0x5457d6324e77de6823c5341b6703cded16422829',
    tokenDecimals: 18,
    exchangeAddress: '0x7d365fa74360a0740d06552e90c7f320097a0fb3'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x4ff7fa493559c40abd6d157a0bfc35df68d8d0ac',
    tokenDecimals: 18,
    exchangeAddress: '0x639977a3a318ecdde675f53a77fbe51716b16bfe'
  },
  {
    symbol: 'FUZE',
    name: 'FUZE Token',
    tokenAddress: '0x187d1018e8ef879be4194d6ed7590987463ead85',
    tokenDecimals: 18,
    exchangeAddress: '0x520e5f50adc6775723e93da5c81c0b075be28dab'
  },
  {
    symbol: 'XENM',
    name: 'Xenium',
    tokenAddress: '0xd69834f67b2f5a760617cc9a9bf5ae3a3bb256c2',
    tokenDecimals: 18,
    exchangeAddress: '0x78eff350b7378e913d3dbc71ae5a3c179b7d70d2'
  },
  {
    symbol: 'FLXA',
    name: 'FLUXCOIN-A',
    tokenAddress: '0x2a4f61ca0e03e260e6be91692e430293d73998f0',
    tokenDecimals: 10,
    exchangeAddress: '0x10dbe7aaedb8d291f4f4da10cbc85c11ca740200'
  },
  {
    symbol: 'TYPE',
    name: 'Typerium',
    tokenAddress: '0xeaf61fc150cd5c3bea75744e830d916e60ea5a9f',
    tokenDecimals: 4,
    exchangeAddress: '0x48d5425c9ed8bf062ea123ac568b42bf8bc02261'
  },
  {
    symbol: 'IDXM',
    name: 'IDEX Membership',
    tokenAddress: '0xcc13fc627effd6e35d2d2706ea3c4d7396c610ea',
    tokenDecimals: 8,
    exchangeAddress: '0xed1af8c036fcaebc5be8fcbf4a85d08f67ce5fa1'
  },
  {
    symbol: 'KEY',
    name: 'SelfKey',
    tokenAddress: '0x4cc19356f2d37338b9802aa8e8fc58b0373296e7',
    tokenDecimals: 18,
    exchangeAddress: '0x4f27a38f33f668ea91fa34ef29d8ff7b444d6327'
  },
  {
    symbol: 'CRED',
    name: 'Verify Token',
    tokenAddress: '0x672a1ad4f667fb18a333af13667aa0af1f5b5bdd',
    tokenDecimals: 18,
    exchangeAddress: '0xb490fb04a938bae28b0d77c3d86faf47c1751485'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0x2dea20405c52fb477ecca8fe622661d316ac5400',
    tokenDecimals: 18,
    exchangeAddress: '0x9faa0cb10912de7ad1d86705c65de291a9088a61'
  },
  {
    symbol: 'AF',
    name: 'Alex',
    tokenAddress: '0xf76d54904e4679f1e583bb0f07a8c58cae1dcf3e',
    tokenDecimals: 18,
    exchangeAddress: '0x6487856187287a660797ed73504e1497d041dc5f'
  },
  {
    symbol: 'XNN',
    name: 'XENON',
    tokenAddress: '0xab95e915c123fded5bdfb6325e35ef5515f1ea69',
    tokenDecimals: 18,
    exchangeAddress: '0x176b6cb18ac2c6d2661826c2883028b63d8f2811'
  },
  {
    symbol: 'CAT',
    name: 'BitClave',
    tokenAddress: '0x1234567461d3f8db7496581774bd869c83d51c93',
    tokenDecimals: 18,
    exchangeAddress: '0xa86d1180a63834dac06ba67ddb777565a80a05ef'
  },
  {
    symbol: 'MKT',
    name: 'MARKET Protocol Token',
    tokenAddress: '0xba23485a04b897c957918fde2dabd4867838140b',
    tokenDecimals: 18,
    exchangeAddress: '0x7d6fa7b0a7dec3c0758f0b57bb446f4cee70d330'
  },
  {
    symbol: 'XCT',
    name: 'xCrypt Token',
    tokenAddress: '0xd2bb16cf38ca086cab5128d5c25de9477ebd596b',
    tokenDecimals: 18,
    exchangeAddress: '0xe5a98448badcc298790485f536914d067417140b'
  },
  {
    symbol: 'LST',
    name: 'Lendroid Support Token',
    tokenAddress: '0x4de2573e27e648607b50e1cfff921a33e4a34405',
    tokenDecimals: 18,
    exchangeAddress: '0x98bdf4e7575319bcd5878c1c7c49a4af618b24cf'
  },
  {
    symbol: 'QAS',
    name: 'Quantitative Analysis System Token',
    tokenAddress: '0xc4b81d8381e02922c9eac0a4ea45977118080f74',
    tokenDecimals: 8,
    exchangeAddress: '0xbd2da2791bd74902a447a09d991c5372c5ad74bb'
  },
  {
    symbol: 'GRC',
    name: 'GROCERYCOIN',
    tokenAddress: '0x5adfaf1b9ccdd15321b7838d8ddf113ce471c3e8',
    tokenDecimals: 18,
    exchangeAddress: '0x41bdb6667ef5669fbc4eb7c826a4763a4545b58f'
  },
  {
    symbol: 'INE',
    name: 'IntelliShare Token',
    tokenAddress: '0x86e6a4f512b1290c043970b04e0b570d4fc98291',
    tokenDecimals: 18,
    exchangeAddress: '0x5840bce111a41b90067dc2d4df423805edad9cce'
  },
  {
    symbol: 'SOUND',
    name: 'Soundly',
    tokenAddress: '0x87e0e17f8edefc42cb3baf1f666f0154ddde76f9',
    tokenDecimals: 18,
    exchangeAddress: '0x86ac46334e5e7b8e4edbab80d23f50c5f76dd97f'
  },
  {
    symbol: 'HAK',
    name: 'Shaka',
    tokenAddress: '0x93a7174dafd31d13400cd9fa01f4e5b5baa00d39',
    tokenDecimals: 18,
    exchangeAddress: '0xa56325c4fdf7ff2d7f7055180f52d898319b118f'
  },
  {
    symbol: 'KAYA',
    name: 'LATTICE80 KAYA TOKEN',
    tokenAddress: '0xfd66c6771d00b5646949086152b7ccdca25e5686',
    tokenDecimals: 18,
    exchangeAddress: '0x5f96dd7c87b3e7a7874cdf20b49ebbe4356b34f9'
  },
  {
    symbol: 'KFC',
    name: 'Kung Fu Coin',
    tokenAddress: '0xfb918f8ab041ff4e2c6d70dba716915865d1bb71',
    tokenDecimals: 18,
    exchangeAddress: '0xe6e60b1c5b3b956e4a55d617e5df34515dd0aab8'
  },
  {
    symbol: '0xBCH',
    name: '0xBitcoinCash',
    tokenAddress: '0xe5b9746dfcc2ef1054d47a451a77bb5f390c468d',
    tokenDecimals: 8,
    exchangeAddress: '0xf91b57cd1faed8b9210d0439106dfd7c50787c16'
  },
  {
    symbol: 'SHOCK',
    name: 'AfterShock',
    tokenAddress: '0x11ded8addda881f700fbda2fe2030656289322a3',
    tokenDecimals: 18,
    exchangeAddress: '0xd52e70dbb7a4a192bbc82685c8beb8d87266f6d4'
  },
  {
    symbol: 'TESTUNDT',
    name: 'TESTUNDT_V1',
    tokenAddress: '0xfa90479a1e17a7a2079c96d9ceb6879e465e24de',
    tokenDecimals: 18,
    exchangeAddress: '0x364eba64744b7835d8b4afb1411c0d3092003b47'
  },
  {
    symbol: 'SMARC',
    name: 'SmarcToken',
    tokenAddress: '0x5ae655088e79fa0ced7b472d3bacd215ef796ccc',
    tokenDecimals: 18,
    exchangeAddress: '0xa810da2f8fca6816795662acfeee754aa528a1a5'
  },
  {
    symbol: 'MBDS',
    name: 'MBDS',
    tokenAddress: '0xc5b98b61fb0fe6427c9a88dbecdfced34eb56ef1',
    tokenDecimals: 2,
    exchangeAddress: '0x7981b7a9431d600dcb723cbcab9ffda94cb16463'
  },
  {
    symbol: 'FLIXX',
    name: 'Flixx',
    tokenAddress: '0xf04a8ac553fcedb5ba99a64799155826c136b0be',
    tokenDecimals: 18,
    exchangeAddress: '0x8355123d4e249c7e7f1543c1728855a2b51061ef'
  },
  {
    symbol: 'BRC',
    name: 'BinaryCoin',
    tokenAddress: '0x7501a4f0b6fcf5ab8d682a57e668214edc3d3ea4',
    tokenDecimals: 8,
    exchangeAddress: '0x35d2c153872166048afc6b52f87b193dbc96082c'
  },
  {
    symbol: 'ADT',
    name: 'Air-Drop Token',
    tokenAddress: '0xb1068836933fce8b92a7f65222ea551061308af4',
    tokenDecimals: 18,
    exchangeAddress: '0x5b24c76684c593f8b070de0ba9a5db4df50450ce'
  },
  {
    symbol: 'CTC',
    name: 'CyberTronChain',
    tokenAddress: '0x1cdca6811e2ef23d6099d09d2754211d3c7b5af1',
    tokenDecimals: 18,
    exchangeAddress: '0xf85e83d42644d982b9a770e7d698d9f233c2248c'
  },
  {
    symbol: 'CBC',
    name: 'CORE BUILDINGS',
    tokenAddress: '0x04b550977fc09ffdac3e13d5d490367eb5ce673c',
    tokenDecimals: 8,
    exchangeAddress: '0xe7264eaf580f833a6daa00662a8dffb83da6aff1'
  },
  {
    symbol: 'TRXC',
    name: 'TRONCLASSIC',
    tokenAddress: '0xad5fe5b0b8ec8ff4565204990e4405b2da117d8e',
    tokenDecimals: 0,
    exchangeAddress: '0x722b75eb9a631b0237ee074e8b74818f2d6911bc'
  },
  {
    symbol: 'BTV',
    name: 'Ben Token Ving',
    tokenAddress: '0xf5b15fefa638849294db2a836433eca4f7429f6f',
    tokenDecimals: 4,
    exchangeAddress: '0x3f6d1766dae068cc557a7bd068ebb9c78e345682'
  },
  {
    symbol: 'BLVD',
    name: 'BULVRD',
    tokenAddress: '0x3afe25a2739b5c2e08cfec439f9621d91ff7fbfb',
    tokenDecimals: 18,
    exchangeAddress: '0xccc88a633929b901ad6e3a9aeb9e23aab6ad9e2d'
  },
  {
    symbol: 'WILD',
    name: 'WILD Token',
    tokenAddress: '0xd3c00772b24d997a812249ca637a921e81357701',
    tokenDecimals: 18,
    exchangeAddress: '0xe93b3d464984ae04a1f9a858801a7b0b1e340660'
  },
  {
    symbol: 'FBU',
    name: 'ForintBudapest',
    tokenAddress: '0x2c7d9a0416d00ff65bd851e8fc3badb1607db582',
    tokenDecimals: 2,
    exchangeAddress: '0xdfcf6c4c82d25597927d06e487053398cfb4a784'
  },
  {
    symbol: 'DGYBN',
    name: 'DoggyBuddyCoin',
    tokenAddress: '0xcc050e357141b968742b23e12f0954c57506a204',
    tokenDecimals: 3,
    exchangeAddress: '0x96efc33eaed23e9f276203196d81915557c0a21f'
  },
  {
    symbol: 'GZE',
    name: 'GazeCoin Metaverse Token',
    tokenAddress: '0x4ac00f287f36a6aad655281fe1ca6798c9cb727b',
    tokenDecimals: 18,
    exchangeAddress: '0x6171aa1829c9f9479206658de3b6df4fa48f82c0'
  },
  {
    symbol: 'YAH',
    name: 'JamaiCoin',
    tokenAddress: '0xc2856a8310af421a2a65de16428c2dec6ceacb36',
    tokenDecimals: 18,
    exchangeAddress: '0x3fc90d031eecc364c620166ee7a791a151a16062'
  },
  {
    symbol: 'STAYK',
    name: 'STAYK.ME',
    tokenAddress: '0xa4fb83907ed6ee8fe476cbdb65fe3304a8898157',
    tokenDecimals: 18,
    exchangeAddress: '0x86bceb2f9a063191806b97d6a87ccc615d8f0ad0'
  },
  {
    symbol: 'MOAB',
    name: 'M.O.A.B',
    tokenAddress: '0xd54e2e7281de8e7d220f9173e33241fbfa881968',
    tokenDecimals: 18,
    exchangeAddress: '0x57cbdde774a989267e68565c361593cf7ccc5792'
  },
  {
    symbol: 'CNR',
    name: 'Cinder',
    tokenAddress: '0xce27a2388d2ba7a9995fa0960fb168568e2a7923',
    tokenDecimals: 18,
    exchangeAddress: '0xf3592d3b21027c5aea86f2398c4b049478d4c3df'
  },
  {
    symbol: 'BOR',
    name: 'BitCollar',
    tokenAddress: '0x1a51fabc97bce2743cd9214b6e8d88040ab1c064',
    tokenDecimals: 18,
    exchangeAddress: '0xae55bf087be880ef820be1d7c54ab5422ec3054c'
  },
  {
    symbol: 'FMF',
    name: 'Formosa Financial Token',
    tokenAddress: '0xb4d0fdfc8497aef97d3c2892ae682ee06064a2bc',
    tokenDecimals: 18,
    exchangeAddress: '0x3ee21d6a7feed509daf5f224f1b23f6602c83fc8'
  },
  {
    symbol: 'BTCH',
    name: 'Bitcoin Hash',
    tokenAddress: '0x94bc760c9b000a82d5325cbd59460a8b840effd1',
    tokenDecimals: 8,
    exchangeAddress: '0x7feb263b9ecc5656c2470ae4c972c995918705dc'
  },
  {
    symbol: 'SHIT',
    name: 'Stupendously High Income Taxes',
    tokenAddress: '0x124df05231383b565280c672eea957557bda51b9',
    tokenDecimals: 18,
    exchangeAddress: '0x7badb76b8a253b3c36d529c74b04223a1898a1e5'
  },
  {
    symbol: 'WED',
    name: 'Wednesday Coin',
    tokenAddress: '0x7848ae8f19671dc05966dafbefbbbb0308bdfabd',
    tokenDecimals: 18,
    exchangeAddress: '0xbaaaaa5e09b123602cc8abb454d0bd5b5d726218'
  },
  {
    symbol: 'ETH20SMACO',
    name: 'ETH 20 SMA Crossover Set',
    tokenAddress: '0x9ea463ec4ce9e9e5bc9cfd0187c4ac3a70dd951d',
    tokenDecimals: 18,
    exchangeAddress: '0xff04bf6e6de885b8d5d7fc0450a463c14021f2fd'
  },
  {
    symbol: 'JS',
    name: 'JavaScript',
    tokenAddress: '0x5046e860ff274fb8c66106b0ffb8155849fb0787',
    tokenDecimals: 8,
    exchangeAddress: '0xa1a73676cf4d50db2a5472f270538cba96482cbe'
  },
  {
    symbol: 'IBTC',
    name: 'IBTC',
    tokenAddress: '0x0784dbabb6c6834bddfb7cfee116ba049e5dafab',
    tokenDecimals: 18,
    exchangeAddress: '0x4eac5deb5b3a5c08077fcde5fa3a3a23670d1165'
  },
  {
    symbol: 'CTRT',
    name: 'Cryptrust',
    tokenAddress: '0x8606a8f28e1e2fd50b9074d65c01548b1f040b32',
    tokenDecimals: 8,
    exchangeAddress: '0x25b7b2dc6551c14af780e86582477b78420f86cd'
  },
  {
    symbol: 'PAS',
    name: 'PASSIVE',
    tokenAddress: '0x34453c84b6d18bc285a80e31f6c6395934434e92',
    tokenDecimals: 18,
    exchangeAddress: '0x0f75ec23c26f6d00d8c12d8d6dfe6633adb224ef'
  },
  {
    symbol: 'FTXT',
    name: 'FUTURAX',
    tokenAddress: '0x41875c2332b0877cdfaa699b641402b7d4642c32',
    tokenDecimals: 8,
    exchangeAddress: '0x0506c1034579265cafa9859a0b598613944b96cc'
  },
  {
    symbol: 'SOCKSCLASSIC',
    name: 'Unisocks Classic Edition 0',
    tokenAddress: '0xf7a5a8a95491ec170738434963b649671b563b88',
    tokenDecimals: 18,
    exchangeAddress: '0x92a5333d966d002181ad86d8588bf6e2f9e53436'
  },
  {
    symbol: 'ELET',
    name: 'Elementeum',
    tokenAddress: '0x6c37bf4f042712c978a73e3fd56d1f5738dd7c43',
    tokenDecimals: 18,
    exchangeAddress: '0x56364d9b65961d014e8fd0f900d6924c845f9498'
  },
  {
    symbol: 'googlier',
    name: 'Googlier Token',
    tokenAddress: '0x600ff15d3cf655d1521c86dddb72c511c785b594',
    tokenDecimals: 18,
    exchangeAddress: '0xeb6d09b0c9550f05b81b04e80527f33fd6116186'
  },
  {
    symbol: 'BELL',
    name: 'ChrisBell',
    tokenAddress: '0xf071a4a5086a71af034ae895288da437e2722469',
    tokenDecimals: 2,
    exchangeAddress: '0x6dbfadb29f9c7400b96f71e354657d89649533f4'
  },
  {
    symbol: 'EMPRG',
    name: 'empowr green',
    tokenAddress: '0xf7a6868ad958b724bc486e10bd3ddc8d63aa16c7',
    tokenDecimals: 18,
    exchangeAddress: '0x3db6585d5e78e93d31868b5c69df0d3284ba2b46'
  },
  {
    symbol: 'IPSX',
    name: 'IPSX',
    tokenAddress: '0x001f0aa5da15585e5b2305dbab2bac425ea71007',
    tokenDecimals: 18,
    exchangeAddress: '0x311aa89ef339db0579f612f5edd592d7774a221f'
  },
  {
    symbol: 'GOOGLIER',
    name: 'Googlier Gold',
    tokenAddress: '0x6d01eed438511d9f694758d3b5cf42ee21d382cf',
    tokenDecimals: 18,
    exchangeAddress: '0xa4afbdd162b105f7333825b1ff66b7ebbba72a9c'
  },
  {
    symbol: 'MVC',
    name: 'MaiVangCity',
    tokenAddress: '0xebfc4fa869a6db3cbd6a849b5b656bae4aba68f0',
    tokenDecimals: 0,
    exchangeAddress: '0x2d2c97c7aa2f6a46653a738b1b673061b0564b2e'
  },
  {
    symbol: 'AVJO',
    name: 'Average Joe',
    tokenAddress: '0x875310f70ede3e5f79b20c2ffd9451dfe48b6730',
    tokenDecimals: 2,
    exchangeAddress: '0x870eef07fe03928f8b861d11e3b23046b9e6fb04'
  },
  {
    symbol: 'cWBTC',
    name: 'Compound Wrapped BTC',
    tokenAddress: '0xc11b1268c1a384e55c48c2391d8d480264a3a7f4',
    tokenDecimals: 8,
    exchangeAddress: '0x62e71abd0d8b88c08090a1290fbb9f51b5ffc966'
  },
  {
    symbol: 'GPL',
    name: 'Gold Pressed Latinum',
    tokenAddress: '0xeeddaa78e0b2de769e969bd049c8faff3280df97',
    tokenDecimals: 18,
    exchangeAddress: '0xe39dfa524cde18f1432a96fec570968a16935cf2'
  },
  {
    symbol: 'cREP',
    name: 'Compound Augur',
    tokenAddress: '0x158079ee67fce2f58472a96584a73c7ab9ac95c1',
    tokenDecimals: 8,
    exchangeAddress: '0xdedd454118001a3904b08954ab2af51603182bff'
  },
  {
    symbol: 'cBAT',
    name: 'Compound Basic Attention Token',
    tokenAddress: '0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e',
    tokenDecimals: 8,
    exchangeAddress: '0x03b054ef0cd799848f157e3033fef4c4cc0e39b5'
  },
  {
    symbol: 'IOTX',
    name: 'IoTeX Network',
    tokenAddress: '0x6fb3e0a217407efff7ca062d46c26e5d60a14d69',
    tokenDecimals: 18,
    exchangeAddress: '0x084f002671a5f03d5498b1e5fb15fc0cfee9a470'
  },
  {
    symbol: 'BELLO',
    name: 'BELLO_TOKEN',
    tokenAddress: '0xd378a2a4e37025f87528c7c1a4224b0a18f761eb',
    tokenDecimals: 18,
    exchangeAddress: '0x8dcd2e05015474735ee04cfa0fcecc207dbb42fd'
  },
  {
    symbol: 'TACO',
    name: 'MetaCartel Tacos',
    tokenAddress: '0x36efe52b14e4d0ca4e3bd492488272e1fb2d7e1b',
    tokenDecimals: 18,
    exchangeAddress: '0xd028660f921c3fc2e58d1ee2ef92a1fa71d09cc8'
  },
  {
    symbol: 'BRAP',
    name: 'BRAPPER',
    tokenAddress: '0xa0cca3cf5c64152883f4c947c404e46996593fa7',
    tokenDecimals: 18,
    exchangeAddress: '0x280fe3edc99eb56d5956587e15dacf1a3d4d7390'
  },
  {
    symbol: 'HERO',
    name: 'Hero Origen Token',
    tokenAddress: '0x02585e4a14da274d02df09b222d4606b10a4e940',
    tokenDecimals: 18,
    exchangeAddress: '0xcef238e953938634cb5fd5fb1e7883cc57723288'
  },
  {
    symbol: 'HL',
    name: 'HotLove',
    tokenAddress: '0xdff991af459d05175b3bb766b950afc697b68df0',
    tokenDecimals: 18,
    exchangeAddress: '0xcaa6b9458c1070bf1fe4b3d68b71d8175aa9c20e'
  },
  {
    symbol: 'MRO',
    name: 'Mero Currency',
    tokenAddress: '0x6ff313fb38d53d7a458860b1bf7512f54a03e968',
    tokenDecimals: 18,
    exchangeAddress: '0xfa7c25b15acfb4e45fbc284090ebbb655e20f1c4'
  },
  {
    symbol: 'UOS',
    name: 'Ultra Token',
    tokenAddress: '0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c',
    tokenDecimals: 4,
    exchangeAddress: '0xfade8426c81ba0d84081492277046db735bad433'
  },
  {
    symbol: 'ALP',
    name: 'AlphabetX',
    tokenAddress: '0x11fb25cccc8f25ff993e802f506b530d20e65e12',
    tokenDecimals: 18,
    exchangeAddress: '0xd681c0fddeae5d45b02e75e72431bd26a4efbbeb'
  },
  {
    symbol: 'HDC',
    name: 'Hydrolic',
    tokenAddress: '0x26710d94067b144c2a6970cbbb96a5d08b70ac79',
    tokenDecimals: 18,
    exchangeAddress: '0xeb882a74859c9b6d4f5458076c6509a886e9880b'
  },
  {
    symbol: 'VOD',
    name: 'VoomDex Coin',
    tokenAddress: '0x10307c92c84903dda982151ec01a196517900652',
    tokenDecimals: 18,
    exchangeAddress: '0x515b56619e2b2ec0f8862b8ced417aa1518139db'
  },
  {
    symbol: 'SHEEP',
    name: 'Sheep Coin',
    tokenAddress: '0xc3f1581c94a0c592a99595d2a55ba4b1f3d6e8cc',
    tokenDecimals: 18,
    exchangeAddress: '0xe1b1c8d5236963b607c76fea4b3610f19f4e6d61'
  },
  {
    symbol: 'MRQ',
    name: 'MarsEquity',
    tokenAddress: '0xc651e99f40d908b6a606d54f221b414b5228ff60',
    tokenDecimals: 18,
    exchangeAddress: '0x22f32524a1edf73d192737e869a8881fc95a8c15'
  },
  {
    symbol: 'PRVC',
    name: 'PrivateReserveCoin',
    tokenAddress: '0x780febe2be59cc7e939ffb2fb78797eaf17136c5',
    tokenDecimals: 18,
    exchangeAddress: '0xa2558b1e45dd15d88267504a6853b0049889c850'
  },
  {
    symbol: 'HOWL',
    name: 'HOWL',
    tokenAddress: '0xe755f2fa95e47c5588c3037dd38e1268fa5fcecd',
    tokenDecimals: 18,
    exchangeAddress: '0xf14cfe57427aa29fc957f0454e9a851ad6584d39'
  },
  {
    symbol: 'HYD',
    name: 'Hydra',
    tokenAddress: '0xd233495c48eb0143661ffc8458eafc21b633f97f',
    tokenDecimals: 12,
    exchangeAddress: '0x4f87273fd042f47bf2a8e1f9430efd937182aabd'
  },
  {
    symbol: 'FTH',
    name: 'Fitcash',
    tokenAddress: '0xb414f8ec2d14c64f37b1559cbe43746284514596',
    tokenDecimals: 18,
    exchangeAddress: '0x86394d6dcfa957754eb3b7eb537fa3bb040db22d'
  },
  {
    symbol: 'DOG',
    name: 'DOG: The Anti-Scam Reward Token',
    tokenAddress: '0xeed2b7756e295a9300e53dd049aeb0751899bae3',
    tokenDecimals: 18,
    exchangeAddress: '0xb88ff10ba7c8d572e34bf28a7795558430971600'
  },
  {
    symbol: 'LAIL',
    name: 'lail currency',
    tokenAddress: '0x73d67103ad2bc658632b8a32d40f23001b16a19b',
    tokenDecimals: 6,
    exchangeAddress: '0xf752389480e98f360bdfbd3d30fc3ac0fd240891'
  },
  {
    symbol: 'KMN',
    name: 'Kamun',
    tokenAddress: '0xb18ca875230da1025707fa5abc02bc66ebd6ebd9',
    tokenDecimals: 18,
    exchangeAddress: '0x0a53467ca28b08283e7f7da9fc77b3bea29b2ec5'
  },
  {
    symbol: 'CRNC',
    name: 'CURRENT',
    tokenAddress: '0xc9a1e678c9025f0d4cf129d6de0d80f07d97a36f',
    tokenDecimals: 3,
    exchangeAddress: '0xe012da3c5bb47292fa569a5d5691bb84a4d46dc0'
  },
  {
    symbol: 'YZC',
    name: 'YoozCoin',
    tokenAddress: '0xab71e90c8f38367197bc07fc347df4e012807449',
    tokenDecimals: 18,
    exchangeAddress: '0xb2f0d0e38a219fea5f8cdf4dfbd1cd4389800e36'
  },
  {
    symbol: 'DDG',
    name: 'DD Gold',
    tokenAddress: '0x6999d699a8210d728a9b2c34b4ad89e96ce34df8',
    tokenDecimals: 0,
    exchangeAddress: '0x9a1173a2bac22a4ce30a67b7f66beb64d1b9eb08'
  },
  {
    symbol: 'CCC',
    name: 'Controlled Chaos Coin',
    tokenAddress: '0xb89d6804bef1164c0b76b975cef2907c606b5bbe',
    tokenDecimals: 4,
    exchangeAddress: '0x59ae3464c4a6ac63d2bbece510ed7f4ad9e1bd8a'
  },
  {
    symbol: 'DNR',
    name: 'DENARIO',
    tokenAddress: '0x9f65cfd011233c2193bfeb5088f0e86068b794b0',
    tokenDecimals: 10,
    exchangeAddress: '0xe83d295b48f7785b3d142cf5d47e42aa86f6a0ff'
  },
  {
    symbol: 'REALT',
    name: 'REAL-T',
    tokenAddress: '0x46cc7ec70746f4cbd56ce5fa9bb7d648398eaa5c',
    tokenDecimals: 4,
    exchangeAddress: '0x1935c95bb09d3a298a77ce37c4ba72a51a6a01eb'
  },
  {
    symbol: 'FTX Token',
    name: 'FTT',
    tokenAddress: '0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9',
    tokenDecimals: 18,
    exchangeAddress: '0x10e57b7ffb61ae0c2e21e4ec66d6367d730f0db6'
  },
  {
    symbol: 'DDS',
    name: 'DD Silver',
    tokenAddress: '0x9da4cc37379f48960bf946e6a8329df5c2dc2bc8',
    tokenDecimals: 0,
    exchangeAddress: '0x172a6f585e7c2ce46b36e617a94548e3c629ef28'
  },
  {
    symbol: 'FLX',
    name: 'Flexible',
    tokenAddress: '0xb2aa6fb02df17b61f615d078484a081083df9621',
    tokenDecimals: 18,
    exchangeAddress: '0xf86ee716fc3c2ef7b7dfb87d8b3ee9caece206c5'
  },
  {
    symbol: 'DIV',
    name: 'DivVC',
    tokenAddress: '0x093c09f5919742f1cd0996781fee72842fc517b1',
    tokenDecimals: 18,
    exchangeAddress: '0xb08a6e6109c86d6d6069a80530a77013a9016bed'
  },
  {
    symbol: 'CFT',
    name: 'Coffee Token',
    tokenAddress: '0x5bf2390a68ab7db7d27ae81894c4e22e669af236',
    tokenDecimals: 18,
    exchangeAddress: '0x6b90ee5c85791cf9ae43d38591068acce6a5a116'
  },
  {
    symbol: 'RTC',
    name: 'RTCoin',
    tokenAddress: '0xecc043b92834c1ebde65f2181b59597a6588d616',
    tokenDecimals: 18,
    exchangeAddress: '0x438134340e3a72b672cfa58c6a7a1122817a74c9'
  },
  {
    symbol: 'VND',
    name: 'Đồng Việt Nam',
    tokenAddress: '0xfc69e0771bd474e0575763bcb6b87d279e182fe5',
    tokenDecimals: 8,
    exchangeAddress: '0xc2de435f1c210ebff12dd81f4e837e1fc97b420a'
  },
  {
    symbol: 'Libra',
    name: 'LibraNetwork',
    tokenAddress: '0x6f9afee7645ed0f115f39a64346e7cb2cd17b26f',
    tokenDecimals: 18,
    exchangeAddress: '0x52e6d60124143d56245ec2b857fe51254985c2b7'
  },
  {
    symbol: 'BAGS',
    name: 'BAGS',
    tokenAddress: '0xe7bf3aee922367c10c8acec3793fe7d809a38eef',
    tokenDecimals: 18,
    exchangeAddress: '0x29df24f66448b24cd1974cd17acd299695aaf625'
  },
  {
    symbol: 'FFHC',
    name: 'flashflip HC',
    tokenAddress: '0x9645f9cb0af410f170afe062bfbea0fc51e524e8',
    tokenDecimals: 0,
    exchangeAddress: '0xd1e202ccca07dd72f75a5a50a92983e0ba444551'
  },
  {
    symbol: 'RCLE',
    name: 'Ross Campbell Legal Engineering',
    tokenAddress: '0x5a844590c5b8f40ae56190771d06c60b9ab1da1c',
    tokenDecimals: 18,
    exchangeAddress: '0xd994b83f2fca809704d6819935d89f3d0f5de555'
  },
  {
    symbol: 'SATURN',
    name: 'Saturn DAO Token',
    tokenAddress: '0xb9440022a095343b440d590fcd2d7a3794bd76c8',
    tokenDecimals: 4,
    exchangeAddress: '0xe43ab311483a43a6b2ab634fcb5b3261aaa8aa70'
  },
  {
    symbol: 'Shuf',
    name: 'shuffle.monster token',
    tokenAddress: '0xd76c75b9cbbeab4109456fda9f2da73297b795db',
    tokenDecimals: 18,
    exchangeAddress: '0xeb1b47e9bcdd3b81fddd49c9eed75bd095430509'
  },
  {
    symbol: 'LCS',
    name: 'LocalCoinSwap Cryptoshare',
    tokenAddress: '0xaa19961b6b858d9f18a115f25aa1d98abc1fdba8',
    tokenDecimals: 18,
    exchangeAddress: '0xa01e4e09f0ba8a37aa0787ebc764b7be607fa601'
  },
  {
    symbol: 'IPL',
    name: 'InsurePal token',
    tokenAddress: '0x64cdf819d3e75ac8ec217b3496d7ce167be42e80',
    tokenDecimals: 18,
    exchangeAddress: '0x3981a1b7ffe82b3099d922b9021f7a66da2fca06'
  },
  {
    symbol: 'OAX',
    name: 'openANX Token',
    tokenAddress: '0x701c244b988a513c945973defa05de933b23fe1d',
    tokenDecimals: 18,
    exchangeAddress: '0xb2f061557d5cf8ce53f389ddcc4b69fb54115871'
  },
  {
    symbol: 'LION',
    name: 'LION',
    tokenAddress: '0x2167fb82309cf76513e83b25123f8b0559d6b48f',
    tokenDecimals: 18,
    exchangeAddress: '0xb9e91d257751d0fba8a0c279f0faf4b2573bc434'
  },
  {
    symbol: '0xBUTT',
    name: 'ButtCoin',
    tokenAddress: '0x7c1056ac0f7d223c4297e0c683453ee625011b1f',
    tokenDecimals: 8,
    exchangeAddress: '0xee1262668bfca72ca02ef73ed1409c18f0d33926'
  },
  {
    symbol: 'IDRT',
    name: 'Rupiah Token',
    tokenAddress: '0x998ffe1e43facffb941dc337dd0468d52ba5b48a',
    tokenDecimals: 2,
    exchangeAddress: '0x632e120ebeb7869fe0e1ad5dbc5ab3b90a82a827'
  },
  {
    symbol: 'SHUF',
    name: 'shuffle.monster token V2',
    tokenAddress: '0xd9db58c0cd8b93906ec87e353d6b1dbe19f3bfed',
    tokenDecimals: 18,
    exchangeAddress: '0x3ee17307ff3a520e2f1719794998dc67e9b1e616'
  },
  {
    symbol: 'FAU',
    name: 'FaucetToken',
    tokenAddress: '0xfab46e002bbf0b4509813474841e0716e6730136',
    tokenDecimals: 18,
    exchangeAddress: '0x952e1c4340fd0b9e8fdedf5a2a01982ae54868ab'
  },
  {
    symbol: 'EDT',
    name: 'EDT',
    tokenAddress: '0xce53a179047ebed80261689367c093c90a94cc08',
    tokenDecimals: 8,
    exchangeAddress: '0xa650a8e24466613f92d1f448cf21e09bfaf86779'
  },
  {
    symbol: 'SUDWA',
    name: 'SUDWA',
    tokenAddress: '0x700f55ca3cc165b33eb1071d66607a1d4631caa9',
    tokenDecimals: 0,
    exchangeAddress: '0xe1afab533d4f4d821bad57d4e7e41f5e8e29e49c'
  },
  {
    symbol: 'DRJ',
    name: 'JJ At Work',
    tokenAddress: '0xf0990ed3804c4c0b5fd69358626364c9995d1312',
    tokenDecimals: 18,
    exchangeAddress: '0x459dad1a6db8de6f31a71206cd56fec5b5bae912'
  },
  {
    symbol: 'ZAI',
    name: 'Zaigar',
    tokenAddress: '0x4e9095a1b97933bf528b5c2fa1e734f167c3ae12',
    tokenDecimals: 8,
    exchangeAddress: '0x0207098c1286af7af8d6eb1ad9c8a1ed2404e290'
  },
  {
    symbol: 'MXM',
    name: 'Maximine Coin',
    tokenAddress: '0x8e766f57f7d16ca50b4a0b90b88f6468a09b0439',
    tokenDecimals: 18,
    exchangeAddress: '0x8d4bb4a828664fa568825728585fc3556ae7d01a'
  },
  {
    symbol: 'HYPE',
    name: 'HYPE Token',
    tokenAddress: '0x2630997aab62fa1030a8b975e1aa2dc573b18a13',
    tokenDecimals: 18,
    exchangeAddress: '0x72d0621599431202cc24b47646c6c7873b9c3fec'
  },
  {
    symbol: 'PRE',
    name: 'Presearch',
    tokenAddress: '0x88a3e4f35d64aad41a6d4030ac9afe4356cb84fa',
    tokenDecimals: 18,
    exchangeAddress: '0x97c6e0159f1c716c3e471de85c2f81f20533df4d'
  },
  {
    symbol: 'ELF',
    name: 'ELF Token',
    tokenAddress: '0xbf2179859fc6d5bee9bf9158632dc51678a4100e',
    tokenDecimals: 18,
    exchangeAddress: '0x92d49cfaf85f5405882e0916fad9881df491c25b'
  },
  {
    symbol: 'RIC',
    name: 'AURIcoin',
    tokenAddress: '0x08e0faff8bb80eaf8c30a99920355028b5bd6789',
    tokenDecimals: 8,
    exchangeAddress: '0x8e101c4dd4658a23159ee54b30fd7dcda27bd405'
  },
  {
    symbol: 'UNDT',
    name: 'Union Network Dollar Token',
    tokenAddress: '0x7c6c3b4e91923f080d6cc847a68d7330400a95d7',
    tokenDecimals: 18,
    exchangeAddress: '0x32a17ae3d6684105acb39e0c33699fc398a9522e'
  },
  {
    symbol: 'UDAO',
    name: 'UnionDAO',
    tokenAddress: '0x4a32e09c60af50f0a5869bf5c622f4e5d57c3b37',
    tokenDecimals: 18,
    exchangeAddress: '0x6eb93407d116d367893fad239a827235bc0d46fe'
  },
  {
    symbol: 'URING',
    name: 'Uni Ring',
    tokenAddress: '0x8baaabee4e60982b128b5339a998ee748eca4cff',
    tokenDecimals: 18,
    exchangeAddress: '0xba6fc6c51d793cccf54a8581bd7b9a40fe5bb0b8'
  },
  {
    symbol: 'KGT',
    name: 'King Token',
    tokenAddress: '0xfe417d8eef16948ba0301c05f5cba87e2c1c51c8',
    tokenDecimals: 9,
    exchangeAddress: '0xbc9297dba73c72386efb34f75486171dcaf22872'
  },
  {
    symbol: 'ONOT',
    name: 'ONOT',
    tokenAddress: '0xb31c219959e06f9afbeb36b388a4bad13e802725',
    tokenDecimals: 18,
    exchangeAddress: '0x4737ceded868452e0d9b5c4253707501beacb2da'
  },
  {
    symbol: '🕯️',
    name: 'ignis',
    tokenAddress: '0x0dea6dbacaee8a903dec0b1233fec55d10fdf975',
    tokenDecimals: 18,
    exchangeAddress: '0x87f44b439cca55ea63cfb854e8d73e1f12296279'
  },
  {
    symbol: 'MBC',
    name: 'Marblecoin',
    tokenAddress: '0x8888889213dd4da823ebdd1e235b09590633c150',
    tokenDecimals: 18,
    exchangeAddress: '0xe1b7aec3639068b474bfbcb916580fc28a20717b'
  },
  {
    symbol: 'SIM',
    name: 'SIM',
    tokenAddress: '0x8fff600f5c5f0bb03f345fd60f09a3537845de0a',
    tokenDecimals: 0,
    exchangeAddress: '0x22e527afca5a43ad40393231f8048beda98458a9'
  },
  {
    symbol: 'GTO',
    name: 'Gifto',
    tokenAddress: '0xc5bbae50781be1669306b9e001eff57a2957b09d',
    tokenDecimals: 5,
    exchangeAddress: '0x29173574542d0e6baa3ffe58b7111478df86adb3'
  },
  {
    symbol: 'HTX',
    name: 'HOT',
    tokenAddress: '0x46ae264bf6d9dc6dd84c31064551f961c67a755c',
    tokenDecimals: 18,
    exchangeAddress: '0x53efed3efd1deabc59a597cff5ca35b284cd7f5d'
  },
  {
    symbol: 'JDT',
    name: 'Jungle Coin',
    tokenAddress: '0x408865a24f0b02e43409c7c23cd3362da427c122',
    tokenDecimals: 18,
    exchangeAddress: '0xd3bf8a2e1a6501972c450a7abc817fe796fc66f6'
  },
  {
    symbol: 'DAPP',
    name: 'DAPPTOKEN',
    tokenAddress: '0x747c276c9a714c79a6b9b9ea1a995888cc9e35e4',
    tokenDecimals: 18,
    exchangeAddress: '0xbd2f6c29ab8303369067a64b5df5889f055e93bc'
  },
  {
    symbol: 'DYT',
    name: 'Dynamite',
    tokenAddress: '0xad95a3c0fdc9bc4b27fd79e028a0a808d5564aa4',
    tokenDecimals: 18,
    exchangeAddress: '0x5459ed7c3ceebd51eab6f6e36a28e6930116d132'
  },
  {
    symbol: 'C10',
    name: 'CRYPTO10 Hedged',
    tokenAddress: '0x000c100050e98c91f9114fa5dd75ce6869bf4f53',
    tokenDecimals: 18,
    exchangeAddress: '0xc708c0da439ad335862050277dff1bd34155d7f6'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    tokenDecimals: 18,
    exchangeAddress: '0x3958b4ec427f8fa24eb60f42821760e88d485f7f'
  },
  {
    symbol: 'BSOV',
    name: 'BitcoinSoV',
    tokenAddress: '0x26946ada5ecb57f3a1f91605050ce45c482c9eb1',
    tokenDecimals: 8,
    exchangeAddress: '0x87ccbfd2d46d167d9e7488255680f48c2ad0c5bb'
  },
  {
    symbol: 'PTT',
    name: 'PTT',
    tokenAddress: '0xe4cdd296ac85c7d8477988f582d457e638349947',
    tokenDecimals: 0,
    exchangeAddress: '0xe7c6aef152984dcea3220c6679a3b106092e9c90'
  },
  {
    symbol: 'EEFI',
    name: 'Ethele Fire',
    tokenAddress: '0x241609ad37a5038e459bda70ffb1c052e76a1b8a',
    tokenDecimals: 18,
    exchangeAddress: '0x6a1d1df3fa2b4ee221f0652829c7ad468b8683fd'
  },
  {
    symbol: 'EEEA',
    name: 'Ethele Earth',
    tokenAddress: '0xd6a7027807d42695c49466079101615dafd4b46b',
    tokenDecimals: 18,
    exchangeAddress: '0x1b16938fd0f634f435153d3f840e31eb5f700665'
  },
  {
    symbol: 'EEME',
    name: 'Ethele Metal',
    tokenAddress: '0x4f7ecd8afa3b43e0bfe3820232d04e8d5921cc29',
    tokenDecimals: 18,
    exchangeAddress: '0xb2bef46f099f7e7e751491c5faf857c9f9a2227e'
  },
  {
    symbol: 'EEWA',
    name: 'Ethele Water',
    tokenAddress: '0x9dd58c478c69f1b32c78f477dafa57c43927b19c',
    tokenDecimals: 18,
    exchangeAddress: '0x393819eb3a0a2baec8b412b1c2b0e8dffc949cac'
  },
  {
    symbol: 'EEWO',
    name: 'Ethele Wood',
    tokenAddress: '0xe690c40835cf3717160130e37c46044181cf72dd',
    tokenDecimals: 18,
    exchangeAddress: '0xb2f3a588a912317fd0a3e0537873e87401d4d47d'
  },
  {
    symbol: 'EEYI',
    name: 'Ethele Yin',
    tokenAddress: '0xe784824946ab8d8204eff386d2740fdfbce48c00',
    tokenDecimals: 18,
    exchangeAddress: '0x20f04038ffd72ab739f9674ac399c1d2f08a393d'
  },
  {
    symbol: 'EEYA',
    name: 'Ethele Yang',
    tokenAddress: '0x81a8b50dec71a73463c1d02c80c0cd8883014c59',
    tokenDecimals: 18,
    exchangeAddress: '0x79421a26e318f3ae8a261dab3404dca377169b61'
  },
  {
    symbol: 'ZAP',
    name: 'ZAP TOKEN',
    tokenAddress: '0x6781a0f84c7e9e846dcb84a9a5bd49333067b104',
    tokenDecimals: 18,
    exchangeAddress: '0x9c3cf0fe5b5065b344a1b80c6919ade1caabab19'
  },
  {
    symbol: 'BBC',
    name: 'B2BCoin',
    tokenAddress: '0xe7d3e4413e29ae35b0893140f4500965c74365e5',
    tokenDecimals: 18,
    exchangeAddress: '0x10eff783e748a3f4e6782673935464ddeb6d27bf'
  },
  {
    symbol: 'GPMU',
    name: 'GPM Utility Token',
    tokenAddress: '0x72a7d948b23528e421334bcf783db723232d1633',
    tokenDecimals: 2,
    exchangeAddress: '0x3dfdcc6b0c52b5eaaa9ed32de8420cd74fbe73ce'
  },
  {
    symbol: 'LHOMME',
    name: 'LHOMME COIN',
    tokenAddress: '0x116803242736fad67c16239050b5e213972e104f',
    tokenDecimals: 4,
    exchangeAddress: '0x075da3a1483aeadb9ef0f8effe198f15c9414ba3'
  },
  {
    symbol: 'BWS',
    name: 'Bretton Woods system-2.0',
    tokenAddress: '0x55a576e960296d3a327dd0840780625ed662d3a4',
    tokenDecimals: 12,
    exchangeAddress: '0x5fd784d4dcaf59bbc9fd805d45fb8c071342ee8a'
  },
  {
    symbol: 'SHUF',
    name: 'Shuffle.Monster V3',
    tokenAddress: '0x3a9fff453d50d4ac52a6890647b823379ba36b9e',
    tokenDecimals: 18,
    exchangeAddress: '0x536956fab86774fb55cfaacf496bc25e4d2b435c'
  },
  {
    symbol: 'CRUDE',
    name: 'Oil Coin',
    tokenAddress: '0x9622e1b0ac29525441b02d192f20e9bafb1a16b7',
    tokenDecimals: 1,
    exchangeAddress: '0x0a48ebbfed6148f4fb5e4ea72e41bbef57a80572'
  },
  {
    symbol: 'Zrex',
    name: 'Izurex',
    tokenAddress: '0x79fc707552caaadf1e6dec7939af9c41d9ac2bee',
    tokenDecimals: 18,
    exchangeAddress: '0xe79deb0eae29738ff00419edc6310170540cc8e7'
  },
  {
    symbol: 'DTX',
    name: 'Divine Time Coin',
    tokenAddress: '0xf3d0c560a707f088fc15dcf4c30742817929102a',
    tokenDecimals: 1,
    exchangeAddress: '0x21e6980e3b60c73cdbaa614aa28f800581c58f40'
  },
  {
    symbol: 'ZREX',
    name: 'Izurex',
    tokenAddress: '0x0a6b2931a74a2fd058d160dc1d677f401696ca8c',
    tokenDecimals: 18,
    exchangeAddress: '0xc84c0749b7c274e1173fe62b60b503a81eada89f'
  },
  {
    symbol: 'EKIG',
    name: 'ETHERKING',
    tokenAddress: '0x30859d6387cb28e68756be606d6724c7d29da9c3',
    tokenDecimals: 18,
    exchangeAddress: '0x51ec82d8422f4245e539fd035c5aa08986eedb52'
  },
  {
    symbol: 'RENT',
    name: 'Real Estate Networking Token',
    tokenAddress: '0xe17e2c31f480f618be0ed4e46d629862cd05ec64',
    tokenDecimals: 2,
    exchangeAddress: '0xfcfaf1826eded767890c5e8ead104e2302540f94'
  },
  {
    symbol: 'UUN',
    name: 'UUnit Token',
    tokenAddress: '0xce2ac722f8b9349a0bdcbe9ee9f9d877c8cfa7a0',
    tokenDecimals: 18,
    exchangeAddress: '0x04771e1cc3f9df7dd46ead1140dc6527bd833faf'
  },
  {
    symbol: 'GRK',
    name: 'GOLDROCK',
    tokenAddress: '0xeebdec779a6ed3492b59754885016e0259354d06',
    tokenDecimals: 10,
    exchangeAddress: '0x1e0b688d8e1c64c2fb4ca1b42e572c0398caf667'
  },
  {
    symbol: 'RAE',
    name: 'RAE Token',
    tokenAddress: '0xe5a3229ccb22b6484594973a03a3851dcd948756',
    tokenDecimals: 18,
    exchangeAddress: '0x6e2dcfbf8848994b5f600d3c9c113b39da39261a'
  },
  {
    symbol: 'ROBET',
    name: 'RoBET - Truly Decentralized Sportsbetting',
    tokenAddress: '0x2344871f523cbb28a4f60045531184cf1f03ad24',
    tokenDecimals: 18,
    exchangeAddress: '0x8e844feda375404695434d7e3f54bb104f04fdbd'
  },
  {
    symbol: 'ZAR',
    name: 'Digital Rand',
    tokenAddress: '0x26acff19e3adf65e920fd7c33a6b92cda9a50460',
    tokenDecimals: 18,
    exchangeAddress: '0x6f8b289090b5d5fdc4b7f6277f1c60fb5d6a5ff5'
  },
  {
    symbol: 'BURNT',
    name: 'BURNT',
    tokenAddress: '0x33e1089b4b0a456488cfb0a445d090907b5d3e7d',
    tokenDecimals: 0,
    exchangeAddress: '0xfbfcfefea9ba5516281b1d5e792ab30bb933315d'
  },
  {
    symbol: 'BCP',
    name: 'bitcoinplatinums',
    tokenAddress: '0xd26fb114401ec86887cd09f62eccd95fcf20b571',
    tokenDecimals: 8,
    exchangeAddress: '0xe90f5bb01fd32ad53229141bfad9b8902cf0d405'
  },
  {
    symbol: 'HAX',
    name: 'The hacker token',
    tokenAddress: '0xc0be5d2217d85963d391a3f556ff6aba3f53ee7f',
    tokenDecimals: 18,
    exchangeAddress: '0x097c17577cf8f63c6574e7f0d151aa0b9ad59101'
  },
  {
    symbol: 'KXM',
    name: 'KXM Token',
    tokenAddress: '0x63518fa947a0b9c61fc69369015c68630fda910e',
    tokenDecimals: 18,
    exchangeAddress: '0xe722d4d6120956956621a2d5c32eb65d876fa7d3'
  },
  {
    symbol: 'VGW',
    name: 'VegaWallet',
    tokenAddress: '0x94236591125e935f5ac128bb3d5062944c24958c',
    tokenDecimals: 5,
    exchangeAddress: '0xed3207570f377fca5ea5b1fffd771741faf15a9c'
  },
  {
    symbol: 'CTXC',
    name: 'Cortex Coin',
    tokenAddress: '0xea11755ae41d889ceec39a63e6ff75a02bc1c00d',
    tokenDecimals: 18,
    exchangeAddress: '0x9e371ce33547b8ea706c6155bcd834c1e50e0759'
  },
  {
    symbol: 'SPC',
    name: 'SpaceChain',
    tokenAddress: '0x8069080a922834460c3a092fb2c1510224dc066b',
    tokenDecimals: 18,
    exchangeAddress: '0x204e3d643adc1365f569f6cec2e01b89f01a6274'
  },
  {
    symbol: 'MORE',
    name: 'MORE',
    tokenAddress: '0x305de070488c8469dfac957226c9c900c4bfba22',
    tokenDecimals: 8,
    exchangeAddress: '0x36f907deda772aef8f937ae2394a6a5936ed9c27'
  },
  {
    symbol: 'HDC',
    name: 'Hydrolic Token',
    tokenAddress: '0x7b551d679606ee11862b0e9b2d354b53951fda93',
    tokenDecimals: 18,
    exchangeAddress: '0x5d1761173e7244ebb41f44b264fbf9a559e9a9fb'
  },
  {
    symbol: 'TIG',
    name: 'Tigereum',
    tokenAddress: '0xeee2d00eb7deb8dd6924187f5aa3496b7d06e62a',
    tokenDecimals: 18,
    exchangeAddress: '0xae0886efdb596dd887ced05f13405f2a1af0c2f7'
  },
  {
    symbol: 'LYCI',
    name: 'LyCI service token',
    tokenAddress: '0xd2ba769293295ffb96cebae56396fc77eca2678d',
    tokenDecimals: 18,
    exchangeAddress: '0x707bed7cabb5d1c30c3bebc5d2a26c8624e8b2dd'
  },
  {
    symbol: 'LYCI',
    name: 'LyCI service token',
    tokenAddress: '0x9794091c4161ae66aa775af0781379d1823016cf',
    tokenDecimals: 18,
    exchangeAddress: '0xa1eafa2df1e86b8dfd4b3079dbbd399ed18c7768'
  },
  {
    symbol: 'TOKN',
    name: 'ToknTrade',
    tokenAddress: '0xff59c6a13b272db7b278f04e5300e53b46faad78',
    tokenDecimals: 18,
    exchangeAddress: '0x7b451174265e28d0dec1a81e3c9b2d3175c02d62'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xe1b7aec3639068b474bfbcb916580fc28a20717b',
    tokenDecimals: 18,
    exchangeAddress: '0xe0153f7bd65dd638f66a4d476bfb1d15aed72cbb'
  },
  {
    symbol: 'ABYSS',
    name: 'ABYSS',
    tokenAddress: '0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6',
    tokenDecimals: 18,
    exchangeAddress: '0xcb780c95fbb295785f93c5266b9ec393aaf8fb41'
  },
  {
    symbol: 'iDAI',
    name: 'bZx DAI iToken',
    tokenAddress: '0x14094949152eddbfcd073717200da82fed8dc960',
    tokenDecimals: 18,
    exchangeAddress: '0x81eed7f1ecbd7fa9978fcc7584296fb0c215dc5c'
  },
  {
    symbol: 'PHTTX',
    name: 'PHTTOKENX',
    tokenAddress: '0x8a64c0bd7146710aa5c2773365bb620faf11bed4',
    tokenDecimals: 18,
    exchangeAddress: '0x9e205124a2041bb9762cf9e6659f785fd956233a'
  },
  {
    symbol: 'AMA',
    name: 'ADAMASCOIN',
    tokenAddress: '0x13a863e9bc99b926ea8e153513b85695ddcf9826',
    tokenDecimals: 18,
    exchangeAddress: '0x8913b00b0142f48780cefa1e770ffae4a4796f1e'
  },
  {
    symbol: 'SIG',
    name: 'Signals',
    tokenAddress: '0x6888a16ea9792c15a4dcf2f6c623d055c8ede792',
    tokenDecimals: 18,
    exchangeAddress: '0x6519bf6ee473d70813e3bca9ab1f5931febefaf1'
  },
  {
    symbol: 'OMT',
    name: 'OgroMagicToken',
    tokenAddress: '0x54e529f3673eb585c1690880186eac3c4dd30b09',
    tokenDecimals: 18,
    exchangeAddress: '0x049277174359d1e93e475484b8e6bdd428414ad7'
  },
  {
    symbol: 'BZT',
    name: 'BIZATCOIN',
    tokenAddress: '0x6ea40d8c8f275c274461bb97e7dc4535f77de6a0',
    tokenDecimals: 18,
    exchangeAddress: '0x0d146302acf3276bc1ca7ca6b804dc029d5eb363'
  },
  {
    symbol: 'CDY',
    name: 'COINDAYRA',
    tokenAddress: '0xac3c27fb6ab4e5af604f8f3b20b0a0c827c96ba9',
    tokenDecimals: 18,
    exchangeAddress: '0xc0fe0278cf6cc07cc0cc8fe458c07cb85da6b7ac'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xc0fe0278cf6cc07cc0cc8fe458c07cb85da6b7ac',
    tokenDecimals: 18,
    exchangeAddress: '0x874d75f7e86aae4f79f450668fb022486ca5ab40'
  },
  {
    symbol: 'KWT',
    name: 'KWT COIN',
    tokenAddress: '0x0500461af1eb8078203bae4886652dce18e7ec20',
    tokenDecimals: 18,
    exchangeAddress: '0xc5ea58a9632e789f1711e624460dd46c622e011d'
  },
  {
    symbol: 'SOUL',
    name: 'CryptoSoul',
    tokenAddress: '0xbb1f24c0c1554b9990222f036b0aad6ee4caec29',
    tokenDecimals: 18,
    exchangeAddress: '0x776f94ae301cf8e3e5085267f1f5a3123007ed9f'
  },
  {
    symbol: 'REV',
    name: 'REVA',
    tokenAddress: '0xd60314496bdd92629dacfb50cc1f6c6c18d98b41',
    tokenDecimals: 18,
    exchangeAddress: '0x4bb0425e1d665da681209933e1a330137af99350'
  },
  {
    symbol: 'STL',
    name: 'Stablecoinswap',
    tokenAddress: '0xc1ad68c43508dd5addb8d0ac0927dbe752d149d6',
    tokenDecimals: 18,
    exchangeAddress: '0xbca710302dcf84098ddae080133a8ff42e5c2379'
  },
  {
    symbol: 'NET',
    name: 'INTERNET',
    tokenAddress: '0x0f0708e479fcdef61ac94dbf015994e54a77d737',
    tokenDecimals: 18,
    exchangeAddress: '0xe23e7208ca2e8691e648456501d4a211e41edadd'
  },
  {
    symbol: 'GCU',
    name: 'Global Currency Unit',
    tokenAddress: '0xa4ec83c8907888d006a37debf755ee39766f38ae',
    tokenDecimals: 18,
    exchangeAddress: '0xac854712ef2baf74dd4afcedb9d5cb87cb4ef93a'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x4bb0425e1d665da681209933e1a330137af99350',
    tokenDecimals: 18,
    exchangeAddress: '0xabd285a1c6d0d7f6431d005b62e85897c3ca342c'
  },
  {
    symbol: 'iETH',
    name: 'iEthereum',
    tokenAddress: '0x859a9c0b44cb7066d956a958b0b82e54c9e44b4b',
    tokenDecimals: 8,
    exchangeAddress: '0x03cbebb8ce17a0b706e9117c8add82412879ee5c'
  },
  {
    symbol: 'VLDY',
    name: 'Validity',
    tokenAddress: '0x904da022abcf44eba68d4255914141298a7f7307',
    tokenDecimals: 18,
    exchangeAddress: '0xd01590bf566d070d4ce04743705e835f81ff77ca'
  },
  {
    symbol: 'Seppuku!',
    name: 'Seppuku Token',
    tokenAddress: '0xf49c17470ecc377a59de71eab8dcb5e78b5cb670',
    tokenDecimals: 18,
    exchangeAddress: '0x2fa6f6f6534686ef89ad0d0f2a9d26f38c146198'
  },
  {
    symbol: 'FAM',
    name: 'Fame',
    tokenAddress: '0x190e569be071f40c704e15825f285481cb74b6cc',
    tokenDecimals: 12,
    exchangeAddress: '0x117109ad2bef4cfaf50d3fb952edf8f6836d9303'
  },
  {
    symbol: 'FOR',
    name: 'The Force Token',
    tokenAddress: '0x1fcdce58959f536621d76f5b7ffb955baa5a672f',
    tokenDecimals: 18,
    exchangeAddress: '0x6e21d0004be9c4f14dc0745f20c7c66edfbfd533'
  },
  {
    symbol: 'RGF',
    name: 'Royal gulf',
    tokenAddress: '0x951e9d19cadcd6d15e64a2eaa9b3e3d4f460c022',
    tokenDecimals: 18,
    exchangeAddress: '0xfea006c544e23d299b69614a5a66934fef173e9c'
  },
  {
    symbol: 'DNT',
    name: 'DANAT',
    tokenAddress: '0x2bb6e4609d65b8e07f2c9d41d2f12f2fba1960d9',
    tokenDecimals: 18,
    exchangeAddress: '0x1158b9c5c2477307a559913e34edafec8ea0a84f'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x0d146302acf3276bc1ca7ca6b804dc029d5eb363',
    tokenDecimals: 18,
    exchangeAddress: '0x88c541370132fdb2a7b61d6baf2095749f82bd7a'
  },
  {
    symbol: 'COBR',
    name: 'CoinBroker',
    tokenAddress: '0x933dfc5622792b41245ab8313416caf0ba885ae7',
    tokenDecimals: 18,
    exchangeAddress: '0x09002d1a3be2f5a80d988fd522c2bf75eb9f69b6'
  },
  {
    symbol: 'FCI',
    name: 'FUTUREGOLDCOIN',
    tokenAddress: '0x050cbff7bff0432b6096dd15cd9499913ddf8e23',
    tokenDecimals: 18,
    exchangeAddress: '0x3bedaaa83aa55431901e8711c45ca2369540414a'
  },
  {
    symbol: 'CLC',
    name: 'CALYCOIN',
    tokenAddress: '0x7b8343ce76ce8e5792599faf7cf60351af9a6de3',
    tokenDecimals: 16,
    exchangeAddress: '0x247385eddae6d3388b6cbbdad265ccd3db51c995'
  },
  {
    symbol: 'HAT',
    name: 'HalfToken',
    tokenAddress: '0x097a0820574a8dfb8035c15d829dc25187fc4129',
    tokenDecimals: 18,
    exchangeAddress: '0xfcab592fdbc18d9b8c823a80fe5d931818156345'
  },
  {
    symbol: 'BNC',
    name: 'Bionic',
    tokenAddress: '0xef51c9377feb29856e61625caf9390bd0b67ea18',
    tokenDecimals: 8,
    exchangeAddress: '0xd9aa4f75373127a2f6ff99cb0d1ab54ce43f1ba8'
  },
  {
    symbol: 'FCQ',
    name: 'Fotrem Capital Token',
    tokenAddress: '0x6710cee627fa3a988200ffd5687cc1c814cef0f6',
    tokenDecimals: 0,
    exchangeAddress: '0x115c89f1fa3c5bb9a3bc1058907c31429d63514e'
  },
  {
    symbol: 'scom',
    name: 'Supercompute',
    tokenAddress: '0x44cf7dcfd023875d75267ba85f14366390daa3e1',
    tokenDecimals: 18,
    exchangeAddress: '0x325c752e7ebcdbbca66ee6690d522f25091d48cb'
  },
  {
    symbol: 'GRT',
    name: 'Genesis Raffle Token',
    tokenAddress: '0x0c8cdc16973e88fab31dd0fcb844ddf0e1056de2',
    tokenDecimals: 0,
    exchangeAddress: '0xa58bd3986d1e84a3a0f2d66cac2b54f17fecb786'
  },
  {
    symbol: 'COOS',
    name: 'COOS',
    tokenAddress: '0x24ebfc20bb2e1daadd98d28341ab37d0c154f4cb',
    tokenDecimals: 18,
    exchangeAddress: '0x384e75ce70ccf0890fb28a4f87ca99450ebab4fe'
  },
  {
    symbol: 'SAKU',
    name: 'SakuraDrops',
    tokenAddress: '0xe202e49088e8391ba4a54914938ca3c8391077bd',
    tokenDecimals: 0,
    exchangeAddress: '0xb57c9736234b3210cf848b9c0f39774ba0bd35a3'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xdfcf6c4c82d25597927d06e487053398cfb4a784',
    tokenDecimals: 18,
    exchangeAddress: '0x7fe85b8daaf1f253b137b317fc50aa5ee847794d'
  },
  {
    symbol: 'WLK',
    name: 'WOLK TOKEN',
    tokenAddress: '0xf6b55acbbc49f4524aa48d19281a9a77c54de10f',
    tokenDecimals: 18,
    exchangeAddress: '0x8dca75db53bbe851a634677224278d532042c984'
  },
  {
    symbol: 'ETBS',
    name: 'EthBits ETBS Token',
    tokenAddress: '0x1b9743f556d65e757c4c650b4555baf354cb8bd3',
    tokenDecimals: 12,
    exchangeAddress: '0xe11a8488ee9d697c5426200e5bf39e9beb4c33d0'
  },
  {
    symbol: 'FLS',
    name: 'FLOS',
    tokenAddress: '0x124a7f6d9855f595ab006258f1d5cd5880637b86',
    tokenDecimals: 18,
    exchangeAddress: '0x82b03f9a6444ce8be14a92073fc08fd34601ff99'
  },
  {
    symbol: 'PANT',
    name: 'Panvala pan (test)',
    tokenAddress: '0x10a429b088e1fa159df832097a3fbdb778ba41b7',
    tokenDecimals: 18,
    exchangeAddress: '0xdfa1e41081b84396ef22b4c3c4b39159983cdf32'
  },
  {
    symbol: 'CARAT',
    name: 'Jewel Coin',
    tokenAddress: '0x207b893467904d076add0a44f94ac8c8d92d2e0c',
    tokenDecimals: 4,
    exchangeAddress: '0x8ae89ce25e1b026d6ac880dfeafd90ea9e06fa3e'
  },
  {
    symbol: 'DAV',
    name: 'DAV Token',
    tokenAddress: '0xd82df0abd3f51425eb15ef7580fda55727875f14',
    tokenDecimals: 18,
    exchangeAddress: '0xa89bc4402b94f3569c338fd83cd3a846761b7aea'
  },
  {
    symbol: 'FLS',
    name: 'FILS',
    tokenAddress: '0x7695fe3fc4177bf9591ca8f27a03a54797690347',
    tokenDecimals: 18,
    exchangeAddress: '0xd5d609f68ef9d5be6543945d30985512c0b418ea'
  },
  {
    symbol: 'BLZMT',
    name: 'BlazingMoonToken',
    tokenAddress: '0xf6ff4a4896e98a53e74e24c15f2a51a6abb5964a',
    tokenDecimals: 2,
    exchangeAddress: '0x5f2ce93aa9a3417ae18d882e95f96c4d4153d2b5'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x82b03f9a6444ce8be14a92073fc08fd34601ff99',
    tokenDecimals: 18,
    exchangeAddress: '0x599e9e38cb0d64e6da4f6c59799bfd872683a75f'
  },
  {
    symbol: 'BKN',
    name: 'Blockstate STO Token',
    tokenAddress: '0xbee6edf5fa7e862ed2ea9b9f42cb0849184aae85',
    tokenDecimals: 0,
    exchangeAddress: '0x2ebba2d935b1e1dc996d8f5b463c0a7628fe5880'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xd5d609f68ef9d5be6543945d30985512c0b418ea',
    tokenDecimals: 18,
    exchangeAddress: '0x7ae3a159f7a7c75b7aee8c4c350d5610c270814f'
  },
  {
    symbol: 'TENX',
    name: 'TenX Token',
    tokenAddress: '0x515ba0a2e286af10115284f151cf398688a69170',
    tokenDecimals: 18,
    exchangeAddress: '0xacd8be48b04eb9693128f6070382ee4f3ec39ce4'
  },
  {
    symbol: 'PAN',
    name: 'Panvala pan',
    tokenAddress: '0xd56dac73a4d6766464b38ec6d91eb45ce7457c44',
    tokenDecimals: 18,
    exchangeAddress: '0xf53bbfbff01c50f2d42d542b09637dca97935ff7'
  },
  {
    symbol: 'GAZ',
    name: 'GRADZ',
    tokenAddress: '0x943bd545e019b485514c8474da6032656168fa99',
    tokenDecimals: 18,
    exchangeAddress: '0xc33389c871df5ce7a62b4193063c9f96d43cb23b'
  },
  {
    symbol: 'LOC',
    name: 'LockChain',
    tokenAddress: '0x5e3346444010135322268a4630d2ed5f8d09446c',
    tokenDecimals: 18,
    exchangeAddress: '0x875e249d348db0facd95d6b65d168c60d3ffca3e'
  },
  {
    symbol: 'ALICE',
    name: 'Alice',
    tokenAddress: '0x8aa18921bc476f0a69e6c376e28c34b993e0b106',
    tokenDecimals: 18,
    exchangeAddress: '0xd40494eb60a67f29f19ddceed728599752d41c88'
  },
  {
    symbol: 'STC',
    name: 'Shift Token',
    tokenAddress: '0xef7e0f278b149feab9ba6c98ecebcfc449d47d02',
    tokenDecimals: 8,
    exchangeAddress: '0x533b9a1d0f90354609f0329db0969346459f1691'
  },
  {
    symbol: 'CGC',
    name: 'CGCOINS',
    tokenAddress: '0x2d9765a94ff22e0ca3afc3e3f4b116de2b67582a',
    tokenDecimals: 16,
    exchangeAddress: '0x2cba1cda6e54965d208fd6ffd1fe62d40bcdbb74'
  },
  {
    symbol: 'WNFT',
    name: 'Wrapped NFT',
    tokenAddress: '0x2b3e6bcc143d82a2aab4f7768a42a57007a3f890',
    tokenDecimals: 18,
    exchangeAddress: '0xd14601fc4af6785c5f3fefb6ed1d5ba85fe64ea4'
  },
  {
    symbol: 'WNFT',
    name: 'Wrapped NFT',
    tokenAddress: '0xda108db8739d269ef127b99e5e90a5690a66ae95',
    tokenDecimals: 18,
    exchangeAddress: '0x72fed1883b5a3dd766ed9d2dfe5ecceb91f3edcc'
  },
  {
    symbol: 'WNFT',
    name: 'Wrapped NFT',
    tokenAddress: '0x9456666c316d13e46687b109fddd536835734607',
    tokenDecimals: 18,
    exchangeAddress: '0xb5237256fd1cd366647cfd7e6d028cba77f06bd3'
  },
  {
    symbol: 'WNFT',
    name: 'Wrapped NFT',
    tokenAddress: '0xdde23e00ecf0f4d25a8d73f9558f328bf85a167f',
    tokenDecimals: 18,
    exchangeAddress: '0x41b28aed84990ffc0cdcc96ace6f9ebe03bd5c1e'
  },
  {
    symbol: 'TARIF',
    name: 'TARIFF Coin',
    tokenAddress: '0x2bdd67e35ed0221a7c201863fa3891b619fd9aa3',
    tokenDecimals: 18,
    exchangeAddress: '0xbe4d60422f213bcb57cac22d17c8637ee9a6b970'
  },
  {
    symbol: 'MYM',
    name: 'Moyom',
    tokenAddress: '0xb9892f9a892f3e251fc58b9076c56add528eb8a6',
    tokenDecimals: 18,
    exchangeAddress: '0xa8fb35376907b6d3bf70319975e1aa40f52d68e9'
  },
  {
    symbol: 'ET20',
    name: 'EquityToken',
    tokenAddress: '0x00027d07fd8c14af7e05d335a44aa53e23575691',
    tokenDecimals: 8,
    exchangeAddress: '0xf1ec1c54f6de7d85ad887593bf9f11fe0ece7591'
  },
  {
    symbol: 'MUZK',
    name: 'DIGITRAXX',
    tokenAddress: '0xa94af6eab14d95f8872074c35cbeb7a8f4e1dd7b',
    tokenDecimals: 18,
    exchangeAddress: '0x55169e4e560caf2835d5d3db130aa7e5f1fdf4f6'
  },
  {
    symbol: 'HT',
    name: 'HypeToken',
    tokenAddress: '0x9bf598db8845b3223520f0ba6abe6585f49e2bc5',
    tokenDecimals: 18,
    exchangeAddress: '0x55e51019b831e5d0de4b945abb0dfab1ae8fe7a7'
  },
  {
    symbol: 'SHIT',
    name: 'ShitCoin',
    tokenAddress: '0xaa7fb1c8ce6f18d4fd4aabb61a2193d4d441c54f',
    tokenDecimals: 6,
    exchangeAddress: '0x1a51d113de28ccd5694829045636e6b6b74b4be0'
  },
  {
    symbol: 'B2BX',
    name: 'B2BX',
    tokenAddress: '0x5d51fcced3114a8bb5e90cdd0f9d682bcbcc5393',
    tokenDecimals: 18,
    exchangeAddress: '0x13ec906827b85dbdbaf63cee92c0488def0306fa'
  },
  {
    symbol: 'PASS',
    name: 'Passive Silver',
    tokenAddress: '0xfe75b71b348165f60b5be7f356b42da9b333b2b7',
    tokenDecimals: 18,
    exchangeAddress: '0x5a1cbd3227277fae4f3abd4d091e058de50e6ac4'
  },
  {
    symbol: 'KOH',
    name: 'Kindness of Humanity',
    tokenAddress: '0x8ee6ec1d1d52b16f7ad0b3029a4ed26e3227e4dd',
    tokenDecimals: 8,
    exchangeAddress: '0xc9eab452757f70b3e6f9e39f7b9ca4ac0f3d1bfe'
  },
  {
    symbol: 'CLC',
    name: 'CloverCoin',
    tokenAddress: '0x1a94656a6245379bc0d9c64c402197528edb2bd1',
    tokenDecimals: 18,
    exchangeAddress: '0x339617707ede2bc3e166a56850fb5a1c6a335e5f'
  },
  {
    symbol: 'MCR',
    name: 'Microcoin',
    tokenAddress: '0x702fbba3084eabf8c070ae54e566d0d0532160b3',
    tokenDecimals: 0,
    exchangeAddress: '0xff3573b26f8cd15e311e2f5e095590e19c2410de'
  },
  {
    symbol: 'GLA',
    name: 'Gladius Token',
    tokenAddress: '0x71d01db8d6a2fbea7f8d434599c237980c234e4c',
    tokenDecimals: 8,
    exchangeAddress: '0xabe20dfe88130bdc0dab18b19203980b26833cf6'
  },
  {
    symbol: 'FXM',
    name: 'FXM',
    tokenAddress: '0xe1c4b784dc65b3dca8fe8f47b9a07cb094e7044f',
    tokenDecimals: 0,
    exchangeAddress: '0xb2394c218d2f36ec0a0b81b08952f00d321da4dc'
  },
  {
    symbol: 'VID',
    name: 'VideoCoin',
    tokenAddress: '0x2c9023bbc572ff8dc1228c7858a280046ea8c9e5',
    tokenDecimals: 18,
    exchangeAddress: '0x407721c86befc7243e041ec78c11152f86c4ace5'
  },
  {
    symbol: 'EMPR',
    name: 'empowr',
    tokenAddress: '0xe7d7b37e72510309db27c460378f957b1b04bd5d',
    tokenDecimals: 18,
    exchangeAddress: '0xdd093c0729fd5d347c7dfd4476ed3ee2fbc05f21'
  },
  {
    symbol: 'WNFT',
    name: 'Wrapped NFT',
    tokenAddress: '0x9e8534fd246256abc96b3ff24cd47f76eedcfc6f',
    tokenDecimals: 18,
    exchangeAddress: '0x96171cc50d8acc841b083916e9b9d59cc82c84fe'
  },
  {
    symbol: 'WNFT',
    name: 'Wrapped NFT',
    tokenAddress: '0x843e50d75dcc0bb7f7976bff4c5a865074b9694c',
    tokenDecimals: 18,
    exchangeAddress: '0xef9dfbd0f0ad3e9bbf2c99bf1659c1c38bb0a1e3'
  },
  {
    symbol: 'DCT',
    name: 'Dragon City Token',
    tokenAddress: '0x79c4e3d3cd2f6418cb60a1eb777e281b2c8795e6',
    tokenDecimals: 0,
    exchangeAddress: '0x99a3b55cce2a9ddb236900144f1c3f1162ae920f'
  },
  {
    symbol: 'TCC',
    name: 'Terracoin',
    tokenAddress: '0x6558ebe73d92c4bf58195055a5ecca7ab7aa4dc9',
    tokenDecimals: 2,
    exchangeAddress: '0xddb20b0742798aa3a323f37d017ca5f4d76409b3'
  },
  {
    symbol: 'AKJ',
    name: 'AKJ',
    tokenAddress: '0x5ab2d437ec6d8e52b2191efafd985826a73d97de',
    tokenDecimals: 18,
    exchangeAddress: '0x6a93f04d900ca94e5da9ce93a7f8139dcb6e524b'
  },
  {
    symbol: 'Mook',
    name: 'Moonrakers',
    tokenAddress: '0xe8ca1173f3d101cea72f5b4c85f1d2516aa15f51',
    tokenDecimals: 18,
    exchangeAddress: '0x2559d5c379cef05dfd18e97fefd288738d5d3ae6'
  },
  {
    symbol: 'IDEX',
    name: 'IDEX Token',
    tokenAddress: '0xb705268213d593b8fd88d3fdeff93aff5cbdcfae',
    tokenDecimals: 18,
    exchangeAddress: '0xf81521e83369fd9b661b804ba342993b2bcef430'
  },
  {
    symbol: 'SDT',
    name: 'Stardust',
    tokenAddress: '0x5ad1d541584be30ce5c43ab99a788d6461577be4',
    tokenDecimals: 18,
    exchangeAddress: '0x1452760b159644671b5a1077a61ced9308c0515e'
  },
  {
    symbol: 'FHT',
    name: 'FlameHyre Token',
    tokenAddress: '0xebd01df7e1e56e89a52c5de185377d3a2eef9a2b',
    tokenDecimals: 8,
    exchangeAddress: '0x890c0d32b7597a62d2508e4e261f0ac94a3b9059'
  },
  {
    symbol: 'ASH',
    name: 'Ash',
    tokenAddress: '0x71590d4ed14d9cbacb2cff8abf919ac4d22c5b7b',
    tokenDecimals: 18,
    exchangeAddress: '0x9a9a9b371dc9631b2b325f37ff76fa4dabde4a71'
  },
  {
    symbol: 'ALICE',
    name: 'Alice',
    tokenAddress: '0x33dcd369d697132de252884336225de31fb474b2',
    tokenDecimals: 18,
    exchangeAddress: '0x2677bf8489ae9a75f3c987735848366d513e6a2b'
  },
  {
    symbol: 'CELR',
    name: 'CelerToken',
    tokenAddress: '0x4f9254c83eb525f9fcf346490bbb3ed28a81c667',
    tokenDecimals: 18,
    exchangeAddress: '0x1e3740a030af8c755c888a0ee83ac9e79e09f4f1'
  },
  {
    symbol: 'BURNR',
    name: 'Burn Rebalance',
    tokenAddress: '0xce1a728c0a2dfc8e3e01d769ed5efccdd5230f10',
    tokenDecimals: 18,
    exchangeAddress: '0xfab3dfa4188794cd81a5fdc118b6b5ca874b24ab'
  },
  {
    symbol: 'ETH',
    name: 'Etherum',
    tokenAddress: '0xb3f11b7f046e253756106dc4380c096d39b93ea4',
    tokenDecimals: 18,
    exchangeAddress: '0x4924f67370085addb0e6e25ed19f7193688a46ed'
  },
  {
    symbol: 'EGPC',
    name: 'EGP Coin',
    tokenAddress: '0xbcc9fe1b74b2cc5949b129538b8616aa86ead5e9',
    tokenDecimals: 18,
    exchangeAddress: '0x2e874797cf704717cb5f28c523afe21f2f4e5308'
  },
  {
    symbol: 'FETH',
    name: 'FranzToken',
    tokenAddress: '0xd5a7b652d294869814b205a76b638a128d446db5',
    tokenDecimals: 18,
    exchangeAddress: '0x649bca8de37e8c7e9e8ecdb128da0f7fa6b1e296'
  },
  {
    symbol: 'SUX',
    name: 'SudEX',
    tokenAddress: '0x100005bc082d49eefffdc720864984bd7f3f7e5e',
    tokenDecimals: 18,
    exchangeAddress: '0xa78348775ba327302a8f41861bbe3c7bac6d8586'
  },
  {
    symbol: 'PRC',
    name: 'PRINCOIN',
    tokenAddress: '0xb74c5b590398ac63cc5888f7dd0c0b1eb4baabcd',
    tokenDecimals: 8,
    exchangeAddress: '0x0d093569a7bd3449a12d4904515e74938f8ca73c'
  },
  {
    symbol: 'BTB',
    name: 'BitBall',
    tokenAddress: '0x06e0feb0d74106c7ada8497754074d222ec6bcdf',
    tokenDecimals: 18,
    exchangeAddress: '0xd203aa2cbd71f608dfd86f83c742666c14c74615'
  },
  {
    symbol: 'GOOGT',
    name: 'Googlier Tellurium',
    tokenAddress: '0x0e5e5c1b981a20be2bfade0b114e5fe7ba6eff7f',
    tokenDecimals: 18,
    exchangeAddress: '0x60b3fc050d5eae72824624cf410845da71aa4f47'
  },
  {
    symbol: 'NRA',
    name: 'Noura Capital',
    tokenAddress: '0xdae0bd9371b2f14077a0461c92b0e8ade34efa84',
    tokenDecimals: 18,
    exchangeAddress: '0x4c6e26bedba9171639adfd9ffaddee5170625c1c'
  },
  {
    symbol: 'AMGO',
    name: 'AMGO - Arena Match Gold',
    tokenAddress: '0xf1ac7a375429719de0dde33528e2639b9a206eba',
    tokenDecimals: 18,
    exchangeAddress: '0x516075411008a5cc174dd68f5c0d2112b7aa04d7'
  },
  {
    symbol: 'SCOTT',
    name: 'Stop SCOTT',
    tokenAddress: '0xac1d236b6b92c69ad77bab61db605a09d9d8ec40',
    tokenDecimals: 18,
    exchangeAddress: '0x9a5826172f6b2b3fcdfc752f3a4fe835a19fc05b'
  },
  {
    symbol: 'BXV',
    name: 'BlockXV',
    tokenAddress: '0xed35a93b1d52d66d6f9e840d85412730ee206cbc',
    tokenDecimals: 18,
    exchangeAddress: '0x9a4a452aafbe4152fbc3fcbc489525f3c5c2bff4'
  },
  {
    symbol: 'RAYA',
    name: 'RAYA',
    tokenAddress: '0xe0337d875165e21092d0f382e5cf4c1ccaba6809',
    tokenDecimals: 18,
    exchangeAddress: '0xa5420452492ac4d543a6986e356f2288ab663211'
  },
  {
    symbol: 'HYST',
    name: 'Help YourSelf Token',
    tokenAddress: '0x6dc0a2a91d15461e8a0dfc64a387a7c4637b3fdb',
    tokenDecimals: 18,
    exchangeAddress: '0x929eb6662fcbe74de09b6858d3e29f75509da916'
  },
  {
    symbol: 'FRX',
    name: 'FireX',
    tokenAddress: '0x0d4870dfca0101856f5cef969a1df2757ae0a280',
    tokenDecimals: 2,
    exchangeAddress: '0xe477f5d507e6e6ce008c03dcaae2f167ee715b49'
  },
  {
    symbol: 'ZUC',
    name: 'Zeuxcoin',
    tokenAddress: '0x5b7e386b636abff1e83fc7101c33282acba8e1a5',
    tokenDecimals: 18,
    exchangeAddress: '0x23467d55447b5937fe204912aad1280e83286a83'
  },
  {
    symbol: 'RFR',
    name: 'Refereum',
    tokenAddress: '0xd0929d411954c47438dc1d871dd6081f5c5e149c',
    tokenDecimals: 4,
    exchangeAddress: '0xc3ecb5727f2a566b98611368232b1dce3ba9086f'
  },
  {
    symbol: 'AUTO',
    name: 'Luxury Auto Coin',
    tokenAddress: '0x0ed55f31ee2f9875a738c6496842b0e6519d7833',
    tokenDecimals: 4,
    exchangeAddress: '0xe32dadfeada597947b64ee0dc9eecd5c77d8bd9c'
  },
  {
    symbol: 'CRB',
    name: 'CrackB',
    tokenAddress: '0xf2b06cf6391e95b82ec7f5aece3eefa76c291fa9',
    tokenDecimals: 18,
    exchangeAddress: '0xb1f64f8fa64a792620cabac45397f9bb21822f6e'
  },
  {
    symbol: 'STH',
    name: 'Snatch',
    tokenAddress: '0x572e2bf037bf0eff8718dc37aec53c0517b4e5cf',
    tokenDecimals: 18,
    exchangeAddress: '0xfeba66b33d6854df0caefecd89b3c15b2da058b9'
  },
  {
    symbol: 'RBPC',
    name: 'Relax Buddy Token',
    tokenAddress: '0x050508637d2878755cb29b2be4320ac24d5ce4ff',
    tokenDecimals: 18,
    exchangeAddress: '0x7aac96b23b2884cfe8045e7d70b0420b8319f965'
  },
  {
    symbol: 'A',
    name: 'Alpha Coin',
    tokenAddress: '0xb13ece3a08057ba0ca0671ebf8f78adb462d8214',
    tokenDecimals: 12,
    exchangeAddress: '0x584b248c131f56c5e0e6a59ff7c2d21cfac20e35'
  },
  {
    symbol: 'Fab',
    name: 'Fabcoins',
    tokenAddress: '0xdcc3e7cd353dd71a1ca77d423f194995a805d41c',
    tokenDecimals: 0,
    exchangeAddress: '0xd169725b804d14878679f50b04ae7aa11e5fd1a7'
  },
  {
    symbol: 'BIL',
    name: 'BIL Coin',
    tokenAddress: '0x34833001d99851b85729606f241ca872d1a1e461',
    tokenDecimals: 2,
    exchangeAddress: '0xca0a8af352bd6380dc3872cbc0eddf75420a2b59'
  },
  {
    symbol: 'WBNB',
    name: 'Wrapped BNB',
    tokenAddress: '0x24dc3617963e0422c826bc7705b378ab43da517a',
    tokenDecimals: 18,
    exchangeAddress: '0xb75d470d939d052f25cdd0abf4ba680ebad75c45'
  },
  {
    symbol: 'LEX',
    name: 'Lexington',
    tokenAddress: '0x8d063ff3a621718a31892ca7de7704d34e988f0c',
    tokenDecimals: 18,
    exchangeAddress: '0x046a77358dd6c29512486d7ec5604f7fcbc36d3e'
  },
  {
    symbol: 'HBT',
    name: 'Hubiits',
    tokenAddress: '0xdd6c68bb32462e01705011a4e2ad1a60740f217f',
    tokenDecimals: 15,
    exchangeAddress: '0xb6ee174accf61bc9aa570894daed5d71c2473fb9'
  },
  {
    symbol: 'IOST',
    name: 'IOSToken',
    tokenAddress: '0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab',
    tokenDecimals: 18,
    exchangeAddress: '0x16e7036c777bbb1316b340d8123bc6c2e3b193ec'
  },
  {
    symbol: 'CCS',
    name: 'Crypto Credit Swap',
    tokenAddress: '0x049b8a66fe1bf8be509d5c454c83547c4f0c1190',
    tokenDecimals: 18,
    exchangeAddress: '0x356ce7b8b450142af811908a372e3c40801f69bc'
  },
  {
    symbol: 'XSC',
    name: 'CrowdstartCoin',
    tokenAddress: '0x0f513ffb4926ff82d7f60a05069047aca295c413',
    tokenDecimals: 18,
    exchangeAddress: '0x74128a6ab3e22d881661f25a50d48ce4922213e2'
  },
  {
    symbol: 'HT',
    name: 'HuobiToken',
    tokenAddress: '0x6f259637dcd74c767781e37bc6133cd6a68aa161',
    tokenDecimals: 18,
    exchangeAddress: '0x60058dd4cbab1870d2b8741fab24725a2f110054'
  },
  {
    symbol: 'VIU',
    name: 'Viuly Token',
    tokenAddress: '0x464baddce9bd32581a7d59d9bb8350c7c7764668',
    tokenDecimals: 18,
    exchangeAddress: '0x7fd3b59b85eab3bc61fc552fddce10f1e8485ba1'
  },
  {
    symbol: 'TRO',
    name: 'TROLL',
    tokenAddress: '0x692093032661c2ae1dfa152610784ce8054fc842',
    tokenDecimals: 18,
    exchangeAddress: '0x1ca16f7ec104007fdde1d396742eb9ea5f64d035'
  },
  {
    symbol: 'XGP',
    name: 'AIGO Protocol',
    tokenAddress: '0x37f4ade226a15858d9eee4bb4cbc1e70ccaf290d',
    tokenDecimals: 18,
    exchangeAddress: '0x42b666e126f0339b8d7a11398f7c8560db3e4bcc'
  },
  {
    symbol: 'POD',
    name: 'Podcash',
    tokenAddress: '0x8c971c1954e1ea0e78e1dd9e4c38be68dd66be10',
    tokenDecimals: 18,
    exchangeAddress: '0xe128e66f87390d781f8834fc455fe9f2491657ee'
  },
  {
    symbol: 'FUSE',
    name: 'Fuse Token',
    tokenAddress: '0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d',
    tokenDecimals: 18,
    exchangeAddress: '0xf9a204774ac595216c3c4e4249b7624e34ee52d5'
  },
  {
    symbol: 'STG',
    name: 'Storag Coin',
    tokenAddress: '0x89d3563724c6f0c1a18ddf6427ec43a35ed22e3f',
    tokenDecimals: 8,
    exchangeAddress: '0x3a127c50dc472abc627a3ca59ee8cdc4596e6465'
  },
  {
    symbol: 'CBI',
    name: 'Coin Bank Int',
    tokenAddress: '0x43e5f59247b235449e16ec84c46ba43991ef6093',
    tokenDecimals: 18,
    exchangeAddress: '0xe316a7fe8bf258e48040e55ab7b49950e123e8e7'
  },
  {
    symbol: 'DLO',
    name: 'Delio',
    tokenAddress: '0x8a6284155d31a62c531f70daacff3ada333f9019',
    tokenDecimals: 18,
    exchangeAddress: '0xf145168537885ae5340cf7ce3231782da5b14af1'
  },
  {
    symbol: 'DMSK',
    name: 'Damski',
    tokenAddress: '0xbffd431ba4adac00673c87577a55c192a03821d5',
    tokenDecimals: 2,
    exchangeAddress: '0xc5c6d308863a662b7669dabf71c8ff6dae1f156d'
  },
  {
    symbol: 'TFC',
    name: 'The First Coin',
    tokenAddress: '0x210c203e8f05be72b69624fe08b9a5530d51ee36',
    tokenDecimals: 18,
    exchangeAddress: '0x517c3aafb5a7700dae5f00da65f31046ce964f79'
  },
  {
    symbol: 'URING',
    name: 'Uniring',
    tokenAddress: '0x21647310e9d1ed929eb9ab626d34e4df3b74a0a1',
    tokenDecimals: 0,
    exchangeAddress: '0xad1f9f7a1ba2d594ae6a8577730b9229be5d07d9'
  },
  {
    symbol: 'TCAD',
    name: 'TrueCAD',
    tokenAddress: '0x00000100f2a2bd000715001920eb70d229700085',
    tokenDecimals: 18,
    exchangeAddress: '0xf996d7d9bacb9217ca64bbce1b1cd72e0e886be6'
  },
  {
    symbol: 'DOR',
    name: 'DoradoToken',
    tokenAddress: '0x906b3f8b7845840188eab53c3f5ad348a787752f',
    tokenDecimals: 15,
    exchangeAddress: '0x3eaf588988212a76275d6de06705583426b7f53e'
  },
  {
    symbol: 'DEFI',
    name: 'DEFI-ORG-TUTORIAL',
    tokenAddress: '0x1ba4dd5306528a92906193b070980ccb2322a2e4',
    tokenDecimals: 18,
    exchangeAddress: '0xc410d34951561851536b3f97b47ef4b054dd9a59'
  },
  {
    symbol: 'STZ',
    name: 'STZ',
    tokenAddress: '0xec71a153b29da4821ff1d58eb9c72fff75a1fc48',
    tokenDecimals: 18,
    exchangeAddress: '0x05bb3b925d6f5758cab8f6e7014f01e970fc647a'
  },
  {
    symbol: 'CHL',
    name: 'ChelleCoin',
    tokenAddress: '0x8b8e088c7ad40d70d0a8183a399c8f9c24b5c8d8',
    tokenDecimals: 18,
    exchangeAddress: '0x3a9effa375ba10d579d9fb6a87cd18cef370a155'
  },
  {
    symbol: 'eCell',
    name: 'Ethereum Cell Network',
    tokenAddress: '0x9b62ec1453cea5dde760aaf662048ca6eeb66e7f',
    tokenDecimals: 2,
    exchangeAddress: '0xe6741e67f4ba3e8d74a3ca286a7803482bf37e42'
  },
  {
    symbol: 'SURF',
    name: 'Surf Coin',
    tokenAddress: '0x93f54091e83614ed553b31833cf24dbcd0952428',
    tokenDecimals: 18,
    exchangeAddress: '0xfaac9e66c66fc08a1d27d0b0b375fd44d4c669dc'
  },
  {
    symbol: ' TRIS',
    name: 'TRISKAIDEKAPHOBIA',
    tokenAddress: '0x73aa6b881552451eeba7533a1a58b297ed549f3c',
    tokenDecimals: 18,
    exchangeAddress: '0xe5bb9c609c45ff8d04af1680b16b13227e8f71b0'
  },
  {
    symbol: 'AZ',
    name: 'Azbit',
    tokenAddress: '0x77fe30b2cf39245267c0a5084b66a560f1cf9e1f',
    tokenDecimals: 18,
    exchangeAddress: '0x29fe25a3872d859cb184ffd65f7259cef85de0fb'
  },
  {
    symbol: 'MESH',
    name: 'BlockMesh',
    tokenAddress: '0xf03045a4c8077e38f3b8e2ed33b8aee69edf869f',
    tokenDecimals: 18,
    exchangeAddress: '0x7c5d823284f550ced7ae7093e7325631a69c29da'
  },
  {
    symbol: 'CHZ',
    name: 'chiliZ',
    tokenAddress: '0x3506424f91fd33084466f402d5d97f05f8e3b4af',
    tokenDecimals: 18,
    exchangeAddress: '0x00901e311c0f298beaf3445ff8072b8d6c70a205'
  },
  {
    symbol: 'REALTOKEN-9943-MARLOWE-ST-DETROIT-MI',
    name: 'RealToken 9943 Marlowe Street Detroit MI',
    tokenAddress: '0xe5f7ef61443fc36ae040650aa585b0395aef77c8',
    tokenDecimals: 18,
    exchangeAddress: '0x474f8f008f07cd42200bc6dabc1db2206827ee6e'
  },
  {
    symbol: 'ABT',
    name: 'ArcBlock',
    tokenAddress: '0xb98d4c97425d9908e66e53a6fdf673acca0be986',
    tokenDecimals: 18,
    exchangeAddress: '0x450805ef9cbdab907d8b519006010b093da7f8e7'
  },
  {
    symbol: 'XIO',
    name: 'BOMBX',
    tokenAddress: '0x3205df88cf95b5a702f2b6a1cc10e2075f54387c',
    tokenDecimals: 8,
    exchangeAddress: '0x6b6fd86a4797e2fbce26eb6f5b911b72f1d22f06'
  },
  {
    symbol: 'ALIVE',
    name: 'PROOF OF LIFE',
    tokenAddress: '0x1e0c1f1ef51bfc6f9c7e1cca86574c7fc3d3a050',
    tokenDecimals: 18,
    exchangeAddress: '0xbb7f6655c51e7459a2c46986342f6a20039d2ba3'
  },
  {
    symbol: 'KKC',
    name: 'KRYPTOKLUB.com',
    tokenAddress: '0x995876d31451b987d565b42d698939ad8026d72a',
    tokenDecimals: 18,
    exchangeAddress: '0x7d1788fc6b977a56d71e325dc4cf5a4f56d6e815'
  },
  {
    symbol: 'KKO',
    name: 'KRYPTO KLUB OG',
    tokenAddress: '0x1ad16a873dab4be77c26494d659643c87b5e0986',
    tokenDecimals: 18,
    exchangeAddress: '0xa224599e1c928d5b87fc7f4f318cffde422c7a64'
  },
  {
    symbol: 'CPE',
    name: 'Clustersphere',
    tokenAddress: '0x28441ed6ebaad179a2c10a0a5d46bf3f3ace17de',
    tokenDecimals: 18,
    exchangeAddress: '0x8744f3d10563440a321b0b1daff05f7e0f846f48'
  },
  {
    symbol: 'PDC',
    name: 'PLATINUM DIGITAL CORPORATED',
    tokenAddress: '0xaf0336137c2f68e881cea7d95059e6b2ddcf7e57',
    tokenDecimals: 18,
    exchangeAddress: '0xc16ff20c1640ca460ec8418c6f2a8ed96f8acd8c'
  },
  {
    symbol: 'XYO',
    name: 'XY Oracle',
    tokenAddress: '0x55296f69f40ea6d20e478533c15a6b08b654e758',
    tokenDecimals: 18,
    exchangeAddress: '0xae51c1381ae5be0d55231b2c24106fcffd9791a6'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x21e6980e3b60c73cdbaa614aa28f800581c58f40',
    tokenDecimals: 18,
    exchangeAddress: '0x78509ef2cf8257c7d2067d9bafd7c5a2a521b3e4'
  },
  {
    symbol: 'UCN',
    name: 'UChain Token',
    tokenAddress: '0xaaf37055188feee4869de63464937e683d61b2a1',
    tokenDecimals: 18,
    exchangeAddress: '0x2b2651f7f56d08a9d2adcd9789c8e707eec54e26'
  },
  {
    symbol: 'sETH',
    name: 'Synth sETH',
    tokenAddress: '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb',
    tokenDecimals: 18,
    exchangeAddress: '0xe9cf7887b93150d4f2da7dfc6d502b216438f244'
  },
  {
    symbol: 'BLM',
    name: 'Blume Token',
    tokenAddress: '0x2722690a68f97e3361b958eb0b1dedf39190f6ad',
    tokenDecimals: 18,
    exchangeAddress: '0xb4d41a54ee7a6ca54368480573463a5195ecbc88'
  },
  {
    symbol: 'SPRK',
    name: 'Sparkle!',
    tokenAddress: '0x286ae10228c274a9396a05a56b9e3b8f42d1ce14',
    tokenDecimals: 18,
    exchangeAddress: '0x22ffcae266f3b4551c42872b852e0d7415fbec1d'
  },
  {
    symbol: 'GMR',
    name: 'GimmerToken',
    tokenAddress: '0x9b8d5f3402f74c7a61d9f09c32d3ca07b45c1466',
    tokenDecimals: 18,
    exchangeAddress: '0x2bc09ebe244a3e972171740c52102888b6726f2d'
  },
  {
    symbol: 'CYBO',
    name: 'Cybone',
    tokenAddress: '0x7a4c9e42f7bdb9868b276223e6cb71b0500c59d2',
    tokenDecimals: 18,
    exchangeAddress: '0xd898112de4a7dfd9a95fd627f14986d9dc6108da'
  },
  {
    symbol: 'SHCH',
    name: 'ShcherbaCoin',
    tokenAddress: '0x1c4c60edba4c8c09ce8d3dc7c09a670a55c57767',
    tokenDecimals: 18,
    exchangeAddress: '0x85f155c4864a90f37ddc9cf71d02e48cd871cf42'
  },
  {
    symbol: 'ETH12EMACO',
    name: 'ETH 12 EMA Crossover Set',
    tokenAddress: '0x2c5a9980b41861d91d30d0e0271d1c093452dca5',
    tokenDecimals: 18,
    exchangeAddress: '0xdb15ec4ce611cdc16223c31fe1643a59b4fa2801'
  },
  {
    symbol: 'HNY',
    name: 'HoneyCoin',
    tokenAddress: '0x9e7d713d6bceaed3a694459c297a45fc2ab54b19',
    tokenDecimals: 18,
    exchangeAddress: '0xd43f643f237f64c166395e422c952aa7edec91d2'
  },
  {
    symbol: 'HNY',
    name: 'HoneyCoin',
    tokenAddress: '0xedeead7255299a0e27561546bcc99b6d7a96abe4',
    tokenDecimals: 18,
    exchangeAddress: '0xe2279c174fdf996cef6a97fa3064072f8c0e4149'
  },
  {
    symbol: 'HNY',
    name: 'HoneyCoin',
    tokenAddress: '0x676c6bf67cb4fa1f663aee59fd9ecffcab5daf45',
    tokenDecimals: 18,
    exchangeAddress: '0xefd2add9e09075576d8728d075b38e0c94c77e95'
  },
  {
    symbol: 'ZNA',
    name: 'ZNA Token',
    tokenAddress: '0x59c3ba7a0a4c26955037710654f60d368303b3e1',
    tokenDecimals: 18,
    exchangeAddress: '0x9d7e623e7ca2e3606bae00a346178174dc9a94b3'
  },
  {
    symbol: 'AID',
    name: 'aidus',
    tokenAddress: '0xd178b20c6007572bd1fd01d205cc20d32b4a6015',
    tokenDecimals: 8,
    exchangeAddress: '0x7ec394424250ff4355b7161ce88d767c1153688d'
  },
  {
    symbol: 'NCA',
    name: 'Nuclear',
    tokenAddress: '0x7542013f90df4d24ae1b18641bd9e223f5524320',
    tokenDecimals: 6,
    exchangeAddress: '0x90d99e6478a82a6e6f1d31b3a4742fc8139b38fb'
  },
  {
    symbol: 'LLion',
    name: 'Lydian Lion Token',
    tokenAddress: '0x43e41e7129d46a2b8601d2e4331342609e058357',
    tokenDecimals: 5,
    exchangeAddress: '0xd4a3154f7265fda2202dff7c245f59dac4e8e203'
  },
  {
    symbol: '1UP',
    name: 'Uptrennd',
    tokenAddress: '0x07597255910a51509ca469568b048f2597e72504',
    tokenDecimals: 18,
    exchangeAddress: '0x609c8a0248ad2308a5e58658f204bdbd1fe14a39'
  },
  {
    symbol: 'YPSI',
    name: 'Ypsi Pay',
    tokenAddress: '0x5008cc9796f15c052f68b502ed5ad56f49c3665d',
    tokenDecimals: 18,
    exchangeAddress: '0xffbe1fe0092905ed32d32c94412939d29e9a22f8'
  },
  {
    symbol: 'HFT',
    name: 'Insula IM Token ',
    tokenAddress: '0x8c382d6ebd49a6e3cd6d95b85115e19b881c9c07',
    tokenDecimals: 18,
    exchangeAddress: '0x1f7219e165a1aefe8336c118aeaddf30d1d31d81'
  },
  {
    symbol: 'PROPS',
    name: 'Props Token',
    tokenAddress: '0x6fe56c0bcdd471359019fcbc48863d6c3e9d4f41',
    tokenDecimals: 18,
    exchangeAddress: '0x2b3580aa8b39097e2d6df5d65c6f77370e800b75'
  },
  {
    symbol: 'brand',
    name: 'SHUIWW',
    tokenAddress: '0x2a1a7814019fd8adc337179c4009ab69c3794309',
    tokenDecimals: 18,
    exchangeAddress: '0x3c59de11ee93a15d172d35c6c78c245872ef932e'
  },
  {
    symbol: 'REALTOKEN-16200-FULLERTON-AVE-DETROIT-MI',
    name: 'RealToken 16200 Fullerton Ave Detroit MI',
    tokenAddress: '0x22c8ecf727c23422f47093b562ec53c139805301',
    tokenDecimals: 18,
    exchangeAddress: '0xc215ebfe68c15fcafcb848105ef5f5b1158313cb'
  },
  {
    symbol: 'USDx',
    name: 'dForce',
    tokenAddress: '0xeb269732ab75a6fd61ea60b06fe994cd32a83549',
    tokenDecimals: 18,
    exchangeAddress: '0xe5a69d694d0df71a5eea63432ee74f2c4465a56f'
  },
  {
    symbol: 'TAUD',
    name: 'TrueAUD',
    tokenAddress: '0x00006100f7090010005f1bd7ae6122c3c2cf0090',
    tokenDecimals: 18,
    exchangeAddress: '0x88df13889e20efa93ff9a0c08f101f431bd9ddd7'
  },
  {
    symbol: 'THKD',
    name: 'TrueHKD',
    tokenAddress: '0x0000852600ceb001e08e00bc008be620d60031f2',
    tokenDecimals: 18,
    exchangeAddress: '0x505c02b4aa1286375fbdf0c390ac0fe9209dcb05'
  },
  {
    symbol: 'TGBP',
    name: 'TrueGBP',
    tokenAddress: '0x00000000441378008ea67f4284a57932b1c000a5',
    tokenDecimals: 18,
    exchangeAddress: '0x6bfa119a191576ba26bc5e711432aca0cfda04de'
  },
  {
    symbol: '.co.uk',
    name: 'devet',
    tokenAddress: '0x580021753eae14923c17bfa250b0ed49ec3b287d',
    tokenDecimals: 18,
    exchangeAddress: '0x188e6d3a3b51bc007866303bb05a0ca3a259459e'
  },
  {
    symbol: 'GALT',
    name: 'Galt',
    tokenAddress: '0x8b3b9a86d72a68c95a43030710b6abe6a0e413e6',
    tokenDecimals: 18,
    exchangeAddress: '0x397e445a920cc52ed5cf8479ba2e479dfec579c8'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xddd27201dc2f4a3a0afdcff8a807daf0b84c5dc9',
    tokenDecimals: 18,
    exchangeAddress: '0xb3b30571cb6cd73f805e699f635ce3ed0353b2be'
  },
  {
    symbol: 'KNCT',
    name: 'KnoxsterChain',
    tokenAddress: '0xb5e62a10c362a479be1f629f01a7e8146ea7a748',
    tokenDecimals: 18,
    exchangeAddress: '0xb1bf3699775ae50ee2e36ab47ef27daf40f8b55f'
  },
  {
    symbol: 'COINN',
    name: 'Conexao Coin',
    tokenAddress: '0x106f2d734e12545b4d78fc057934905508f1fe24',
    tokenDecimals: 18,
    exchangeAddress: '0x60bd743c253ecf265c50ef9274e353ced295b296'
  },
  {
    symbol: 'TAL',
    name: 'Thaler',
    tokenAddress: '0x375a08ce3a460f20bbafd282be1e3579a2c31f41',
    tokenDecimals: 18,
    exchangeAddress: '0x18175bbd777586746e1894ec97da3f979d0f67d8'
  },
  {
    symbol: 'URING',
    name: 'Uniring',
    tokenAddress: '0xe857581ba3ed180755f65c5403bf06c084987810',
    tokenDecimals: 18,
    exchangeAddress: '0x38dac482874e1c47af774bda592921a8b86f8611'
  },
  {
    symbol: 'AKRO',
    name: 'Akropolis',
    tokenAddress: '0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7',
    tokenDecimals: 18,
    exchangeAddress: '0x8633c63af13e2e5822c4d074fc665ff55982956f'
  },
  {
    symbol: 'CREDIT',
    name: 'CREDIT',
    tokenAddress: '0x2003140a82c9a0cb32636526a43aaa9f7f88022b',
    tokenDecimals: 18,
    exchangeAddress: '0x837a108cfcfa80a0adadf8c048f163c381f48f7e'
  },
  {
    symbol: 'STC',
    name: 'Stellar Classic',
    tokenAddress: '0xf03ff401d952ba146d025788567a146f96bb81fc',
    tokenDecimals: 2,
    exchangeAddress: '0x24c872bfb44a7d37100bd15bed00d7674bf665c9'
  },
  {
    symbol: 'BIZT',
    name: 'Bizanc ERC20 Token',
    tokenAddress: '0x750eab388d8d2b0be4e6b19ad861458957c37306',
    tokenDecimals: 18,
    exchangeAddress: '0x00c51df25b4e98c8e3c8c14d416d906d4dc002a4'
  },
  {
    symbol: 'DCS',
    name: 'DCS TOKEN',
    tokenAddress: '0xbded3f7537e75d6c38c036a3a788a549afde12b1',
    tokenDecimals: 8,
    exchangeAddress: '0x2fe1992ce4d16445698d217fd0163a4896ab3e34'
  },
  {
    symbol: 'SBK',
    name: 'ShadyBucks',
    tokenAddress: '0x3579e381caf332af7f5f4f3177924308571322d3',
    tokenDecimals: 2,
    exchangeAddress: '0x8f43200eb9a7508f599c3109fd49700d0d43c568'
  },
  {
    symbol: 'THD',
    name: 'Thanks Dollar',
    tokenAddress: '0xc3ed0908d7f588f900648b81414f7de8fc7ce3c4',
    tokenDecimals: 18,
    exchangeAddress: '0x5ef41ba2073bd87c4b8c46b733a87dadfef3258d'
  },
  {
    symbol: 'GEMNET',
    name: 'Gemnet',
    tokenAddress: '0x9e18b959e5eed7989bf4341f911f21128ecf21cd',
    tokenDecimals: 18,
    exchangeAddress: '0x4f686b3e9d2327705b2cfc5abd0f03f494763c96'
  },
  {
    symbol: 'UBT',
    name: 'UniBright',
    tokenAddress: '0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e',
    tokenDecimals: 8,
    exchangeAddress: '0xfc96e234d4b31c63051e707105fcc4aba37807fa'
  },
  {
    symbol: 'BUSD',
    name: 'Binance USD',
    tokenAddress: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
    tokenDecimals: 18,
    exchangeAddress: '0x25c610eee8f59768c26567c388986aab3467a3e3'
  },
  {
    symbol: 'SEEDS',
    name: 'Seeds',
    tokenAddress: '0x61404d2d3f2100b124d6827d3f2ddf6233cd71c0',
    tokenDecimals: 10,
    exchangeAddress: '0x1dcea7a07579c8f7638e2863e07c682581d3740c'
  },
  {
    symbol: 'RYC',
    name: 'ReyerCoin',
    tokenAddress: '0x1a3111d682a6719992dbefa616541caac29991b8',
    tokenDecimals: 1,
    exchangeAddress: '0xf85abd7d8718efc0a931ce6a46f88481d01cb57d'
  },
  {
    symbol: 'EVT',
    name: 'ElevationToken',
    tokenAddress: '0x5aaa2182459377b6ca18b10712f9f602140764af',
    tokenDecimals: 8,
    exchangeAddress: '0x3d835084063c1d742d764b4c4587fd3e9defa772'
  },
  {
    symbol: 'SDD',
    name: 'Seeded',
    tokenAddress: '0x4cdc1e87fab12d080cd361561d10a420c4e25865',
    tokenDecimals: 4,
    exchangeAddress: '0x10a904ada6029bb50724b5a6fb20e0f523cec917'
  },
  {
    symbol: 'JURM',
    name: 'Juriseum',
    tokenAddress: '0x34dd5edfed51c632d1d4d2502bc901efb5fdfcd4',
    tokenDecimals: 18,
    exchangeAddress: '0x87ba7814c5748b8ecdd136bcc856b1b2322a9613'
  },
  {
    symbol: 'PETH',
    name: 'Pooled Ether',
    tokenAddress: '0xf53ad2c6851052a81b42133467480961b2321c09',
    tokenDecimals: 18,
    exchangeAddress: '0x63a5a3027268a82d3e6034b8a8959cb9e505e3ae'
  },
  {
    symbol: 'SEV',
    name: 'SLEEVES',
    tokenAddress: '0xba32286b0296f0a86111644b74472d8aabae3027',
    tokenDecimals: 8,
    exchangeAddress: '0xc671b5be0a59b51284a346b11334c7264aefdf3c'
  },
  {
    symbol: 'TCHN',
    name: 'Techan',
    tokenAddress: '0xa52db128b8983429cfec2cf28c20041ff6256a23',
    tokenDecimals: 0,
    exchangeAddress: '0x5f765fa32f5316903168adc392d812ca65943545'
  },
  {
    symbol: 'BOOK',
    name: 'BookCoin',
    tokenAddress: '0xe159915f046acb4ebaea811969b54a738350074e',
    tokenDecimals: 0,
    exchangeAddress: '0xce7729024ef3b0dc0baecc68f152f66c21f5cb19'
  },
  {
    symbol: 'Blog',
    name: 'Blogcoin',
    tokenAddress: '0xa72158c0bfd7137f879e3f2b0a05c904c5517b24',
    tokenDecimals: 8,
    exchangeAddress: '0x46d8c001384243e97eb39675fadb2b2208e87915'
  },
  {
    symbol: 'sUSD',
    name: 'Synth sUSD',
    tokenAddress: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
    tokenDecimals: 18,
    exchangeAddress: '0xb944d13b2f4047fc7bd3f7013bcf01b115fb260d'
  }
]

// Define the Blockscout namespace
export namespace Blockscout {
    // Define the Fee interface
    export interface Fee {
        type: string; // maximum or actual
        value: string; // example: "9853224000000000"
    }

    // Define the AddressTag interface
    export interface AddressTag {
        address_hash: string; // example: "0xEb533ee5687044E622C69c58B1B12329F56eD9ad"
        display_name: string; // example: "name to show"
        label: string; // example: "label"
    }

    // Define the WatchlistName interface
    export interface WatchlistName {
        display_name: string; // example: "name to show"
        label: string; // example: "label"
    }

    // Define the AddressParam interface
    export interface AddressParam {
        hash: string; // example: "0xEb533ee5687044E622C69c58B1B12329F56eD9ad"
        implementation_name?: string; // example: "implementationName"
        name?: string; // example: "contractName"
        is_contract: boolean;
        private_tags?: AddressTag[]; // array of AddressTag
        watchlist_names?: WatchlistName[]; // array of WatchlistName
        public_tags?: AddressTag[]; // array of AddressTag
        is_verified?: boolean;
    }

    // Define the TokenInfo interface
    export interface TokenInfo {
        circulating_market_cap: string; // example: "83606435600.3635"
        icon_url: string; // URL example: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
        name: string; // example: "Tether USD"
        decimals: string; // example: "6"
        symbol: string; // example: "USDT"
        address: string; // example: "0x394c399dbA25B99Ab7708EdB505d755B3aa29997"
        type: string; // example: "ERC-20"
        holders: string; // example: "837494234523"
        exchange_rate: string; // example: "0.99"
        total_supply: string; // example: "10000000"
    }

    // Define the Total interface (for different possible total structures such as TotalERC20, TotalERC721, etc.)
    export interface Total {
        decimals: string; // example: "18"
        value: string; // example: "1000"
    }

    // Define the TokenTransfer interface
    export interface TokenTransfer {
        block_hash: string; // example: "0xf569ec751152b2f814001fc730f7797aa155e4bc3ba9cb6ba24bc2c8c9468c1a"
        from: AddressParam;
        log_index: string; // example: "243"
        method: string; // example: "transfer"
        timestamp: string; // example: "2023-07-03T20:09:59.000000Z"
        to: AddressParam;
        token: TokenInfo; // token information
        total?: Total;
        tx_hash: string; // example: "0x6662ad1ad2ea899e9e27832dc202fd2ef915a5d2816c1142e6933cff93f7c592"
        type: string; // example: "token_transfer"
    }

    // Define the DecodedInputParameter interface
    export interface DecodedInputParameter {
        name: string; // example: "signature"
        type: string; // example: "bytes"
        value: string; // example: "0x0"
    }

    // Define the DecodedInput interface
    export interface DecodedInput {
        method_call: string; // example: "transferFrom(address _from, address _to, uint256 _value)"
        method_id: string; // example: "23b872dd"
        parameters: DecodedInputParameter[]; // array of DecodedInputParameter
    }

    // Define the TransactionAction interface
    export interface TransactionAction {
        protocol: string; // example: "aave_v3"
        type: string; // example: "liquidation_call"
        data: Record<string, string>; // data fields as key-value pairs
    }

    // Define the Transaction interface
    export interface Transaction {
        timestamp: string; // example: "2022-08-02T07:18:05.000000Z"
        fee: Fee; // Fee object
        gas_limit: number;
        block: number; // example: "23484035"
        status: string; // example: "ok" or "error"
        method: string; // example: "transferFrom"
        confirmations: number; // example: "1035"
        type: number; // example: "2"
        exchange_rate: string; // example: "1866.51"
        to: AddressParam; // AddressParam object
        tx_burnt_fee: string; // example: "1099596081903840"
        max_fee_per_gas: string; // example: "55357460102"
        result: string; // example: "Error: (Awaiting internal transactions for reason)"
        hash: string; // example: "0x5d90a9da2b8da402b11bc92c8011ec8a62a2d59da5c7ac4ae0f73ec51bb73368"
        gas_price: string; // example: "26668595172"
        priority_fee: string; // example: "2056916056308"
        base_fee_per_gas: string; // example: "26618801760"
        from: AddressParam; // AddressParam object
        token_transfers: TokenTransfer[]; // array of TokenTransfer
        log_index?: string; // example: "243"
        token?: TokenInfo;
        total?: Total;
        tx_hash: string; // example: "0x6662ad1ad2ea899e9e27832dc202fd2ef915a5d2816c1142e6933cff93f7c592"
        decoded_input?: DecodedInput;
        token_transfers_overflow?: boolean;
        raw_input?: string; // example: "0xa9059cbb000000000000000000000000ef8801eaf234ff82801821ffe2d78d60a0237f97000000000000000000000000000000000000000000000000000000003178cb80"
        value?: string;
        max_priority_fee_per_gas?: string;
        revert_reason?: string;
        confirmation_duration?: [number, number]; // array of two numbers
        tx_tag?: string; // example: "private_tx_tag"
    }
}
// Transaction{
//     timestamp*	string
//     example: 2022-08-02T07:18:05.000000Z
//     fee*	Fee{
    //     type*	string
    //     example: maximum | actual
    //     value*	string
    //     example: 9853224000000000
//     }
//     gas_limit*	integer
//     block*	integer($int32)
//     example: 23484035
//     status*	string*
    //     example: ok | error
//     method*	string
//     example: transferFrom
//     confirmations*	integer
//     example: 1035
//     type*	integer
//     example: 2
//     exchange_rate*	string
//     example: 1866.51
//     to*	AddressParam{
    //     hash*	string
    //     example: 0xEb533ee5687044E622C69c58B1B12329F56eD9ad
    //     implementation_name*	string
    //     example: implementationName
    //     name*	string
    //     example: contractName
    //     is_contract*	boolean
    //     private_tags*	[AddressTag{
        //     address_hash*	string
        //     example: 0xEb533ee5687044E622C69c58B1B12329F56eD9ad
        //     display_name*	string
        //     example: name to show
        //     label*	string
        //     example: label
    //     }]
//     watchlist_names*	[WatchlistName{
        //     display_name*	string
        //     example: name to show
        //     label*	string
        //     example: label
    //     }]
    //     public_tags*	[AddressTag{
        //     address_hash*	string
        //     example: 0xEb533ee5687044E622C69c58B1B12329F56eD9ad
        //     display_name*	string
        //     example: name to show
        //     label*	string
        //     example: label
    //     }]
    //     is_verified*	boolean
//     }
//     tx_burnt_fee*	string
//     example: 1099596081903840
//     max_fee_per_gas*	string
//     example: 55357460102
//     result*	string
//     example: Error: (Awaiting internal transactions for reason)
//     hash*	string
//     example: 0x5d90a9da2b8da402b11bc92c8011ec8a62a2d59da5c7ac4ae0f73ec51bb73368
//     gas_price*	string
//     example: 26668595172
//     priority_fee*	string
//     example: 2056916056308
//     base_fee_per_gas*	string
//     example: 26618801760
//     from*	AddressParam{
    //     hash*	string
    //     example: 0xEb533ee5687044E622C69c58B1B12329F56eD9ad
    //     implementation_name*	string
    //     example: implementationName
    //     name*	string
    //     example: contractName
    //     is_contract*	boolean
    //     private_tags*	[AddressTag{
        //     address_hash*	string
        //     example: 0xEb533ee5687044E622C69c58B1B12329F56eD9ad
        //     display_name*	string
        //     example: name to show
        //     label*	string
        //     example: label
    //     }]
    //     watchlist_names*	[WatchlistName{
        //     display_name*	string
        //     example: name to show
        //     label*	string
        //     example: label
    //     }]
    //     public_tags*	[AddressTag{
        //     address_hash*	string
        //     example: 0xEb533ee5687044E622C69c58B1B12329F56eD9ad
        //     display_name*	string
        //     example: name to show
        //     label*	string
        //     example: label
    //     }]
    //     is_verified*	boolean
//     }
//     token_transfers*	[TokenTransfer{
    //     block_hash*	string
    //     example: 0xf569ec751152b2f814001fc730f7797aa155e4bc3ba9cb6ba24bc2c8c9468c1a
    //     from*	AddressParam{
        //     hash*	string
        //     example: 0xEb533ee5687044E622C69c58B1B12329F56eD9ad
        //     implementation_name*	string
        //     example: implementationName
        //     name*	string
        //     example: contractName
        //     is_contract*	boolean
        //     private_tags*	[AddressTag{
        //     address_hash*	string
        //     example: 0xEb533ee5687044E622C69c58B1B12329F56eD9ad
        //     display_name*	string
        //     example: name to show
        //     label*	string
        //     example: label
    //     }]
    //     watchlist_names*	[WatchlistName{
        //     display_name*	string
        //     example: name to show
        //     label*	string
        //     example: label
    //     }]
    //     public_tags*	[AddressTag{
        //     address_hash*	string
        //     example: 0xEb533ee5687044E622C69c58B1B12329F56eD9ad
        //     display_name*	string
        //     example: name to show
        //     label*	string
        //     example: label
    //     }]
    //     is_verified*	boolean
//     }
//     log_index*	string
//     example: 243
//     method*	string
//     example: transfer
//     timestamp*	string
//     example: 2023-07-03T20:09:59.000000Z
//     to*	AddressParam{
    //     hash*	string
    //     example: 0xEb533ee5687044E622C69c58B1B12329F56eD9ad
    //     implementation_name*	string
    //     example: implementationName
    //     name*	string
    //     example: contractName
    //     is_contract*	boolean
    //     private_tags*	[AddressTag{
        //     address_hash*	string
        //     example: 0xEb533ee5687044E622C69c58B1B12329F56eD9ad
        //     display_name*	string
        //     example: name to show
        //     label*	string
        //     example: label
    //     }]
    //     watchlist_names*	[WatchlistName{
        //     display_name*	string
        //     example: name to show
        //     label*	string
        //     example: label
    //     }]
    //     public_tags*	[AddressTag{
        //     address_hash*	string
        //     example: 0xEb533ee5687044E622C69c58B1B12329F56eD9ad
        //     display_name*	string
        //     example: name to show
        //     label*	string
        //     example: label
    //     }]
    //     is_verified*	boolean
//     }
//     token*	TokenInfo{
    //     circulating_market_cap*	string
    //     example: 83606435600.3635
    //     icon_url*	string
    //     example: https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png
    //     name*	string
    //     example: Tether USD
    //     decimals*	string
    //     example: 6
    //     symbol*	string
    //     example: USDT
    //     address*	string
    //     example: 0x394c399dbA25B99Ab7708EdB505d755B3aa29997
    //     type*	string
    //     example: ERC-20
    //     holders*	string
    //     example: 837494234523
    //     exchange_rate*	string
    //     example: 0.99
    //     total_supply*	string
    //     example: 10000000
//     }
//     total*	{
    //     oneOf ->	
    //     TotalERC20{
        //     decimals*	string
        //     example: 18
        //     value*	string
        //     example: 1000
    //     }
    //     TotalERC721{
        //     token_id*	string
        //     example: 1
    //     }
    //     TotalERC1155{
        //     token_id*	string
        //     example: 1
        //     decimals*	string
        //     example: null
        //     value*	string
        //     example: 1000
    //     }
    //     TotalERC1155Batch[TotalERC1155{
        //     token_id*	string
        //     example: 1
        //     decimals*	string
        //     example: null
        //     value*	string
        //     example: 1000
    //     }]
//     }
//     tx_hash*	string
//     example: 0x6662ad1ad2ea899e9e27832dc202fd2ef915a5d2816c1142e6933cff93f7c592
//     type*	string
//     example: token_transfer
//     }]
//     tx_types*	[
//     example: List [ "token_transfer", "contract_creation", "contract_call", "token_creation", "coin_transfer" ]
//     string]
//     gas_used*	string
//     example: 41309
//     created_contract*	AddressParam{
//     hash*	string
//     example: 0xEb533ee5687044E622C69c58B1B12329F56eD9ad
//     implementation_name*	string
//     example: implementationName
//     name*	string
//     example: contractName
//     is_contract*	boolean
//     private_tags*	[AddressTag{
//     address_hash*	string
//     example: 0xEb533ee5687044E622C69c58B1B12329F56eD9ad
//     display_name*	string
//     example: name to show
//     label*	string
//     example: label
//     }]
//     watchlist_names*	[WatchlistName{
//     display_name*	string
//     example: name to show
//     label*	string
//     example: label
//     }]
//     public_tags*	[AddressTag{
//     address_hash*	string
//     example: 0xEb533ee5687044E622C69c58B1B12329F56eD9ad
//     display_name*	string
//     example: name to show
//     label*	string
//     example: label
//     }]
//     is_verified*	boolean
//     }
//     position*	integer
//     example: 117
//     nonce*	integer
//     example: 115
//     has_error_in_internal_txs*	boolean
//     example: false
//     actions*	[TransactionAction{
//     oneOf ->	
//     TransactionActionAaveV3LiquidationCall{
//     data*	{
//     }
//     example: OrderedMap { "debt_amount": "1.289548595490270429", "debt_symbol": "AAVE", "debt_address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", "collateral_amount": "110.824768", "collateral_symbol": "USDC", "collateral_address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", "block_number": 1 }
//     protocol*	string
//     example: aave_v3
//     type*	string
//     example: liquidation_call
//     }
//     TransactionActionAaveV3BSWRF{
//     data*	{
//     }
//     example: OrderedMap { "amount": "1.289548595490270429", "symbol": "AAVE", "address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", "block_number": 1 }
//     protocol*	string
//     example: aave_v3
//     type*	string
//     example: borrow | supply | withdraw | repay | flash_loan
//     }
//     TransactionActionAaveV3EnableDisableCollateral{
//     data*	{
//     }
//     example: OrderedMap { "symbol": "AAVE", "address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", "block_number": 1 }
//     protocol*	string
//     example: aave_v3
//     type*	string
//     example: enable_collateral | disable_collateral
//     }
//     TransactionActionUniswapV3MintNFT{
//     data*	{
//     }
//     example: OrderedMap { "name": "Uniswap V3: Positions NFT", "symbol": "UNI-V3-POS", "address": "0x1F98431c8aD98523631AE4a59f267346ea31F984", "to": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", "ids": List [ "1", "2" ], "block_number": 1 }
//     protocol*	string
//     example: uniswap_v3
//     type*	string
//     example: mint_nft
//     }
//     TransactionActionUniswapV3BCS{
//     data*	{
//     }
//     example: OrderedMap { "address0": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", "address1": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", "amount0": "1.289548595490270429", "amount1": "110.824768", "symbol0": "AAVE", "symbol1": "USDC" }
//     protocol*	string
//     example: uniswap_v3
//     type*	string
//     example: burn | collect | swap
//     }
//     }]
//     decoded_input*	DecodedInput{
    //     method_call*	string
    //     example: transferFrom(address _from, address _to, uint256 _value)
    //     method_id*	string
    //     example: 23b872dd
    //     parameters*	[DecodedInputParameter{
        //     name*	string
        //     example: signature
        //     type*	string
        //     example: bytes
        //     value*	string
        //     example: 0x0
    //     }]
//     }
//     token_transfers_overflow*	boolean
//     example: false
//     raw_input*	string
//     example: 0xa9059cbb000000000000000000000000ef8801eaf234ff82801821ffe2d78d60a0237f97000000000000000000000000000000000000000000000000000000003178cb80
//     value*	string
//     example: 0
//     max_priority_fee_per_gas*	string
//     example: 49793412
//     revert_reason*	string
//     example: Error: (Awaiting internal transactions for reason)
//     confirmation_duration*	{
//     }
//     example: List [ 0, 17479 ]
//     tx_tag*	string
//     }
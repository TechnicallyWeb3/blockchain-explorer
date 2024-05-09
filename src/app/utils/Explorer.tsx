import { Blockscout } from "../interfaces/Blockscout";

export const baseUrlMain = 'https://eth.blockscout.com/api/v2/'

export async function getAddressTransactions(address: string, limit: number = 50, page: number = 1 ): Promise<Blockscout.Transaction[] | undefined> {
    try {
        const endpoint = `addresses/${address}/transactions`;
        // Replace this URL with your data source URL
        const url = `${baseUrlMain}${endpoint}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // console.log(response);
        const data = await response.json();
        
        return data.items.slice(0, limit);

    } catch (error) {
        console.error('Error fetching data:', error);
        // try backup data source
    }
}

export async function getAddressInternalTransactions(address: string, limit: number = 50, page: number = 1 ): Promise<Blockscout.Transaction[] | undefined> {
    try {
        const endpoint = `addresses/${address}/internal-transactions`;
        // Replace this URL with your data source URL
        const url = `${baseUrlMain}${endpoint}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // console.log(response);
        const data = await response.json();
        
        return data.items.slice(0, limit);

    } catch (error) {
        console.error('Error fetching data:', error);
        // try backup data source
    }
}

export async function getAddressERC20Transfers(address: string, limit: number = 50, page: number = 1 ): Promise<any> {
    try {
        const endpoint = `addresses/${address}/token-transfers?type=ERC-20`;
        // Replace this URL with your data source URL
        const url = `${baseUrlMain}${endpoint}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log(data.items);
        
        return data.items.slice(0, limit);

    } catch (error) {
        console.error('Error fetching data:', error);
        // try backup data source
    }
}

export async function getAddressNFTTransfers(address: string, limit: number = 50, page: number = 1 ): Promise<any> {
    try {
        const endpoint = `addresses/${address}/token-transfers?type=ERC-721%2CERC-1155`;
        // Replace this URL with your data source URL
        const url = `${baseUrlMain}${endpoint}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log(data.items);
        
        return data.items.slice(0, limit);

    } catch (error) {
        console.error('Error fetching data:', error);
        // try backup data source
    }
}

export async function getBlockTransactions(input: string, limit: number = 50, page: number = 1 ): Promise<any> {
    // input should be block number or blockhash
    try {
        const endpoint = `/blocks/${input}/transactions`;
        // Replace this URL with your data source URL
        const url = `${baseUrlMain}${endpoint}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        
        return data.items.slice(0, limit);

    } catch (error) {
        console.error('Error fetching data:', error);
        // try backup data source
    }
}

export async function getBlockInfo(input: string, limit: number = 50, page: number = 1 ): Promise<any> {
    // input should be block number or blockhash
    try {
        const endpoint = `/blocks/${input}`;
        // Replace this URL with your data source URL
        const url = `${baseUrlMain}${endpoint}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        
        return data.items.slice(0, limit);

    } catch (error) {
        console.error('Error fetching data:', error);
        // try backup data source
    }
}
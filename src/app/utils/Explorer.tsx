import { Blockscout } from "../interfaces/Blockscout";

export async function getTransactionsOfAddress(address: string, limit: number = 50, page: number = 1 ): Promise<Blockscout.Transaction[] | undefined> {
    try {
        // Replace this URL with your data source URL
        const url = `https://eth.blockscout.com/api/v2/addresses/${address}/transactions`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response);
        const data = await response.json();
        
        return data.items.slice(0, limit);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
'use client'
import { useState, useEffect } from 'react';
import { 
    getAddressTransactions, 
    getAddressERC20Transfers, 
    getAddressNFTTransfers, 
    getAddressInternalTransactions,
    getBlockTransactions,
    getBlockInfo
} from '../utils/Explorer';
import { Blockscout } from '../interfaces/Blockscout';

// Define the props interface
interface AddressTableProps {
    initialAddress?: string; // Optional prop for initial address
    blockNumberOrHash?: string;
}

const AddressTable: React.FC<AddressTableProps> = ({ initialAddress, blockNumberOrHash }) => {
    // State variables
    const [address, setAddress] = useState<string>(initialAddress ?? '');
    const [block, setBlock] = useState<string>(blockNumberOrHash ?? '');
    const [numRecords, setNumRecords] = useState<number>(25);
    const [transactions, setTransactions] = useState<Blockscout.Transaction[] | undefined>([]);

    // Fetch data based on the input address and number of records
    const fetchData = async () => {
        try {
            if (initialAddress) {
                const data = await getAddressTransactions(initialAddress);
                setTransactions(data);
                // console.log(data);
                console.log(await getAddressInternalTransactions(initialAddress));
                console.log(await getAddressERC20Transfers(initialAddress));
                console.log(await getAddressNFTTransfers(initialAddress));
                console.log(data);
            }
            if (blockNumberOrHash) {
                console.log(await getBlockTransactions(blockNumberOrHash));
                console.log(await getBlockInfo(blockNumberOrHash));
            }
            console.log(transactions);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Fetch data when component mounts or when address/numRecords changes
    useEffect(() => {
        fetchData();
    }, [address, numRecords]);

    return (
        <div>
            {/* Input field for entering an address */}
            <div>
                <label htmlFor="addressInput">Address:</label>
                <input
                    id="addressInput"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter an address"
                />
            </div>
            
            {/* Dropdown to select number of records */}
            <div>
                <span>Show</span>
                <select
                    value={numRecords}
                    onChange={(e) => setNumRecords(Number(e.target.value))}
                >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                </select>
                <span>Records</span>
            </div>

            {/* Button to fetch data */}
            <button onClick={fetchData}>Fetch Data</button>

            {/* Display the data in a table */}
            <table>
                <thead>
                    <tr>
                        <th>Transaction Hash</th>
                        <th>Method</th>
                        <th>Block</th>
                        <th>Age</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Value</th>
                        <th>Txn Fee</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(transactions) ? (
                    transactions.map((transaction, index) => (
                        <tr key={transaction.hash}>
                            <td>{transaction.hash}</td>
                            <td>{transaction.method}</td>
                            <td>{transaction.block}</td>
                            <td>{transaction.timestamp}</td>
                            <td>{transaction.from.hash}</td>
                            <td>{transaction.to.hash}</td>
                            <td>{transaction.value}</td>
                            <td>{transaction.fee.value}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={8}>No data available or data not an array.</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default AddressTable;

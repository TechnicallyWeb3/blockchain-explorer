import { useMemo } from 'react';
import { Blockscout } from '../interfaces/Blockscout';

// Define the props interface
interface TransactionTableProps {
    transactions: Blockscout.Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
    
    return (
        <div>

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
                {Array.isArray(transactions) && transactions.length > 0 ? (
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
                        <td colSpan={8}>No transaction data available.</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;